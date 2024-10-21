class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
//конструктор это образец класса

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`); //template literals)
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`); //template literals)
    }

    get speedUS() {
        return this.speed / 1.6; //получить скорость в милях
    }

    set speedUS(speed) {
        this.speed = speed * 1.6; //установить скорость в милях в час переделать в км/ч
    }
}

const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.brake();
console.log(`Speed in mi/h: ${ford.speedUS}`);
ford.speedUS = 50;
console.log(`New speed in km/h: ${ford.speed}`);


