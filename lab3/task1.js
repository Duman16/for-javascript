let populations = [215300000,58940000,36820000,19620000]  //бразилия, италия,польша ,казахстан
console.log(populations.length === 4);

function percentageOfWorld1(population) {
    const worldPopulation = 7951000000;
    return (population / worldPopulation) * 100;
}

let percentages = [
    percentageOfWorld1(populations[0]).toFixed(2) + '%',
    percentageOfWorld1(populations[1]).toFixed(2) + '%',
    percentageOfWorld1(populations[2]).toFixed(2) + '%',
    percentageOfWorld1(populations[3]).toFixed(2) + '%'
];

console.log(percentages);