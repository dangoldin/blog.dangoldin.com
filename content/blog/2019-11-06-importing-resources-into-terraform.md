---
date: "2019-11-06T00:00:00Z"
description: Terraform is great but I wish it were easier to import resources.
meta_img: null
keywords: terraform, devops
tags:
- 'devops'
title: Importing resources into terraform
---

You don't appreciate [Terraform](https://www.terraform.io) until you have hundreds of AWS resources with dozens of security rules. But once you develop that appreciate it becomes an indispensable tool in managing and scaling your infrastructure. I'm a huge fan of Terraform and recently started moving a bunch of my personal project resources into Terraform.

I imagine for most people it's a chore but I find the entire process zen-like. I take something that was a mess and clean it up while learning something new. My approach has been to create a placeholder resource and then do a "terraform import" to fetch the properties. Then I go through a series of "terraform plan"s to reconcile the differences.

What I wish was for Terraform to allow me to point it to a cloud resource and then have it generate the corresponding HCL that I can then migrate over to the .tf files. I can see why this isn't built in: the entire point of Terraform is to link various resources together so just seeing a static set of properties for a given resource won't tie them all together. At the same time, I'd rather have the option to see my entire resource in HCL and then decide what I want to remove, replace, or keep. Had I used Terraform from the beginning this wouldn't have been a problem but for those of us that are migrating a ton of legacy resources it would be a big help.
