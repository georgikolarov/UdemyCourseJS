/**
 * Objects and properties
 */

//Object literal
var john = {
    firtsName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}
console.log(john);
console.log(john.firtsName);
console.log(john['lastName']);
var x = 'birthYear'; // like string
console.log(john[x]);

john.job = 'driver'; //notation add
john['isMarried'] = true; //notation change property
console.log(john);


//New Object syntax with array
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
jane['likeString'] = 'New String';
jane.new = 'new';
console.log(jane);