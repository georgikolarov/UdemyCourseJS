/**
 * Functions
 */

function calculateAge(birthYear) {
    return 2019 - birthYear;
}
var ageJohn = calculateAge(1996);
var ageMike = calculateAge(1964);
var ageJane = calculateAge(1944);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}
yearsUntilRetirement(1996, ' John');
yearsUntilRetirement(1964, ' Mike');
yearsUntilRetirement(1944, ' Jane');