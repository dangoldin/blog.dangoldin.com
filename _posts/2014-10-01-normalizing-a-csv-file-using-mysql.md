---
layout: post
title: "Normalizing a CSV file using MySQL"
description: "I had a CSV of fantasy footabll stats and used MySQL to normalize it."
keywords: "mysql, cleaning data"
image_url:
category:
tags: ["#data", "#sql"]
redirect_from: "/2014/10/01/cleaning-a-dataset-with-mysql/"
---
{% include setup %}
As part of my preparation for the Intro to MySQL class I decided to put together a dataset we’d be able to explore over the course of the class. While trying to think of an interesting dataset to use I remembered I had a script that scraped Yahoo’s fantasy football projections for the 2014 seasons that I used to prepare for my draft. The only issue was that the script generated a CSV file so I had to go through a series of steps to turn it into a clean, relational database. I thought it would be useful to share the commands below and provide some context for those interested in learning more about MySQL and the data import/cleanup process.

The first step is to create the table that we'll be loading the CSV file into
{% highlight sql %}create database stats;
use database stats;

create table orig_stats (
  week int,
  name varchar(100),
  position varchar(20),
  opp varchar(50),
  passing_yds float,
  passing_tds float,
  passing_int float,
  rushing_att float,
  rushing_yds float,
  rushing_tds float,
  receiving_tgt float,
  receiving_rec float,
  receiving_yds float,
  receiving_tds float,
  return_tds float,
  twopt float,
  fumbles float,
  points float
);
{% endhighlight %}

Now we load the CSV file into the table making sure to specify the options properly. In my case this took a few attempts to deal with the line endings.
{% highlight sql %}LOAD DATA INFILE '/tmp/stats-2014.csv'
INTO TABLE orig_stats
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES ;
{% endhighlight %}

Next step is to create the tables we want to end up with. In my case I wanted to normalize the data which required designed a new set of tables. A big assumption made here was that a player will not get traded from one team to another. This is definitely not correct in the real world but it is good enough for this exercise. If we wanted to allow for trades we would have a separate table that would map a player to a team by week.
{% highlight sql %}create table teams (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(100),
  PRIMARY KEY (id),
  UNIQUE (name)
);

create table positions (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(10),
  PRIMARY KEY (id),
  UNIQUE (name)
);

create table players (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(100),
  position_id int,
  team_id int,
  PRIMARY KEY (id)
);

create table schedule (
  week int,
  home_id int,
  away_id int,
  UNIQUE (week, home_id, away_id)
);

create table stats (
  week int,
  player_id int,
  passing_yds float,
  passing_tds float,
  passing_int float,
  rushing_att float,
  rushing_yds float,
  rushing_tds float,
  receiving_tgt float,
  receiving_rec float,
  receiving_yds float,
  receiving_tds float,
  return_tds float,
  twopt float,
  fumbles float,
  points float
);
{% endhighlight %}

Now it's on to the hard part. We want to take the data in the original stats table and convert into a properly normalized data set. The strategy here is to start with the simple tables and work our way up to the more complicated ones leveraging the normalized data we created at each step. The first two tables are teams and positions and we can derive them from the "position" field in the original stats table by splitting the position field into two and realizing that the left side is the team and the right side is the position of given the player.
{% highlight sql %}insert into teams
  (name)
  select distinct(substring_index(position, ' - ', 1))
  from orig_stats order by position;

insert into positions
  (name)
  select distinct(substring_index(position, ' - ', -1)) as pos
  from orig_stats order by pos;
{% endhighlight %}

To generate the players table, we get the player position and team from the stats table and then find the associated ids from the teams and positions tables. The key assumption here is that there are no two players with the same name, on the same team, and the same position.
{% highlight sql %}insert into players
  (name, position_id, team_id)
  select p.name, pos.id, t.id
  from (
    select name, position,
      substring_index(position, ' - ', -1) as pos,
      substring_index(position, ' - ', 1) as team
    from orig_stats
    group by name, position, pos, team
  ) p
  join teams t on t.name = p.team
  join positions pos on pos.name = p.pos;
{% endhighlight %}

We can figure out the schedule by getting a list of the unique matchups in the original stats table. Since the games are symmetric we only need to look at the rows that are home games.
{% highlight sql %}insert into schedule
  (week, home_id, away_id)
  select s.week, t1.id, t2.id
  from (
    select week,
      substring_index(position, ' - ', 1) as home_team,
      substring_index(opp, ' vs ', -1) as away_team
    from orig_stats s
    where opp like '%vs%'
    group by week, home_team, away_team
  ) s
  join teams t1 on t1.name = s.home_team
  join teams t2 on t2.name = s.away_team
  order by s.week, t1.id, t2.id;
{% endhighlight %}

Putting everything together we generate the new stats table by doing the relevant lookups in the tables we created. We can ignore the redundant fields (name, position, opponent) and the only thing we need to watch out for is duplicate players. In this case there are two names, Zach Miller and Alex Smith, that need to be made "unique" by also looking at their team.
{% highlight sql %}insert into stats
  (week, player_id,
  passing_yds, passing_tds, passing_int, rushing_att, rushing_yds, rushing_tds,
  receiving_tgt, receiving_rec, receiving_yds, receiving_tds, return_tds,
  twopt, fumbles, points)
  select s.week, p.id,
  passing_yds, passing_tds, passing_int, rushing_att, rushing_yds, rushing_tds,
  receiving_tgt, receiving_rec, receiving_yds, receiving_tds, return_tds,
  twopt, fumbles, points
  from orig_stats s
  join teams t on substring_index(s.position, ' - ', 1) = t.name
  join players p on s.name = p.name and p.team_id = t.id;
{% endhighlight %}