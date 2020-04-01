---
layout: post
title: "Visualizing my journey to Inbox Zero"
description: "In my pursuit of quantifying more and more I now have a dashboard that tracks the amount of messages in my email inbox."
keywords: "grafana, inbox zero, quantified self"
image_url: "/assets/static/images/grafana-emails-in-inbox.png"
category:
tags: ["#code", "#dataviz"]
---
{% include setup %}

<amp-img src="{{ IMG_PATH }}grafana-emails-in-inbox.png" alt="Number of emails in my inbox by account" width="1855" height="518" layout="responsive"></amp-img>

I subscribe to the "Inbox Zero" philosophy and treat my email inbox as a todo list that I slowly work through. As part of the desire to get more and more quantitative I wrote a quick script to pull the number of emails from my Inbox and then insert the data as a row into a new table in my personal stats database. As usual, most of the work was in deciding to do it and once I got to coding the hacky solution was done within 20 minutes. The script uses Python's built-in [imaplib](https://docs.python.org/3/library/imaplib.html) library to log in to an email provider and then a simple MySQL query to insert the resulting data. I hooked this up to run every 15 minutes via cron and put together a Grafana dashboard to plot the count over time. I'm currently not actually going through the content of the email messages themselves but there are tons of directions I can take this - for example slicing the data by sender or examining the age of the messages. For now I'm just hopeful this motivates me to keep going through that email.

{% highlight python %}
#! /usr/bin/python3

import imaplib
import mysql.connector

# TODO: Handle credentials better (environment, config, etc)
IMAP_INFO = {
    'work': {
        'imap_host': '',
        'imap_port': 993,
        'imap_user': '',
        'imap_pass': '',
    },
    'personal': {
        'imap_host': '',
        'imap_port': 993,
        'imap_user': '',
        'imap_pass': '',
    },
}

db_host = ''
db_user = ''
db_pass = ''
db_database = ''

def get_num_emails(creds):
    imap = imaplib.IMAP4_SSL(creds['imap_host'], creds['imap_port'])
    imap.login(creds['imap_user'], creds['imap_pass'])
    imap.select('Inbox')
    tmp, data = imap.search(None, 'ALL')
    return len(data[0].split())

def save_stats(account_name, num_emails):
    mydb = mysql.connector.connect(
        host = db_host,
        user = db_user,
        passwd = db_pass,
        database = db_database,
    )
    mycursor = mydb.cursor()

    sql = "INSERT INTO email_stats (account_name, num_emails) VALUES (%s, %s)"
    val = (account_name, num_emails)
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")

for account_name, creds in IMAP_INFO.items():
    num_emails = get_num_emails(creds)
    print('Fetched', num_emails, 'in', account_name)
    save_stats(account_name, num_emails)
{% endhighlight %}
