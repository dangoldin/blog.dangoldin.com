---
layout: post
title: "Domain specific API definitions"
description: "Amazon rewrote the boto library to take advantage of their domain specific models that represents the AWS API. It's wonderfully clever and I'd love to see standardization around API definition."
keywords: "apis, amazon, aws, boto3, domain specific languages"
image_url:
category:
tags: ["#meta", "#code"]
---
{% include setup %}
Yesterday, Amazon <a href="https://aws.amazon.com/blogs/aws/now-available-aws-sdk-for-python-3-boto3/" target="_blank">announced</a> a major update to their Python client, boto3. The core functionality is unchanged but they used a clever solution to make it easier to add, modify, and remove endpoints. By coming up with a <a href="https://github.com/boto/boto3/tree/develop/boto3/data" target="_blank">standardized representation</a> for each of the endpoints they’re able to write wrappers in different languages that generate the API calls programmatically. For example, I've included a subset of the <a href="https://github.com/boto/boto3/blob/develop/boto3/data/ec2/2015-04-15/resources-1.json" target="_blank">EC2 definition</a> below. It contains the information necessary to programatically generate the API wrapper to hit the appropriate EC2 endpoints.

{% highlight json %}
{
  "service": {
    "actions": {
      "CreateDhcpOptions": {
        "request": { "operation": "CreateDhcpOptions" },
        "resource": {
          "type": "DhcpOptions",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "DhcpOptions.DhcpOptionsId" }
          ],
          "path": "DhcpOptions"
        }
      },
      "CreateInstances": {
        "request": { "operation": "RunInstances" },
        "resource": {
          "type": "Instance",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Instances[].InstanceId" }
          ],
          "path": "Instances[]"
        }
      },
      ...
    }
  }
}
{% endhighlight %}

This domain specific approach is great when working with APIs and I’m surprised more libraries don’t adopt it. The benefits include being able to keep the actual code the same and only updating the definitions as well as having definitions shared across various language implementations. An additional benefit that can be gotten is actually downloading the latest definitions at runtime. This way you’re always running against the latest version of the API and don’t have to worry about upgrading versions.

I’d love to see more companies adopt this approach and even come up with a standard API declaration language. Then a single set of scripts can be used to wrap any API. Imagine how much simpler it would be to integrate with third party APIs when all you need to do is read the docs and have everything else wired. In fact the docs themselves can be generated from the base definitions.
