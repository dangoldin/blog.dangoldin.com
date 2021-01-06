---
date: "2013-08-24T00:00:00Z"
description: One of the more annoying things to do is split an AWS account into multiple
  ones as your needs change. This is a quick description of what I had to go through.
keywords: AWS, EC2, ELB, Cloudfront, S3, splitting AWS, migrating AWS
tags:
- 'aws'
title: Splitting an AWS account
---

When we launched <a href="http://getpressi.com" target="_blank">Pressi</a>, I had it set up under my personal AWS account. Recently, we needed to move it into a separate AWS account and I wanted to share the steps to help others running into the same issue. Unsurprisingly, most of the effort went into planning and figuring out the migration steps and order in which they should be done. We weren’t able to eliminate downtime entirely but we reduced it as much as we could.

The services migrated included Route 53, an EC2 instance, ELB, S3, and Cloudfront. At the high level, we copy every service we can (EC2, ELB, S3, Route 53) to the destination account before redirecting client traffic to the new account. After that, we migrate the remaining services (Cloudfront) and make updates to existing ones (Route 53, EC2) to point to the destination account.

Migrating EC2 and ELB:

<ul class="bulleted">
	<li>Create the destination AWS account</li>
	<li>Create an AMI of the instance on the original account</li>
	<li>Share this newly created AMI with the destination AWS account</li>
	<li>Launch the AMI in the destination account</li>
	<li>Set up the load balancer in the destination account to mirror the original</li>
</ul>

Migrating S3/Cloudfront:

<ul class="bulleted">
	<li>Create an S3 bucket in the destination account and copy the files over from the original bucket to the destination bucket. We used <a href="http://www.bucketexplorer.com/be-download.html" target="_blank">Bucket Explorer</a> for this piece but needed to change the file permissions in the destination bucket manually to mirror those in the original account. One thing to watch out for is that S3 bucket names need to be unique so your code will need to be updated to reference the new name.</li>
	<li>Update the Cloudfront record in Route 53 to point to the destination account. Note that after the migration runs you can also update the Cloudfront record in the original account to point to the Cloudfront CNAME of the destination account.</li>
	<li>Cloudfront requires unique CNAME records so we give it a temporary name until you kick off the migration. As soon as you do, you will need to remove the CNAME record from the original account and add it to the destination Cloudfront account.</li>
</ul>

Migrating Route 53:

<ul class="bulleted">
	<li>Copy the records from the original account to the destination account.</li>
	<li>Make sure to update the Start of Authority (SOA) and Name Server (NS) records in the original account to have the same values as the ones in the destination account to speed up the DNS propagation.</li>
</ul>

Migrating the code:

<ul class="bulleted">
	<li>This will entirely depend on the application but the goal is to update your code to reference the services on the destination account.</li>
	<li>Due to the non-immediate nature of DNS propagation, you will most likely need to run two code bases - one on the original account pointing to some of the original services and one on the new account pointing to the destination services. Depending on the statelessness of your code, this may lead to a variety of sync issues and will require some intricate code to handle properly. In our case, we had MySQL running on the EC2 instance so while the app was running simultaneously under two AWS accounts the database would get out of sync with some users hitting the original setup and others hitting the destination. Luckily for us only a few tables were affected and we had to run a few manual SQL queries to deal with the issue but it could have been a lot worse.</li>
</ul>

The last step is to update your domain registrar NS records to point to the destination account and wait for the migration to occur. Note that the migration will happen gradually so you should look at the server logs on both accounts to make sure there’s no traffic hitting the server in the original account.

The lesson here is that migration becomes a whole lot easier if you keep your architecture as stateless and modular as possible. This way the services are loosely coupled and can be migrated one at a time rather than having to do everything at once. Your app also becomes significantly easier to scale since additional EC2 instances can be provisioned without having to worry about them getting out of sync. The non-instantaneous nature of DNS complicates the migration but a stateless architecture helps address most of the issues. Our migration didn’t go 100% smoothly but having mostly stateless services definitely helped us avoid major problems.
