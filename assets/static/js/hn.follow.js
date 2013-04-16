(function($) {
    var defaults = {
      firebase_url: 'https://follow-on-hn.firebaseio.com/urls',
      error_callback: function() {
        console.log('There was an error retrieving the url');
      }
    };

    $.followHN = function(options) {
        var settings = $.extend({}, defaults, options);

        var save = function(url, hn_id) {
          var clean_url = url.replace(/[\.\$\[\]\#\/\\\:]+/g,'-');
          var dataRef = new Firebase( settings.firebase_url );
          var urlRef = dataRef.child(clean_url);
          urlRef.set({ url:url, hnid: hn_id });
        };

        var get_hn_id = function(json) {
          var found = false;
          $.each(json.items, function(idx,val) {
            // console.log(val.url + ' ' + val.item_id)
            if (val.url === settings.url) {
              // console.log('Found a match!');
              save(val.url, val.item_id);
              settings.callback('https://news.ycombinator.com/item?id=' + val.item_id);
              found = true;
              return false;
            }
          });
          return found;
        }

        var retrieve_hn_data = function(username, url) {
          var retrieve_url = 'http://hndroidapi.appspot.com/submitted/format/json/user/'+username+'?appid=hn-follow';
          $.ajax({
           type: 'GET',
            url: retrieve_url,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(json) {
              // console.log('Success');
              var status = get_hn_id(json);
              if (status) {
                // console.log('Succeeded');
              } else {
                settings.error_callback();
                // console.log('Failed');
              }
            },
            error: function(e) {
              // console.log('Failed');
              settings.error_callback();
            }
          });
        }

        this.get_hn_url = function(url) {
          if (!settings.username) {
            console.log('Must specify an HN username');
            return null;
          }

          if (!settings.callback) {
            console.log('Must specify a callback function');
            return null;
          }

          if (!url) {
            console.log('Must specify a url');
            return null;
          }

          settings.url = url;

          var clean_url = settings.url.replace(/[\.\$\[\]\#\/\\\:]+/g,'-');
          // console.log('Clean url: ' + clean_url);

          var dataRef = new Firebase( settings.firebase_url );
          var urlRef = dataRef.child(clean_url);
          urlRef.once('value', function(snapshot) {
            if(snapshot.val() === null) {
              // console.log(settings.url + ' does not exist.');
              retrieve_hn_data(settings.username, settings.url);
            } else {
              // console.log(settings.url + ' found ' + snapshot.val().hnid);
              settings.callback('https://news.ycombinator.com/item?id=' + snapshot.val().hnid);
            }
          });
        }
    }
}(jQuery));