function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage.toFixed(1)}% of the world.`;
  }
  

  let chinaDesc = describePopulation('China', 1441);
  let indiaDesc = describePopulation('India', 1393);
  let usaDesc = describePopulation('USA', 332);
  
  
console.log(chinaDesc);
console.log(indiaDesc);console.log(usaDesc);
  