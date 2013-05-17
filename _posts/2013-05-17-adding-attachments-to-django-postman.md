---
layout: post
title: "Adding attachments to django-postman"
description: ""
category:
tags: []
---
{% include JB/setup %}
After doing a round of customer development for Makers Alley, we discovered that customers really wanted to communicate with makers about their pieces. In true MVP fashion, we got the first iteration out in a day by using <a href="https://bitbucket.org/psam/django-postman/overview" target="_blank">django-postman</a> to handle the user to user communication. Within a few days, we quickly discovered that text messages weren't enough and we needed to support file attachments, otherwise makers can’t easily show their designs and customers can’t share what they like. Unfortunately, django-postman does not support attachments and we didn’t want to have to incorporate another messaging library. Another constraint was that we were already using the awesome <a href="http://blueimp.github.io/jQuery-File-Upload/" target="_blank">jQuery File Upload</a> library (in truth, a modified <a href="https://github.com/sigurdga/django-jquery-file-upload" target="_blank">Django version by Sigurd Gartmann</a>) to allow makers to upload images when managing their storefronts.

We wanted to leverage our existing file upload system but also incorporate it with the django-postman messaging library without having to modify any of the code in django-postman. We weren’t able to find <a href="http://stackoverflow.com/questions/16570019/how-can-i-modify-django-postman-to-allow-sending-of-attachments/" target="_blank">anything on StackOverflow</a> that dealt with this issue so we were left with writing our own. Here’s the approach we ended up taking that might come in handy for anyone else running into the same problem. The code needs some cleaning and I need to add some error checking but I’m sharing it with the excuse of “perfect is the enemy of good.”

We built a new app, postman_attachments, that would serve as the intermediary between the file upload piece and django-postman.

<ul>
    <li>
        models.py: Attachment that would map the django-postman Message model to an uploaded file
        {% highlight python %}
class Attachment(models.Model):
    message = models.ForeignKey(postman_models.Message)
    attachment = models.ForeignKey(fileupload_models.GenericFile)

    def __unicode__(self):
        return str(self.message) + self.attachment.__unicode__(){% endhighlight %}
    </li>
    <li>
        api.py: Versions of pm_write and pm_broadcast that would do the same work as the original but would also map the attachments between
        {% highlight python %}
def pma_write(sender, recipient, subject, file_ids=[], body='', skip_notification=False,
        auto_archive=False, auto_delete=False, auto_moderators=None):

        ### Same code as in pm_write

        for file_id in file_ids:
            f = GenericFile.objects.get(id=file_id)
            a = Attachment(message=message,attachment=f)
            a.save(){% endhighlight %}
    </li>
    <li>
        forms.py: In our case, we needed to tweak the FullReplyForm and created our own version that included a new “file_ids” field to hold the ids of the uploaded files. The full solution would need to make versions of the other forms included in django-postman.
        {% highlight python %}
allow_copies = not getattr(settings, 'POSTMAN_DISALLOW_COPIES_ON_REPLY', False)
class FullReplyImageForm(BaseReplyForm):
    """The complete reply form."""
    if allow_copies:
        recipients = CommaSeparatedUserField(label=(_("Additional recipients"), _("Additional recipient")), required=False)

    file_ids = forms.CharField(required=False,widget=forms.HiddenInput())

    class Meta(BaseReplyForm.Meta):
        fields = (['recipients'] if allow_copies else []) + ['subject', 'body', 'file_ids']

    @transaction.commit_on_success
    def save(self, recipient=None, parent=None, auto_moderators=[]):
        ### Bunch of code from original save method in BaseWriteForm from django-postman
        file_ids = [x for x in self.cleaned_data.get('file_ids').split(',') if x]
        ### Bunch of code from original save method in BaseWriteForm from django-postman
        for file_id in file_ids:
            f = GenericFile.objects.get(id=file_id)
            a = Attachment(message=self.instance,attachment=f)
            a.save(){% endhighlight %}
    </li>
</ul>

In addition, we needed to override the default django-postman templates to display the attachments for a message as well as include the necessary javascript to deal with the jQuery File Upload piece.

<ul>
    <li>view.html
        {% highlight html %}{% raw %}
        <div class="pm_body">{{ message.body|linebreaksbr }}</div>
      {% if message.attachment_set.all %}
        <div class="pm_attachments">
          <span>Attachments</span>
          <ul>
            {% for a in message.attachment_set.all %}
              <li><a href="{{ a.attachment.file.url }}" target="_blank">{{ a.attachment.file.url }}</a></li>
            {% endfor %}
          </ul>
        </div>
      {% endif %}{% endraw %}{% endhighlight %}
    </li>

    <li>view.js
        {% highlight javascript %}
$(document).ready(function(){
  var upload_ids = [];
  $('#fileupload-attachments').bind('fileuploaddone', function (e, data) {
    console.log('Done uploading product images');
    $(data.result).each(function(){
      upload_ids.push(this.id);
    });
    console.log( upload_ids.join(',') );
    $('#id_file_ids').val( upload_ids.join(',') );

    if ($('#fileupload-attachments td.preview').length == upload_ids.length) {
      console.log('Enabling input');
      $('#reply-form button[type="submit"]').removeAttr('disabled');
    };
  });

  $('#fileupload-attachments').bind('fileuploadstart', function (e, data) {
    console.log('Disabling input');
    $('#reply-form button[type="submit"]').attr('disabled','disabled');
  });

  $('#fileupload-attachments').bind('fileuploadpreviewdone', function (e, data) {
    if ($('#fileupload-attachments td.preview').length == product_image_ids.length) {
      $('#fileupload-attachments tbody.files tr').remove();
    };
  });
});{% endhighlight %}
    </li>
</ul>

The last minor thing we needed to do was update our urls.py file to override the standard django-postman urls to have them use our custom form.

<ul>
    <li>urls.py
        {% highlight python %}
url(r'^messages/reply/(?P<message_id>[\d]+)/$', 'postman.views.reply',
        {'form_class': FullReplyImageForm},
        name='postman_reply'),
url(r'^messages/view/t/(?P<thread_id>[\d]+)/$', 'postman.views.view_conversation',
        {'form_class': FullReplyImageForm},
        name='postman_view_conversation'),
url(r'^messages/', include('postman.urls')),{% endhighlight %}
    </li>
</ul>

I’d love to release this publicly but don’t have much experience creating standalone Django apps. If you have experience in open sourcing Django apps let me know - I’d love to get this out there as a standalone app or somehow incorporated into django-postman.