//First exercise
var averageScoreJohn = (89 + 120 + 103) / 3;
var averageScoreMike = (117 + 94 + 122) / 3;
var averageScoreMary = (94 + 134 + 108) / 3;
console.log('Score John: ' + averageScoreJohn, ' Score Mike: ' + averageScoreMike, 'Score Mary: ' + averageScoreMary);

/*switch (true) {
    case averageScoreJohn > averageScoreMike:
        console.log(' John\'s team has highest score: ' + averageScoreJohn + ' points');
        break;
    case averageScoreJohn < averageScoreMike:
        console.log(' Mike\'s team has highest score: ' + averageScoreMike + ' points');
        break;
    default:
        console.log('The result is draw between both teams');
        break;
}
*/
//Second exercise

if (averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary) {
    console.log('John\'s team has highest result with ' + averageScoreJohn + ' points');
} else if (averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary) {
    console.log('Mike\'s team has highest result with ' + averageScoreMike + ' points');
} else if (averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike) {
    console.log('Mary\'s team has highest result with ' + averageScoreMary + ' points');
} 