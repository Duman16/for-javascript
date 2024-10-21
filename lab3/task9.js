let populations = [215300000, 58940000, 36820000, 19620000]; //бразилия, италия,польша ,казахстан

function percentageWorld(population) {
    const worldPopulation = 7951000000;
    return (population / worldPopulation) * 100;
}


let percentages3 = [];

let i = 0;
while (i < populations.length) {
    percentages3[i] = percentageWorld(populations[i]).toFixed(2) + '%';
    i++;
}

console.log(percentages3);
