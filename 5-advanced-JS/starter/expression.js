/**
 * 
 * Lecture: LIFE
 */

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/

// In parantesis js can't thinks that it is declaration or statement
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

/*(function () {

}) // tricks
*/
//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(10);