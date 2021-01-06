---
date: "2018-06-28T00:00:00Z"
description: I revoked my personal AWS credentials without realizing that they were
  being used on a production system. Lessons ensued.
meta_img: null
keywords: aws, devops, aws credentials, security, monitoring, alerting
redirect_from: /2018/06/28/lessons-learned-revoking-personal-aws-credentials-used-in-production/
tags:
- 'devops'
title: Using personal AWS credentials in production
---

Earlier this week in a fit of security I went into AWS and revoked my old AWS credentials. I assumed that all would be well but unfortunately didn’t realize that my AWS credentials were being used on a production system that wrote data to S3. Before I revoked them I did see that the recent activity contained S3 but assumed it was just me playing around with the AWS CLI. Of course I shouldn’t have had my AWS credentials used on a live system and of course we updated the application to use its own account. At the same time the experienced taught me a few valuable lessons besides not using personal keys on deployed systems:

- Logging should be consistent and accessible. I knew where the logs for this application were but it wasn’t obvious to the rest of the team. More importantly, people shouldn’t have to log in to an instance to access the logs. Instead they should be pushed to a central repository. We have this for some of our applications but not as many as we should.
- Symptom based monitoring really works. I came across this phrase when reading Rob Ewaschuk’s [observations on alerting and monitoring](https://docs.google.com/document/d/199PqyG3UsyXlwieHaqbGiWVa8eMWi8zzAn0YfcApr8Q/edit) years ago and it stuck with me. We had a few alerts on this application - ranging from making sure CPU usage was neither too high nor too low, it had a healthy rate of data in, and it had a healthy rate of data out. In this case the application was receiving data and was processing but it failed to upload to S3. This meant that the first two alerts were fine and it was the network out alert that was triggered. This is exactly what you want - in this case that alert encapsulates the others and is really what affects end users. They care that the data is on S3 and don’t worry about the CPU usage or how the instance is receiving the data.
