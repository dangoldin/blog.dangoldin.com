---
date: "2020-12-18T00:00:00Z"
description: A series of shell commands to identify potentially duplicate fils on
  S3.
meta_img: null
keywords: aws, s3, backups
tags:
- 'code'
- 'devops'
title: Removing duplicate files in S3
---

I'm a digital hoarder and whenever I had to switch computers, I was always worried about losing files. These days it's both lower risk since so much is scattered across the cloud but with the ascent of AWS I've resorted to just backing up my computers onto S3.

I simply do a recursive copy of my home folder to S3 and call it a day. One problem this exposes is that there are duplicate files scattered all over the place. For example I'd have something both in my Downloads folder as well as in a Photos and maybe even a Dropbox folder. Or I would just have the same file duplicated in the same directory. At the end of the day it's not a huge deal but at the same time it feels dirty so I started working on a script to identify these duplicates.

At this point calling it a script is a bit of an overstatement since it's just a series of shell commands that act as a proof of concept. The end goal is to write a script that will accept a set of destinations to analyze, download the potentially similar files, and give users the interactive ability to choose which of the file(s) to keep.

In any case, one can get pretty far simply using the following shell commands to get the list of files from S3 and then manipulate them to identify the potential duplicates. At that point the filename likely gives aways the obvious duplicates and the rest you can download and compare.

Next step is to roll this into an actual script that can take multiple directories, run through the steps at once, and then add that interactive way to fetch, display, and delete the files.

{{< highlight bash >}}
# Dump the filenames, dates, and sizes to a text file.
~ aws s3 ls s3://bucket_path/key_path --profile=xyz --recursive > s3_files.txt

# Sort these so we can then count duplicates
~ sort s3_files.txt -k3 -n | tr -s ' ' | cut -d' ' -f3-10 > sorted_s3_files.txt

# Extract all the duplicated files
cat sorted_s3_files.txt | cut -d' ' -f1 | uniq -d > sorted_s3_files_potential_dups.txt

# Sort both original and duplicate files as text so we can then use the join command
sort sorted_s3_files.txt > sorted_s3_files_str.txt
sort sorted_s3_files_potential_dups.txt > sorted_s3_files_potential_dups_str.txt

# Inner join the full set and the duplicates to get the file names of the potential duplicates
join sorted_s3_files_potential_dups_str.txt sorted_s3_files_str.txt | sort -n > sorted_s3_files_potential_dups_full_info.txt
{{< / highlight >}}
