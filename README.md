# Inheritance Playground

This is a repo used to play around with ideas surrounding JS Inheritance. Why we want, ways to implement it, drawbacks and advantages of each.

As Douglas Crockford has pointed out, there are two reasons to use inheritance, but due to loose typing only one applies to JavaScript. That is code reuse, which is a pretty good reasons.

Through this research I will use the term "class". JavaScript actually does not have classes. So when I refer to a class, know that it is a theoretical class, which we are trying to find the ideal implementation of in JavaScript. We will use this definition:

> A class is a set of methods and properties which are a template for (potentially) multiple object instantiations

The goals I have for my inheritance research is to find a method of JavaScript inheritance that meets these needs:
1. Developer friendly (a bit subjective admitedly, but an important point)
2. Method/property propagation to parent classes when called inside and outside the class
3. Parent method access from within the class, even if the class overrides a method
4. Constructors for object creation, which may or may not allow no argument varieties
5. Supports private variables/methods
6. Efficient, reduce library bloat
7. Written with vanilla JavaScript
