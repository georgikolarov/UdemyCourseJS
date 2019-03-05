/**
 * If / else statements
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


// Challange1 - solved better
var massMark = 78; //kg
var heighMark = 1.92; // meters
var massJohn = 85;
var heightJohn = 1.85;
var bmiMark, bmiJohn;
bmiMark = massMark / (heighMark * heighMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {

    console.log('John\'s BMI is higher than Mark\'s.');
}

/*
console.log(bmiJohn, bmiMark);
var markHigherBMI = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI  higher than John\'s? ' + markHigherBMI);
*/