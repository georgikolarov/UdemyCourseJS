// Function constructor

/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};*/


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