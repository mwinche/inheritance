/*
http://www.crockford.com/javascript/inheritance.html - Douglas Crockford
*/

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Function.method('inherits', function (parent) {
    this.prototype = new parent();
    var d = {}, 
        p = this.prototype;
    this.prototype.constructor = parent; 
    this.method('uber', function uber(name) {
        if (!(name in d)) {
            d[name] = 0;
        }        
        var f, r, t = d[name], v = parent.prototype;
        if (t) {
            while (t) {
                v = v.constructor.prototype;
                t -= 1;
            }
            f = v[name];
        } else {
            f = p[name];
            if (f == this[name]) {
                f = v[name];
            }
        }
        d[name] += 1;
        r = f.apply(this, Array.prototype.slice.apply(arguments, [1]));
        d[name] -= 1;
        return r;
    });
    return this;
});

// Inheritance chain example
var Animal, Dog, Human, MiddleAgedHuman,
	lizard, spot, rover, joe, bob, sarah, fred,
	verifyTest = function(animal, values){
		var value;
		for(key in values){
			if(values.hasOwnProperty(key)){
				value = animal[key]();

				console.log(value === values[key], value, values[key]);
			}
		}
	};


//Animal Class
Animal = function(name, age){
	this.setName(name).setAge(age);
};

Animal.method('setName', function(name){
	this.name = name;

	return this;
});

Animal.method('getName', function(){
	return this.name;
});

Animal.method('setAge', function(age){
	this.age = age;

	return this;
});

Animal.method('getAge', function(){
	return this.age;
});

Animal.method('getAgeString', function(){
	return this.age + ' years';
});



//Dog Class
Dog = function(name, age){
	this.setName(name).setAge(age);
};

Dog.inherits(Animal);

Dog.method('getAge', function(){
	return 7 * this.uber('getAge');
});

Dog.method('getAgeString', function(){
	return this.getAge() + ' dog years';
});


//Human Class
Human = function(name, age, ssn){
	this.setName(name).setAge(age).setSSN(ssn);
};

Human.inherits(Animal);

Human.method('getSSN', function(){
	return this.ssn;
});

Human.method('setSSN', function(ssn){
	this.ssn = ssn;

	return this;
});

Human.method('getAgeString', function(){
	var realAge = this.uber('getAge');

	return realAge + ' year' + (realAge === 1 ? '' : 's');
});


//MiddleAgedHuman Class
MiddleAgedHuman = function(name, age, ssn){
	this.setName(name).setAge(age).setSSN(ssn);
};

MiddleAgedHuman.inherits(Human);

MiddleAgedHuman.method('getAgeString', function(){
	var realAge = this.uber('getAge'),
		extraAge = realAge - 29 + 1;

	return realAge <= 29 ? (realAge + ' year' + (realAge === 1 ? '' : 's')) : '29 years';
});


//Object Creation
lizard = new Animal('Lizard', 3);

spot = new Dog('Spot', 1);
rover = new Dog('Rover', 7);

joe = new Human('Joe', 30, '123');
bob = new Human('Bob', 12, '234');

sarah = new MiddleAgedHuman('Sarah', 25, '345');
fred = new MiddleAgedHuman('Fred', 40, '456');


//Tests
console.log('All lines should begin with "true"');

verifyTest(lizard, {
	'getName': 'Lizard',
	'getAgeString': '3 years',
	'getAge': 3
});

verifyTest(spot, {
	'getName': 'Spot',
	'getAgeString': '7 dog years',
	'getAge': 7
});

verifyTest(rover, {
	'getName': 'Rover',
	'getAgeString': '49 dog years',
	'getAge': 49
});

verifyTest(joe, {
	'getName': 'Joe',
	'getAgeString': '30 years',
	'getAge': 30,
	'getSSN': '123'
});

verifyTest(bob, {
	'getName': 'Bob',
	'getAgeString': '12 years',
	'getAge': 12,
	'getSSN': '234'
});

verifyTest(sarah, {
	'getName': 'Sarah',
	'getAgeString': '25 years',
	'getAge': 25,
	'getSSN': '345'
});

verifyTest(fred, {
	'getName': 'Fred',
	'getAgeString': '29 years',
	'getAge': 40,
	'getSSN': '456'
});
