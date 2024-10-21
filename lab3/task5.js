let myCountry = {
    country: 'Kazakhstan',
    capital: 'Astana',
    language: 'Kazakh',
    population: 19620000,
    neighbours: ['Kyrgyzstan', 'Russia', 'China'],
    describe: function() {
        console.log('${this.country} has ${this.population / 1000000} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.');
    }
};
myCountry.describe();

myCountry.checkIsland = function() {
    if (this.neighbours.length === 0) {
        this.isIsland = true;
    } else {
        this.isIsland = false;
    }
};

myCountry.checkIsland();
console.log(myCountry.isIsland);