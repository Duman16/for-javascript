let neighbours = ['Kazakhstan', 'Russia', 'China', 'Kyrgyzstan', 'Uzbekistan'];
console.log(neighbours);

neighbours.unshift('Utopia');
console.log(neighbours);
//добавляет в начало списка

neighbours.pop();
console.log(neighbours);
//убирает с конца списка

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}
//проверяет на наличие германии

let index = neighbours.indexOf('Kazakhstan');
if (index !== -1) {
    neighbours[index] = 'Republic of Kazakhstan';
}
//меняет Казахстан

console.log(neighbours);