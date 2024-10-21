function checkDogs(dogsAliya, dogsSaule) {
    const correctedDogsAliya = dogsAliya.slice(2, -2);
    const allDogs = correctedDogsAliya.concat(dogsSaule);

    allDogs.forEach((age, index) => {
        const dogNumber = index + 1; // Номер собаки (индекс + 1)
        if (age >= 3) {
            console.log(`Dog number ${dogNumber} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${dogNumber} is still a puppy`);
        }
    });
}

const dogsAliya1 = [3, 5, 2, 12, 7];
const dogsSaule1 = [4, 1, 15, 8, 3];

const dogsAliya2 = [9, 16, 6, 8, 3];
const dogsSaule2 = [10, 5, 6, 1, 4];

console.log('Test Data 1:');
checkDogs(dogsAliya1, dogsSaule1);

console.log('Test Data 2:');
checkDogs(dogsAliya2, dogsSaule2);
