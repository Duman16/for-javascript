const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    scored: ['Gnarby', 'Hummels', 'Lewandowski', 'Lewandowski'],
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

game.scored.forEach((player, index) => { //перебирает массив и для каждого элемента выполняет функцию.
    console.log(`Goal ${index + 1}: ${player}`);
});

const odds = Object.values(game.odds);//метод, который возвращает массив значений всех коэффициентов из объекта 
const averageOdd = odds.reduce((acc, odd) => acc + odd, 0) / odds.length;
console.log(`Average odd: ${averageOdd}`);

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

const scorers = {};//обьект

game.scored.forEach(player => {
    scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
});//значение увеличивается на 1, если нет — игроку присваивается 1

console.log(scorers);