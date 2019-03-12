var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determinate precentage based on tipping rules
            var precentage;
            var bill = this.bills[i];
            if (bill < 50) {
                precentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                precentage = 0.15;
            } else {
                precentage = 0.10;
            }
            // Add result to the corresponing arrays
            this.tips[i] = bill * precentage;
            this.finalValues[i] = this.tips[i] + this.bills[i];
        }
    }
}
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    tips: [],
    calcMarkTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.20;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.tips[i] + this.bills[i];
        }
    }
}

function calcAcerage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations

john.calcTips();
mark.calcMarkTips();

john.average = calcAcerage(john.tips).toFixed(2);
mark.average = calcAcerage(mark.tips).toFixed(3);
console.log(john, mark);


if (john.average > mark.average) {
    console.log(john.fullName + ' \' family pays higher tips, with an average of $' + john.average);
} else {
    console.log(mark.fullName + ' \' family pays higher tips, with an average of $' + mark.average);
}