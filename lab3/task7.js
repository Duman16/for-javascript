let populations = [215300000, 58940000, 36820000, 19620000]; //бразилия, италия,польша ,казахстан
function percentageWorld(population) {
    const worldPopulation = 7951000000;
    return (population / worldPopulation) * 100;
}


let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageWorld(populations[i]).toFixed(2) + '%';
}
//Используем цикл для вычисления процентной доли каждой страны в массиве

console.log(percentages2);

let percentages = [
    percentageWorld(populations[0]).toFixed(2) + '%',
    percentageWorld(populations[1]).toFixed(2) + '%',
    percentageWorld(populations[2]).toFixed(2) + '%',
    percentageWorld(populations[3]).toFixed(2) + '%'
];


console.log(percentages);


for (let i = 0; i < percentages.length; i++) {
    if (percentages[i] !== percentages2[i]) {
        console.log('Массивы не равны');
    }
    //!== строгое не равенство
}
console.log('Оба массива равны:', percentages.toString() === percentages2.toString());