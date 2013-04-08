# Evaluation of Douglas Crockford's Classical Inheritance

Douglas Crockford presented 5 methods of inheritance. For this part I looked at his idea of Classical Inheritance. Let's see how it did.

### Developer Friendly

The class definintions do not seem overly complex. They remind me of C++ a little, where you'd define your headers and implementation separetely. Only in this case: no headers.
So as far as the boilerplate goes, I don't have any problems. However there are two smells/hacks I'd like to point out.

First off, if you would notice nearly every constructor looks identical. The Human Classes add SSN but other than that their constructors all do the same thing. What if I wanted
add eye color as another property of all animals? I'd have to change every constructor to do it. Why does this happen? How could it be better? I'll get to that in the
Constructor section.

Second, you'll note the use of 'uber' as his super replacment. It is unfortunate that he had to use 'uber' but that is hardly his fault (super being a reserved word) nor is that
my point. My point is that while you *can* use uber methods, you have to do it with this awkward syntax where your method name is passed into the uber method. More on that in the
"super" access section.

##### Conclusion: Mostly friendly but has a few nasty parts.

### Method/property propagation

Everything seems solid here, everything propagated correctly and it was intuitive.

##### Conclusion: Fully functional.

### "super" access

"super" access is supported and fully featured, but it is awkward. If I am designing an API and I expect developers using my API to be able to extend my classes and use the
super functionality, I can only imagine a lot of confusion and bugs around it. My main problem is that just because a method is in a parent class, does not mean that it we should
have a different way of invoking it. All methods should be able to be invoked in similar manners. I would prefer a namespace on 'this', call it 'uber' if you will, that gave
access to the parent class.

##### Conclusion: Fully functional but awkward to use.

### Constructors

Constuctors can enforce that they are used certain ways by throwing errors just like any function can. However, parent class constructors are never called. What's more, all the
constructors in this example are redundant. I already brought up the code maintainability problem. This could be solved by defering object construction to an init method.
This solves the maintainability problem and helps our ability to call parent constructors. Calling this new init method would then be the only line in the constructor. Method
propagation would allow that init method to only be written once (unless it needed to be overridden and then the "super" access can be used). Parents can't enforce that their
constructors are called, but then again, we are loosely typed, so I think we are okay with that.

##### Conclusion: Fully functional except being able to call a parent constructor. The init method convention would be helpful to use.

### Private environment

This is probably my biggest problem with using the prototype. For anything to be shared on an instance, it *must* be public. The only way JavaScript can make private variables
is with the function scope. Since there is no overarching function, we cannot use it's scope for private methods/variables. JavaScript is loosely typed so it could be argued that
I should just chill, but when you are making a single page app that requires confidence that people aren't opening the console and hacking your app (and compromising other users
and/or the server), you might find you want this.

Beyond security, I would argue that a good API will hide its innards, so as not to confuse the developers about what they can and cannot use.

Off my soapbox; Becuase this relies completely on the prototype, there is no way to have private methods/variables.

##### Conclusion: No support.

### Efficiency

I don't see method getting much more efficient. Implementing inherits seems fairly straightforward, with the exception of the uber implmentation (which is part of inherits'
implementation) which isn't bad but I think could be improved through the prototype (since we are already using it).

##### Conclusion: Acceptable.

### Vanilla JavaScript

##### Conclusion: Check.
