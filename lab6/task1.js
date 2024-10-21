const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],//двумерный массив
  ],
  score: '4:0',//параметр
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],//массив
  date: 'Nov 9th, 2037',
  odds: {//обьект 
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

const players1 = game.players[0];//извлечение данных
const players2 = game.players[1];//извлечение данных

const [gk, ...fieldPlayers] = players1;//с помощью диструктиризации из массива первый становится вратарем(переменной гк), остальные полевыми(массив)

const allPlayers = [...players1, ...players2];//массив который обьединяет обе команды

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;//х переименовывается в драв

const printGoals = function (...players) { //функция принимает аргументы используя оператор рест
  console.log('${players.length} goals were scored');
  for (const player of players) {
    console.log(player);
  }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');//логическое сравнение
team1 > team2 && console.log('Team 2 is more likely to win');//логическое сравнение