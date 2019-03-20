// Function constructor

/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};*/

/*

// for function constructor Person with capital P
// constructor
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

var mark = new Person('Mark', 1964, 'retired');

var jane = new Person('jane', 1998, 'driver');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// Object.create

/*
var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
};
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1995;
john.job = 'driver';

var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1962 },
        job: { value: 'designer' }
    })
    */


// Primitives vs objects 


// Primitives
var a = 23;
var b = a;

a = 46;

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);

console.log(obj2.age);

// Function

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'Plovdiv';
}

change(age, obj);
console.log(age);
console.log(obj.city);
