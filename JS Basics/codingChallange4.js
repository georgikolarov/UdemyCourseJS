var john = {
    fullname: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

/*john.calcBmi();
mark.calcBmi();
console.log(john, mark);
* instead of ->*/
if (john.calcBmi() > mark.calcBmi()) /*only here function*/ {
    console.log(john.fullname + ' has a higher BMI of ' + john.bmi)
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullname + ' has a higher BMI of ' + mark.bmi)
} else {
    console.log('The have the same BMI');
}