---
layout: post
title: "Interesting Perl behavior"
description: "I found an odd, unexpected behavior in Perl that drove me crazy."
keywords: "perk, coding"
category:
tags: []
---
<p>I ran into this problem a while back and wanted to share it. It was a bit unintuitive but documentd so I guess I shouldn't be surprised by the results. Hopefully this will help someone else avoid this pitfall.</p>

<p>It looks as if declaring a variable with the "my" statement but then guarded with an "if" statement causes the scope of the variable to be global - note that the "use strict 'vars';" pragma does not give an error in this case.</p>

{% highlight perl %}
#!/usr/bin/perl -w
use strict  'vars';

sub foo{
    my $val = 0 if (0);
    $val = 1 unless defined($val);
    print "Val: $val\n";
    $val = 2;
}

foo();
foo();{% endhighlight %}

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
<a href="http://perldoc.perl.org/perlsyn.html#Statement-Modifiers" target="_blank">http://perldoc.perl.org/perlsyn.html#Statement-Modifiers</a></blockquote>
