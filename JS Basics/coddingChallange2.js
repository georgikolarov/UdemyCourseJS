//First exercise
var averageScoreJohn = (89 + 120 + 103) / 3;
var averageScoreMike = (116 + 94 + 122) / 3;

switch (true) {
    case averageScoreJohn > averageScoreMike:
        console.log(' John\'s team has highest score: ' + averageScoreJohn);
        break;
    case averageScoreJohn < averageScoreMike:
        console.log(' Mike\'s team has highest score: ' + averageScoreMike);
        break;
    default:
        console.log('The result is draw between both teams');
        break;
}
//Second exercise
