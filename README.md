# Inheritance Playground

JavaScript is a unique language in many ways. One such way is that there are actually many different ways to implement core OOP principles, such as inheritance. This is a repo used to play around with ideas
surrounding JS Inheritance. Why we want it, ways to implement it, drawbacks and advantages of each.

As Douglas Crockford has pointed out, there are two reasons to use inheritance, but due to loose typing only one applies to JavaScript. That is code reuse, which is a pretty good reason.

Through this research I will use the term "class". JavaScript actually does not have classes. So when I refer to a class, know that it is a theoretical class, which we are trying to find the ideal implementation of in JavaScript. We will use this definition:

> A class is a set of methods and properties which serve as a template for (potentially) multiple object instantiations

The goals I have for my inheritance research is to find a method of JavaScript inheritance that meets these needs:

1. Developer friendly (a bit subjective admitedly, but an important point)
2. Method/property propagation to parent classes when called inside and outside the class
3. Parent method access from within the class, even if the class overrides a method ("super" access)
4. Constructors for object creation, which may or may not allow no argument varieties
5. Private variables/methods
6. Efficient, reduce library bloat
7. Written with vanilla JavaScript

### Developer Friendly

Being developer friendly, while not a technical necessity to meet the other goals, is of paramount importance. Frankly put, if it isn't developer friendly, it won't be used. This is a subjective goal,
but the idea is this should be no more difficult than setting up inheritance in other languages (having Java experience, that will be my standard comparison). Code making use of these methodologies
should be free of "smells" and should not feel like it is being "hacked".

### Method/property propagation

This propagation is what constitutes the a "parent" class and is where we get our code reuse.

### "super" access

Many design patterns rely on being able to call a parent class' methods and either augment the result, or use it to drive the logic of the child class. This should be supported.

### Constructors

This is not strictly constructors that utiltize "new". Many people try to avoid using "new" and have good reason for doing so. Factory methods can also meet this requirement. The point of this requirement
is to be able to define points of entry to object instantiation and to have control over those points of entry. This includes a parent class dictating to its children how it is to be instantiated. This
requirement does not explicitly include or exclude either the use of "new" or factory methods.

### Private environment

Information hiding is an important principle and needs to be supported. A methodology that does not support a private environment will be prone to attack and misuse.

### Efficiency

Because object creation, access and inheritance are core principles of OOP and this methodology could be used as the foundation for many technologies, it must be efficient. Not just efficient, but as
efficient as possible while supporting all the other requirements.

### Vanilla JavaScript

Again, because this methodology is considered a part of the foundation of OOP in JavaScript, it must not have any other dependencies. It must standalone so as to reduce requirements for projects which might
utilize this. Also, more of a personal reason, as this is research to further explore the potential of JavaScript, external libraries would rob me of exploration, also I am of the opinion that external
libraries would probably end up making it less efficient.
