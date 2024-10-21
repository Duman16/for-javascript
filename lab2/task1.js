var countryPopulation = 10000000;
let halfPopulation = countryPopulation / 2;
console.log(halfPopulation);

countryPopulation += 1;
console.log(countryPopulation); 

let finlandPopulation = 6000000;
let hasMorePeople = countryPopulation > finlandPopulation;
console.log(hasMorePeople); 

let averagePopulation = 33000000;
let hasLessPeople = countryPopulation < averagePopulation;
console.log(hasLessPeople); 

let country = "Portugal";
let continent = "Europe";
let population = 11000000;
let language = "Portuguese";

let description = `${country} is in ${continent}, and its ${population / 1000000} million people speak ${language}.`;
console.log(description); 
