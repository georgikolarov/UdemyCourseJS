// Important is to know structure and architecture of the project

// Modules - Why we use modules - we want to keep pieces of code / module pattern, An immediately-invoked function expression
//is simply anonymous function wrapped in parenthesis

var budgetController = (function () {

    var x = 23;
    var add = function (a) { // we cant to set this outside like budgetController.add(4), because it is not a function, this is expression
        return x + a;
    }
    return {
        publicTest: function (b) {   // we can to set with this budgetController.publicTest(5)
            return add(b); // instead of 
            //console.log(add(c, d));
        }
    }
})();

var UIController = (function () {

    // Some code

})();


var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(1000);
    return {
        anotherPublicMethod: function () {
            console.log(z);
        }
    }


})(budgetController, UIController); //invoke the function