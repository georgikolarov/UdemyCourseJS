/*//Start Global scope
var a = 'Hello';
first();
//Start first() function scope
function first() {
    var b = 'Hi!';
    second();
    //Start second function scope
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
        third();
        function third() {
            var d = 'John!';
            console.log(a + b + c + d);
        }
    }
    //End second function scope
}
//End first function scope
//End Global scope
*/

var a = 'Hello';
first();
//Start first() function scope
function first() {
    var b = 'Hi!';
    second();
    //Start second function scope
    function second() {
        var c = 'Hey!';
        third();
        function third() {
            var d = 'John!';
            //console.log(c);
            console.log(a + ' ' + d);
        }
    }

    //End second function scope
}
