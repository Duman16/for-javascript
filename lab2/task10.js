let almatyScores = [96, 108, 89];
let astanaScores = [88, 91, 110];

let almatyAverage = almatyScores.reduce((a, b) => a + b) / almatyScores.length;
let astanaAverage = astanaScores.reduce((a, b) => a + b) / astanaScores.length;

if (almatyAverage >= 100 && astanaAverage >= 100) {
  if (almatyAverage > astanaAverage) {
    console.log("Almaty wins the trophy!");
  } else if (astanaAverage > almatyAverage) {
    console.log("Astana wins the trophy!");
  } else {
    console.log("It's a draw!");
  }
} else {
  console.log("No team wins the trophy.");
}
