const arman = {
    fullName: 'Arman Halykov',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2); // Вычисляем BMI  вычисляет индекс массы тела 
        return this.BMI;
    }
};

const kuat = {
    fullName: 'Kuat Mamyrkhanuly',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2); // Вычисляем BMI вычисляет индекс массы тела 
        return this.BMI;
    }
};

const armanBMI = arman.calcBMI(); 
const kuatBMI = kuat.calcBMI();   

// Сравнение и вывод результатов
if (armanBMI > kuatBMI) {
    console.log(`${arman.fullName}’s BMI (${armanBMI.toFixed(1)}) is higher than ${kuat.fullName}’s (${kuatBMI.toFixed(1)})!`);
} else if (kuatBMI > armanBMI) {
    console.log(`${kuat.fullName}’s BMI (${kuatBMI.toFixed(1)}) is higher than ${arman.fullName}’s (${armanBMI.toFixed(1)})!`);
} else {
    console.log(`Both ${arman.fullName} and ${kuat.fullName} have the same BMI (${armanBMI.toFixed(1)})!`);
}
