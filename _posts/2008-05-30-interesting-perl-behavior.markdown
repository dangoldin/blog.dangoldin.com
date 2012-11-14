---
layout: post
title: !binary |-
  SW50ZXJlc3RpbmcgUGVybCBCZWhhdmlvcg==
wordpress_id: 31
wordpress_url: !binary |-
  aHR0cDovL3d3dy5kYW5nb2xkaW4uY29tL2Jsb2cvP3A9MTc=
date: 2008-05-30 14:56:59.000000000 -04:00
---
I ran into this problem a while back and wanted to share it. It was a bit unintuitive but documentd so I guess I shouldn't be surprised by the results. Hopefully this will help someone else avoid this pitfall.

It looks as if declaring a variable with the "my" statement but then guarded with an "if" statement causes the scope of the variable to be global - note that the "use strict 'vars';" pragma does not give an error in this case.
<blockquote>#!/usr/bin/perl -w
use strict  'vars';

sub foo{
my $val = 0 if (0);
$val = 1 unless defined($val);
print "Val: $val\n";
$val = 2;
}

foo();
foo();</blockquote>
The output of this call gives:
Val: 1
Val: 2

Although the expected result would seem to be:
Val: 1
Val: 1

Using Google, I found the following nugget from perlsyn:
<blockquote>NOTE: The behaviour of a my statement modified with a statement modifier conditional or loop construct (e.g. my $x if ... ) is undefined. The value of the my variable may be undef, any previously assigned value, or possibly anything else. Don't rely on it. Future versions of perl might do something different from the version of perl you try it out on. Here be dragons.
<a href="http://perldoc.perl.org/perlsyn.html#Statement-Modifiers">http://perldoc.perl.org/perlsyn.html#Statement-Modifiers</a></blockquote>
