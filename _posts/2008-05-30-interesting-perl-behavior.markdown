---
layout: post
title: !binary |-
  SW50ZXJlc3RpbmcgUGVybCBCZWhhdmlvcg==
wordpress_id: 31
wordpress_url: !binary |-
  aHR0cDovL3d3dy5kYW5nb2xkaW4uY29tL2Jsb2cvP3A9MTc=
date: 2008-05-30 14:56:59.000000000 -04:00
---
<p>I ran into this problem a while back and wanted to share it. It was a bit unintuitive but documentd so I guess I shouldn't be surprised by the results. Hopefully this will help someone else avoid this pitfall.</p>

<p>It looks as if declaring a variable with the "my" statement but then guarded with an "if" statement causes the scope of the variable to be global - note that the "use strict 'vars';" pragma does not give an error in this case.</p>

<blockquote>#!/usr/bin/perl -w<br/>
use strict  'vars';<br/>
<br/>
sub foo{<br/>
my $val = 0 if (0);<br/>
$val = 1 unless defined($val);<br/>
print "Val: $val\n";<br/>
$val = 2;<br/>
}<br/>
<br/>
foo();<br/>
foo();</blockquote>

<p>The output of this call gives:<br/>
Val: 1<br/>
Val: 2</p>

<p>
Although the expected result would seem to be:<br/>
Val: 1<br/>
Val: 1
</p>

<p>Using Google, I found the following nugget from perlsyn:</p>

<blockquote>NOTE: The behaviour of a my statement modified with a statement modifier conditional or loop construct (e.g. my $x if ... ) is undefined. The value of the my variable may be undef, any previously assigned value, or possibly anything else. Don't rely on it. Future versions of perl might do something different from the version of perl you try it out on. Here be dragons.
<a href="http://perldoc.perl.org/perlsyn.html#Statement-Modifiers">http://perldoc.perl.org/perlsyn.html#Statement-Modifiers</a></blockquote>
