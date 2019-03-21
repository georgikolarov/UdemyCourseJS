/**
 * 
 *  Lecture: Bing, call and apply
 */

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
}

john.presentation('formal', 'morning');

// Call Method
john.presentation.call(emily, 'friendly', 'afternoon'); // we call emily object

// Apply Method only one different than call.method is this that arguments are declare in array
john.presentation.apply(emily, ['friendly', 'afternoon']);

// Bind Method - this generate a copy of the function. Similar like call method. We can to put function in variable somwhere


var johnFriendly = john.presentation.bind(john, 'friendly'); // Only the first argument of the function
johnFriendly('night');
johnFriendly('moorning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoooooon');
emilyFormal(26 + 'th january');




var years = [1990, 1965, 1937, 2005, 1999];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);