---
layout: post
title: "Automatically generating APIs"
description: "Nearly every API library is the same general steps. I expect we'll see API libraries that will be automatically generated based on a data model or even an AI process that 'reads' the documentation."
keywords: "api, ai, amazon"
image_url:
category:
tags: ["#meta"]
---
{% include setup %}
A large part of modern software engineering is working with external APIs and services. Whether you want to automate a deployment on AWS, collect payments via Stripe, or track various behaviors using MixPanel, the process is the same - go through their documentation to figure out the available endpoints, the request requirements, and what the response will be. The next step is writing a simple API wrapper around the relevant endpoints that can then be accessed by the rest of the application. Given all the investment in AI research I’d love to see an application that’s able to generate API wrappers in any language for an API based solely on the documentation. Amazon has taken the first steps by [developing a data model](https://aws.amazon.com/blogs/aws/now-available-aws-sdk-for-python-3-boto3/) to represent their API which is then used to generate the actual libraries in a variety of languages. By changing something in the definition they can quickly rebuild the libraries in every language. One can also imagine using this data model to generate the actual documentation. This documentation can then be used to go back to the data model which can then be used to go back to the documentation.
