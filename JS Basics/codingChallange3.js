function tipsCalculator(bill) {
    var percantage;
    if (bill < 50) {
        percantage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percantage = 0.15;
    } else {
        percantage = 0.1;
    }
    return percantage * bill;
}

var bills = [124, 48, 268];
var tips = [
    tipsCalculator(bills[0]),
    tipsCalculator(bills[1]),
    tipsCalculator(bills[2]),
]
var allBill = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]
console.log(tips);
console.log(' All amount of the bill is:' + allBill[2]);