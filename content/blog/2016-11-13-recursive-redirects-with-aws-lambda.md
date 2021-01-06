---
date: "2016-11-13T00:00:00Z"
description: Using AWS's Lambda and API Gateway we can write recursive functions that
  work by sending state through HTTP redirects.
meta_img: null
keywords: AWS, lambda, api gateway, redirects, recursion, http
tags:
- 'code'
title: Recursive redirects with AWS Lambda
---

Two years ago I [toyed around](http://dangoldin.com/2014/12/31/redirect-recursion/) with an odd idea of implementing recursion over HTTP redirects. The idea is that the state is managed through the query string arguments and at each recursive step we just redirect to the URL for the next one. I still can’t think of a legitimate use case for this approach but have been on an AWS [Lambda](https://aws.amazon.com/lambda/) binge lately and wanted to see whether I can get this “redirect recursion” working under Lambda. Turns out it’s incredibly easy.

The only question was exposing the Lambda function to the outside world but AWS offers the [API Gateway](https://aws.amazon.com/api-gateway/) service to make this happen. This also gave me a chance to mess around with the API Gateway for the first time and definitely has me thinking about entire tools and applications that can be done in a “serverless” way.

{{< highlight javascript >}}
# A simple Lambda function to calculate the factorial
'use strict';

exports.handler = (event, context, callback) => {

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    switch (event.httpMethod) {
        // Calculate the factorial
        case 'GET':
            var n = parseInt(event.queryStringParameters.n,10) || 1;
            var a = parseInt(event.queryStringParameters.a,10) || 1;
            if (n <= 1) {
                done(null, {'factorial': a});
            } else if (n > 20) {
                done(null, {'status': 'try a smaller number'});
            } else {
                var url = 'https://rrouzys2ra.execute-api.us-east-1.amazonaws.com/prod/redirect-recursion?';
                var args = 'n=' + (n-1) + '&a=' + (a*n);
                callback(null, {
                    statusCode: 302,
                    headers: {
                        'Location': url + args
                    }
                });
            }
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};
{{< / highlight >}}

<a href="/image/aws-lambda-resource.png"><img src="/image/aws-lambda-stages.png" alt="AWS Lambda Stage Setup" data-width="1493" data-height="587" data-layout="responsive" /></a>
<p class="caption">This connects any request to the /redirect-recursion endpoint to the Lambda function.</p>

<a href="/image/aws-lambda-stages.png"><img src="/image/aws-lambda-stages.png" alt="AWS Lambda Stage Setup" data-width="1493" data-height="587" data-layout="responsive" /></a>
<p class="caption">This shows the URL that needs to be invoked to run the recursion.</p>
