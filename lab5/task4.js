class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;

    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl {
    #charge; // новое свойство чардж, хранит уровень батареи

    constructor(make, speed, charge) {
        super(make, speed);//вызывает конструктор родительского класса CarCl
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make} charged to ${this.#charge}%`);
        return this; //цепочка вызовов
    }

    accelerate() {
        this.speed += 20;//сложение и присваивает
        this.#charge--;//декремент, уменьшает на 1
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }

    brake() {
        this.speed -= 5;//вычитает и присваивает
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian.accelerate().brake().chargeBattery(90).accelerate();
