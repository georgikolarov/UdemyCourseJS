var massMark = 78; //kg
var heighMark = 1.92; // meters
var massJohn = 85;
var heightJohn = 1.85;
var bmiMark, bmiJohn;
bmiMark = massMark / (heighMark * heighMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn, bmiMark);
var markHigherBMI = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI  higher than John\'s? ' + markHigherBMI);
