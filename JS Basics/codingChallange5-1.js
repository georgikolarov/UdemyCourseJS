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

john.calcTips();
console.log(john);
