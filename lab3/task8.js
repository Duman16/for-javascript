let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Kazakhstan']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log('Neighbour: ' + listOfNeighbours[i][j]);
    }
}
// Теперь i равно 1
//перебирает каждый элемент в подмассиве