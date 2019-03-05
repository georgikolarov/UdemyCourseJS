/**
 * The Ternary(also called conditional operator) Operator abd Switch Statements
 */

var firstName = 'John';
var age = 14;
// Ternary(conditional) statement
age >= 18 ? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drink juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
/**
 * if/else
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
 */
// Switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.!');
        break;
    case 'driver':
        console.log(firstName + ' driver an uber in Lisbon.!');
        break;
    case 'designer':
        console.log(firstName + ' designs beautifull websites.!');
        break;
    default:
        console.log(firstName + ' does something else.!');
}


age = 9;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}
