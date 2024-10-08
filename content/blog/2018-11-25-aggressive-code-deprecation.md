---
date: "2018-11-25T00:00:00Z"
description: Remove unused code is important to keeping your code clean and maintainable.
  To do it properly you need to aggressively deprecate code.
meta_img: null
keywords: code deprecation, software engineering, tech debt
tags:
- 'code'
title: Aggressive code deprecation
---

Part of writing high quality code quickly is deprecating no longer used features and functionality. It sounds simple but more often than not there’s an abundance of references throughout - some tightly coupled and others loosely coupled - that make a full deprecation difficult. In some cases it’s is as simple as an isolated code change while in other cases it’s removing code along with some database migrations and in the extreme case it may be removing an entire service. It’s crucial to be exhaustive in your deprecation or you’ll end up in a situation months or years later where the team has changed enough that no one can tell what the code is meant to do and whether it’s still used.

Ideally you have enough tests and code coverage to take care of the obvious changes but even that won’t catch everything. I found the following checklist to be helpful in aggressively deprecating code:

- **Actual code deprecation**. All references to the deprecated should be removed across all relevant repos. It’s straightforward to remove it from the primary code base but are there references to it in other applications? You may have a field you’re deprecating in the API but you need to make sure you remove its references in the UI code as well. As a side note this is a reason why you should make your applications as loosely coupled as possible. With the previous example was there a way to write the UI code so it doesn’t make any assumptions about the API and instead makes a request to the API to get the list of available fields? That way not every API change will warrant a UI change.
- **Database migrations**. If you removed a field in the code make sure to remove it from the database along with all foreign key references. If necessary make a dump of the table(s) as a backup but remember to set a reminder to delete the backup in the future. If it’s a risky change rename the column first and make sure nothing breaks - then if something does break you can quickly revert the name change.
- **Package requirements**. Did you install a particular package just to get your code working? If so you should review your package requirements and remove the ones that are no longer being used. It’s unlikely that you installed an open source library just to use it in a single place but you never know. The fewer external packages you have the more maintainable your code since you don’t have to worrying about version incompatibilities or library deprecation.
- **Configuration options**. Was there any configuration that referenced the code? What about a configuration option that was only used by the deprecated code? Having additional fields in your configuration files won’t break anything but it makes future deprecation more difficult since someone will need to confirm these configuration options are no longer used and just introduces bloat.
- **DevOps**. Unless you’re removing an entire application this isn’t common but something to definitely keep in mind is to reduce DevOps bloat. The goal here is to remove all resources that were created for your application. If you were using Terraform or another “infrastructure as code” system this is easier since you may be able to just remove files and let Terraform do the rest. Otherwise you should take a look at all the DevOps resources your application needed and remove them. These range from the DNS entries to the relevant security groups to the instance images to the cloud-stored files. The cloud makes it easy to spin things up but it’s on us to fully spin things down.

The work to aggressively deprecate isn’t easy but thoroughness is essential. It’s much better to take the time to do a deep cleanup while the code is still fresh in mind instead of having a new set of people figuring out what’s still used years later. It’s also a strong investment in keeping your code clean and light which improves future development speed.
