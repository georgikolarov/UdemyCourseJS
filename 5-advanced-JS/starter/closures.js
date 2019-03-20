/**
 * Lecture: Closures
 */


function retirement(retirementAge) {
    return function (yearOfBirth) {
        var a = ' year left until retirement.';
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}


var retirementUS = retirement(66);

var retirementDE = retirement(65);

var retirementIceland = retirement(67);

retirementUS(1990);
retirementDE(1990);
retirementIceland(1990);


//retirement(66)(2000);

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            var a = ' can you please explain me what UX means?';
            console.log(name + a);
        } else if (job === 'driver') {
            var a = 'Where do you drive ';
            console.log(a + name + ' ?')
        } else {
            console.log('Hello ' + name + 'What do you do?');
        }
    }
}

var interviewDesigner = interviewQuestion('designer');
interviewDesigner('John');

interviewQuestion('driver')('Mike');