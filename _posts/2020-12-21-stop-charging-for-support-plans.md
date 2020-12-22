---
layout: post
title: "Stop charging for support plans"
description: "The large enterprise software companies really need to stop charging for support plans."
keywords: "support plans, enterprise software"
image_url: "/assets/static/images/aws-support-plan-pricing.png"
category: 
tags: ["#product"]
---
{% include setup %}
My latest rant is against support plans for enterprise software. It's frustrating to be spending hundreds of thousands of dollars on a contract and yet be forced to pay an additional fee for support. Even worse, this additional fee is usually a function of your existing spend.

I understand the rationale - there needs to be a cost to support otherwise everyone has an incentive to escalate and spend is likely correlated with complexity and volume of services used but it just feels as if I'm being nickel and dimed.

As an example, AWS offers the following [support plans](https://aws.amazon.com/premiumsupport/pricing/):

<amp-img src="{{ IMG_PATH }}aws-support-plan-pricing.png" alt="AWS Support Plan pricing grid" width="2296" height="844" layout="responsive"></amp-img>

Using their pricing example, if you spend $85,000/month on AWS a "Business Support" plan will cost you $6,150/month - or $73,800. Now you have to do the tradeoff between having someone from AWS be available for at most a few hours a week versus being able to hire someone full time - just not in the Bay Area. At $1.2M/month and the "Enterprise Support" plan the AWS support now costs $846,000/year - how many engineers can you hire with that?

I'd prefer a model where the cost of support was a function of the support provided example. One idea is to charge on a per case basis. Another option is to give customers a fixed amount of cases as a function of their spend and then charge overages. Another option is to price that cost into your product.

It's an exaggeration but one can argue that the fact that a product even needs support indicates a deficiency in the product. Treating support as an additional revenue stream may lead to product decisions that would not be made in a world where support was treated as a cost.

As a counterpoint - there really is value in support. They know the systems better than you do. They have access to the engineers and product managers. They have the ability to escalate if there are clear issues. Yet having to pay for it on top of an already large bill just feels wrong.
