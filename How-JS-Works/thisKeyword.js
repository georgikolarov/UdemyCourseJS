/**
 * 
 * The this keyword
 */

//console.log(this);
// This print the window object
/*
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () // this is function expression
    {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this); // this is very important
        }
        innerFunction();
    }
}
john.calculateAge();