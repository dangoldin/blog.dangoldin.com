---
layout: post
title: "Debate what's necessary and no more"
description: "It's very easy to want to be involved in every decision and through in your two cents but it's more important to focus on what actually affects you and trust others to do what's right."
keywords: "management, politics, efficiency"
image_url:
category:
tags: ["#management"]
---
{% include setup %}
A critical component in communicating between various teams is knowing who has what responsibility. Especially with driven people it’s easy to have overlap between various functions - product and design; design and frontend engineering; and frontend engineering and backend engineering. This is both good - because it’s able to focus more eyes on a particular problem and provides a new perspective - and bad  - because people may feel that they can’t move quickly enough and don’t want to cede decision making power. Great teams thrive in this environment while poor teams degenerate into a Dilbert cartoon.

One approach that I’ve been preaching is to standardize on the edge points that can act as a form of “contract” between the teams. At those edges it’s great to have the debates and argue the merits of various implementations but beyond that the ownership should lie with the respective team.

An example is to image two engineering teams - one is a full-stack team responsible for the UI and the corresponding API endpoints for a customer facing application and the other is a backend team that uses this information to run the hidden part of the application - the data collection, the web server, and the various third party integrations. In this case a good intersection point would be the database - both teams leverage it and have their own thoughts on what to store and how to structure the schema. The debate should be centered around these questions rather than how each team builds their own components. Once there’s agreement on the database structure each team can go ahead and work independently of the others.

Similarly, a designer can create a series of mocks that can then be debated with the frontend team. The frontend team may push for a different design that will simplify their code and a designer may push for a certain approach that significantly increases the product’s usability. After both teams settled on an approach they can focus on what they’re great at - a designer may focus on getting the visual details perfect while the front end team can start writing the HTML, CSS, and JavaScript.

By focusing on what we actually need to do our jobs and trusting others to do the same we’re able to skip the politics and move quickly. It’s human nature to be curious and want to know everything that’s going on but it’s a massive hit to productivity. Especially at a startup when speed is critical being able to skip the unnecessary meetings, debates, and politics can make the difference between success and failure.
