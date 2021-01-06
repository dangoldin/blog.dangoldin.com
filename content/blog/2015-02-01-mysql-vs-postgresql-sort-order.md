---
date: "2015-02-01T00:00:00Z"
description: MySQL ignores case when doing the general ORDER BY. It's possible to
  make it case sensitive by using the BINARY keyword.
meta_img: null
keywords: mysql, postgresql
tags:
- 'sql'
title: MySQL vs PostgreSQL sort order
---

At <a href="http://triplelift.com" target="_blank">TripleLift</a>, we have a migrations job that copies aggregate data from Redshift to MySQL so it can be accessed along the rest of the transactional data. As part of a test, I tried comparing that the data matched exactly but ran into an issue when exporting the data to select. Namely, to make the comparison as simple as possible I wanted to run the same select query in both tables and compare the results. Unfortunately, the sort order between MySQL and PostgreSQL (what Redshift is based on) acts differently for text fields. PostgreSQL takes case into account while MySQL does not. This has an especially weird results when you have values that contain characters with an ASCII code between the lower and upper case letters: [\]^-`. It took some research but I discovered that MySQL provides an option to do a case sensitive sort - just add a “BINARY” option before the field name.

The following   queries demonstrate this behavior - all but the BINARY one can run on both MySQL and PostgreSQL.

{{< highlight sql >}}
CREATE TABLE test_table ( t varchar(5) );

INSERT INTO test_table (t) VALUES ('a'),('b'),('c'),('d'),('e'),('f'),('g'),('h'),('i'),('j'),('k'),('l'),('m'),('n'),('o'),('p'),('q'),('r'),('s'),('t'),('u'),('v'),('w'),('x'),('y'),('z'),('A'),('B'),('C'),('D'),('E'),('F'),('G'),('H'),('I'),('J'),('K'),('L'),('M'),('N'),('O'),('P'),('Q'),('R'),('S'),('T'),('U'),('V'),('W'),('X'),('Y'),('Z'),('0'),('1'),('2'),('3'),('4'),('5'),('6'),('7'),('8'),('9'),('['),('\\'),(']'),('^'),('_'),('`');

SELECT * FROM test_table ORDER BY t ASC;

-- MySQL only
SELECT * FROM test_table ORDER BY BINARY t ASC;
{{< / highlight >}}