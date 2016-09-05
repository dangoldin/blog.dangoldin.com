---
layout: post
title: "The Go interface"
description: "Go takes a simple and novel approach to interfaces that's commonly found in dynamic languages."
keywords: "golang, java, duck typing, intefaces"
image_url:
category:
tags: ["#code"]
---
{% include setup %}
I’ve only been playing around with Go for a couple of weeks but one of the language design decisions I’ve really enjoyed is how interfaces are handled. Coming from a traditional object oriented background it’s typical to define an interface that defines a few method signatures and then explicitly implement that interface in a new class. Below’s a trivial example of this approach in Java:

{% highlight java %}
interface Animal {
  public boolean isFurry();
  public String speak();
}

class Dog implements Animal {
  public boolean isFurry() {
    return true;
  }

  public String speak() {
    return "Woof";
  }
}

public void aRandomFunction(Animal a) { ..  } // Can take anything that implements Animal
{% endhighlight java %}

With this approach a compiler immediately identifies cases where you choose to implement an interface but forget (or mess up) implementing one of the underlying methods.

Go’s approach is different. In go you would define the interface as usual with the expected methods and you would write functions that accept the interface as the argument. But instead of explicitly specifying that a particular object implements an interface you just do it. Then if it turns out you’ve successfully implemented the methods you can use that object wherever the interface is expected. The compiler is still able to point out signature issues since it can tell when you’re trying to use an object with a required method but it’s done in an implicit way. Below’s the equivalent Go code:

{% highlight go %}
type Animal interface {
  isFurry() bool
  speak string
}

type Dog struct {
}

func (d Dog) isFurry() bool {
  return true
}

func (d Dog) speak() string {
  return "Woof"
}

func aRandomFunction(a Animal) { .. }
{% endhighlight go %}

Dynamic languages frequently use this “duck typing” approach since the variable types may only be discovered during run time so it’s neat seeing it implemented this simply in a static, strongly typed language. The simplicity and novelty of Go’s interfaces make me eager to keep digging and see what else I discover.

https://en.wikipedia.org/wiki/Duck_typing

