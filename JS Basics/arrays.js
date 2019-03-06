/**
 * Arrays
 */

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[6] = 'WithoutLength'
names[names.length] = 'Marry';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', 'designer', false];

john.push('blue');// Add element in the end
john.unshift('Mr.'); // Add element in the start
console.log(john);

john.pop();// Delete element in the end
john.pop();
john.shift(); // Delete ement in the start of the array
console.log(john);

john.indexOf(1990); // Show position 
console.log(john.indexOf(23));


//Ternary statement
var isDesigner = john.indexOf('designer') === -1 ? ' John is NOT a designer' : 'John is a designer';
console.log(isDesigner);