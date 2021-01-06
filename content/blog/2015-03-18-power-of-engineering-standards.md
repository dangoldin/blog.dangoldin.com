---
date: "2015-03-18T00:00:00Z"
description: The biggest thing an engineering team can do to be productive is start
  imposing standards and conventions on everything they do. This will allow them to
  write less code that does more and increases quality.
meta_img: null
keywords: engineering culture, standards, convention
tags:
- 'management'
title: Power of engineering standards
---

When it comes to productive coding, one of the most important things to do is to impose a set of standards and conventions. As long as you stick with them your code becomes significantly easier to write and maintain. Conventions range from having a standard way of declaring variables to the way files are organized within a project to the field names in database tables. The obvious benefit is that your code becomes significantly easier to navigate, both to you as well as to others on the team, since you don’t have to run through a series of searches trying to figure out whether a variable is called myVariable, MyVariable, or my_variable. The bigger impact is how much simpler your code becomes. By using a standard structure it’s possible to write code that’s further up in the abstraction hierarchy. This is a huge win for productivity and quality since <a href="http://www.coverity.com/press-releases/annual-coverity-scan-report-finds-open-source-and-proprietary-software-quality-better-than-industry-average-for-second-consecutive-year/" target="_blank">more code leads to more errors</a> and the best code is code that’s not written in the first place.

Two examples of how we’ve adopted conventions include:

- Making sure that every database table in our “log” schema has a timestamp column containing timestamps and every table in our “agg” schema has a ymd column containing dates. This allowed us to write an abstract job that aggregate the data from a log table to an agg table without having to worry about the underlying structure. All we had to do was specify the columns that were the keys and which ones needed to be aggregated - the job itself took care of the scheduling, the query construction, and the reporting. In addition, we were able to quickly write up a simple job that archived old log data. The job doesn’t care what table it takes as long as it has a timestamp column.
- We use RabbitMQ for some of our asynchronous tasks and we’ve developed a standardized format that a majority of tasks share. These tasks take a name, a date, and an hour and then run a query for that hour. By imposing this structure, we were able to write a single block of code that would take tasks with a start and end date and republish them as a series of hourly tasks in the date/hour format. Since each task takes the same arguments, we’re also able to use reflection to automatically create an instance of the appropriate class for each task. For example, the task {“task”: “do_an_agg”, “ymd”: “2015-03-17”, “hour”: 10} automatically gets translated into new DoAnAgg(“2015-03-17”, 10). All we need to do is make sure the class DoAnAgg exists, has the appropriate constructor, and exists in the proper package.

Both of these examples are straightforward but the value comes in coming up with the proper abstraction that avoids unnecessary code. Standards make it easy to spot repeated patterns which can then be refactored upstream. This improves the leverage of everyone else on the team and makes every engineer more productive. People idolize the mythical 10 or 100x engineer but there’s more value in making the entire team more productive.