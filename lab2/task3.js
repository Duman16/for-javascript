let country = "Portugal";
let population = 11000000;
let averagePopulation = 33000000;

if (population > averagePopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  let difference = averagePopulation - population;
  console.log(`${country}'s population is ${difference / 1000000} million below average.`);
}

population = 11000000;

if (population > averagePopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  let difference = averagePopulation - population;
  console.log(`${country}'s population is ${difference / 1000000} million below average.`);
}

population = 11000000; 
console.log(`${country}'s population is ${33 - (population / 1000000)} million below average.`);
