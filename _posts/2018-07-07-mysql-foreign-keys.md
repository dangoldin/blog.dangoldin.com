---
layout: post
title: "MySQL foreign keys"
description: "MySQL foreign keys are a great way to enforce consistency in your database but it's not always obvious how they work. I provide examples for each option and its impact."
keywords: "mysql, foreign keys, database integrity, relational databases"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
Databases are the last layer of defense against corrupt data and the more restrictive you can make them the better. No matter how much validation you may have missed in your code having a strong and restrictive database schema will protect your data. One of the best approaches to building a restrictive schema is using foreign keys which specify how fields from one table relate to the fields of another table. There are a few options here and make it possible for you to specify anything from automatically removing rows when a row they’re referencing is removed to recursively updating rows when their references have changed.

The [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html) give a nice overview of how foreign keys work but they’re light on examples and since I tend to learn best from examples I wanted to share them along with a brief description. Hopefully others find these examples useful as well. Each of the examples creates two tables, test_parent and test_child, with test_child having a different foreign key option on a field referencing the test_parent. I also insert the same data into each one to start and then do a few follow up queries describing what happens in each scenario. Also note that there is both an "ON DELETE" and an "ON UPDATE" option which, as expected, controls the respective behaviors.

### RESTRICT

{% highlight sql %}
DROP TABLE IF EXISTS test_child;
DROP TABLE IF EXISTS test_parent;

CREATE TABLE test_parent (
    id INT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE test_child (
    id INT,
    parent_id INT,
    INDEX par_ind (parent_id),
    FOREIGN KEY (parent_id) REFERENCES test_parent(id)
        ON DELETE RESTRICT
        ON UPDATE RESTRICT
) ENGINE=INNODB;

insert into test_parent (id) VALUES (1), (2), (3), (4);
insert into test_child (id, parent_id) VALUES (1, 1), (2, 2), (3, 3), (4, 4);

select * from test_child;
select * from test_parent;

-- This fails since one of test_child rows referneces this row.
delete from test_parent where id = 1;

-- By deleting the associated test_child row first we'll be able to delete the row in test_parent.
delete from test_child where parent_id = 1;

-- Now that there's no test_child row referencing this we're able to delete successfully.
delete from test_parent where id = 1;

-- Similarly, we can't update the key since it's being referenced by one of the child rows.
update test_parent set id = 10 where id = 2;
{% endhighlight %}

### CASCADE

{% highlight sql %}
DROP TABLE IF EXISTS test_child;
DROP TABLE IF EXISTS test_parent;

CREATE TABLE test_parent (
    id INT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE test_child (
    id INT,
    parent_id INT,
    INDEX par_ind (parent_id),
    FOREIGN KEY (parent_id) REFERENCES test_parent(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=INNODB;

insert into test_parent (id) VALUES (1), (2), (3), (4);
insert into test_child (id, parent_id) VALUES (1, 1), (2, 2), (3, 3), (4, 4);

select * from test_child;
select * from test_parent;

-- This removes both the row in test_parent as well as the associated row in test_child.
delete from test_parent where id = 1;

-- This updates both the row in test_parents as well as the referenced field in test_child.
update test_parent set id = 10 where id = 2;
{% endhighlight %}

### SET NULL

Note that in this case we can't even make parent_id NOT NULL in the test_child table create - MySQL rejects that statement.

{% highlight sql %}
DROP TABLE IF EXISTS test_child;
DROP TABLE IF EXISTS test_parent;

CREATE TABLE test_parent (
    id INT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE test_child (
    id INT,
    parent_id INT,
    INDEX par_ind (parent_id),
    FOREIGN KEY (parent_id) REFERENCES test_parent(id)
        ON DELETE SET NULL
        ON UPDATE SET NULL
) ENGINE=INNODB;

insert into test_parent (id) VALUES (1), (2), (3), (4);
insert into test_child (id, parent_id) VALUES (1, 1), (2, 2), (3, 3), (4, 4);

select * from test_parent;
select * from test_child;

-- This deletes the row in test_parent and also makes the parent_id value for the associated row in test_child null.
delete from test_parent where id = 1;

select * from test_child;

-- Similarly, the parent_id field in test_child that used to be 2 is now null.
update test_parent set id = 10 where id = 2;

select * from test_child;
{% endhighlight %}

### NO ACTION

No example here since in MySQL this works exactly the same as the RESTRICT option above.

### SET DEFAULT

This is not a valid option in MySQL using the INNODB engine.
