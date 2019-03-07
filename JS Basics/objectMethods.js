/**
 * Objects and methods
 */
// 'this' is spacial keyword
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 2001,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2018 - this.birthYear; //this mean john.birthYear
    }
    /*
    instead calcAge: function(birthYear){
        return 2018 - birthYear
    }*/
};
john.calcAge(); //call function
console.log(john); //intialize the object
 //instead console.log(john.calcAge(1990));
