/**
 * Truthy and Falsy values and equality operators
 */

//falsy values: undefined, null, 0, ''(empty strings), NaN
//truthy values: All NOT falsy values

var height;
if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
var height0; //falsy because it is 0
height0 = 0;
if (height0/*0 - false*/ || height0 === 0/* height0 = 0 is true*/) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

//Equality operators

if (height == '23') {
    console.log('The == operator does type coercion!');
}
// == convert string '23' to a number and then compare both
