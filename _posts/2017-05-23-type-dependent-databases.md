---
layout: post
title: "Type dependent databases"
description: "I love strongly typed languages and would love to see dependent types make their way up to the database level."
keywords: "databases, idris, type dependence"
image_url:
category:
tags: ["#meta", "#data"]
---
{% include setup %}
I’m a huge proponent of strong types when it comes to coding. Unless it’s a throwaway project it’s always worth spending the extra time to define your objects and the way they will be exposed in the code. This investment makes it more likely that you’ve thought through the way the code will need to evolve and the various edge cases you need to handle.

This philosophy is even more important when thinking about your database structure since that’s going to be even more difficult to change than your code. Changing the code requires a deploy while changing a database schema will require a migration and a series of corresponding code changes.

Just last week I came across a language called [Idris](https://en.wikipedia.org/wiki/Idris_(programming_language)) that supports a concept called [dependent types](https://en.wikipedia.org/wiki/Dependent_type). With dependent types one is able to make type definitions that depend on the values themselves - thus a type can be a list where the numbers add up to a particular sum or a an array that requires its elements to be in increasing order. I definitely don’t have a lot of practice or experience with these but I find the concept incredibly powerful. The more constraints we can shift to the type definitions the simpler and more declarative the code gets.

I would love to see this concept extended to databases. I already spend a fair amount of time thinking through database schemas and being able to impose more rules that are enforced at the database level would make databases much more powerful. Right now we spend a ton of time validating our data through APIs and code but imagine being able to have this done at the database level. Databases already provide simple rules around nulls, uniqueness constraints, and foreign keys but nothing about the relationship between fields within a single row. Then all the rules that are implemented in code can be moved upstream to the database, saving a ton of time, improving performance, and simplifying the code.
