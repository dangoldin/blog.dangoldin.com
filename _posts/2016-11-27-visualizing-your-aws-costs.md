---
layout: post
title: "Visualizing your AWS costs"
description: "There are a few services and products that analyze your AWS usage in order to provide some recommendations. They are all just going off of the detailed billing report so I wrote a quick script to provide similar visualizations."
keywords: "aws, cloud cost management, cloud management, trusted advisor, cloudability"
image_url: "/assets/static/images/by_layer_usage_type_top_heatmap.png"
category:
tags: ["#code", "#dataviz", "#devops"]
---
{% include setup %}
There are a variety of cloud management services that connect to your cloud computing account and analyze your usage in order to offer recommendations that help improve efficiency, security, and reduce your costs. In fact, AWS even provides their own service, [Trusted Advisor](https://aws.amazon.com/premiumsupport/trustedadvisor/), that competes with the external vendors. Unfortunately, these vendors can get expensive quickly. The first useful tier of Trusted Advisor, categorized as Business, has a tiered pricing model based on your existing usage that starts at 10% of your AWS bill and decreases to 3% as you spend past $250k/month. External vendors are cheaper but can still get expensive depending on your bill: [Cloudability](https://www.cloudability.com) starts at 1% of your AWS costs which compared to Trusted Advisor is significantly cheaper is still 1% of your AWS bill.

One option is to sign up for a single month and use that to take the necessary steps to improve your cloud configuration. If your infrastructure is stable month to month this is a simple and cheap way to revamp your setup. But if your infrastructure is constantly evolving you need a way to revisit your environment when necessary.

I spent some time looking at our AWS infrastructure last week and it turns out AWS provides an option to export a [detailed billing report](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/detailed-billing-reports.html) to S3 which is what the external vendors use to provide their recommendations. AWS offers a few reporting options but the most detailed one contains every resource and tag and in my case was over a million rows and nearly 500MB. There’s a wealth of information here and I wrote a small script to slice, dice, and visualize the data along a few dimensions to help provide some transparency into what is the biggest cost. The code is extremely simple since it’s just grouping and visualizing the data by different dimensions. The only real enhancement I made was to translate the OpsWorks tags into a layer dimension to make the visualization more useful. The two big things I still need to do are provide recommendations around reserved instance usage and do a better job of grouping the usage types since they’re too specific. As usual the [code is up](https://github.com/dangoldin/aws-billing-details-analysis) on GitHub and I’d love to hear any suggestions or feedback. Below are some graphs the script generates but note that I removed the axes labels to avoid revealing our costs and configuration.

<ul class="thumbnails">
  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}">
        <amp-img src="{{ IMG_PATH }}by_product_name.png" alt="By product name" width="1445" height="467" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>By product name.</strong> A simple summary of cost by AWS product/service.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}">
        <amp-img src="{{ IMG_PATH }}by_usage_type.png" alt="By usage type" width="1433" height="479" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>By product name.</strong> This shows every type of usage AWS has in the billing report. To deal with the long tail the script also generates a plot for the top 25 but one thing I need to do is a better job of grouping these - for example data transfer has different values depending on region and type and I want to consolidate them into a one in order to see total costs due to data transfer.
      </p>
    </div>
  </li>

  <li>
    <div class="thumbnail">
      <a href="{{ IMG_PATH }}">
        <amp-img src="{{ IMG_PATH }}by_layer_usage_type_top_heatmap.png" alt="By layer and usage type heatmap" width="928" height="566" layout="responsive"></amp-img>
      </a>
      <p>
        <strong>By layer and usage type.</strong> To me this is the most interesting one since it's looking at data for multiple dimensions - in this case layer and usage type. The goal here was to see which application/usage pairs result in the largest costs and allow me to prioritize investigation effort. Once again this will be more useful when I do a better job of grouping the usage types.
      </p>
    </div>
  </li>
</ul>
