const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


let avgYesyl1 = calcAverage(44, 23, 71);
let avgYertys1 = calcAverage(65, 54, 49);

let avgYesyl2 = calcAverage(85, 54, 41);
let avgYertys2 = calcAverage(23, 34, 27);

function checkWinner(avgYesyl, avgYertys) {
  if (avgYesyl >= 2 * avgYertys) {
    console.log(`Yesyl win (${avgYesyl} vs. ${avgYertys})`);
  } else if (avgYertys >= 2 * avgYesyl) {
    console.log(`Yertys win (${avgYertys} vs. ${avgYesyl})`);
  } else {
    console.log('No team wins');
  }
}

checkWinner(avgYesyl1, avgYertys1);
checkWinner(avgYesyl2, avgYertys2);
