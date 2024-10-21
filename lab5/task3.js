function Car(make, speed) {
    this.make = make; //своойства будут доступны всем обььектам
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

function EV(make, speed, charge) {
    Car.call(this, make, speed); 
    this.charge = charge; // хронит уровень заряда
}


EV.prototype = Object.create(Car.prototype); // Устанавливает прототип EV на основе Car

EV.prototype.constructor = EV; // указывает EV на конструктор EV

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} charged to ${this.charge}%`);
};

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 23);

tesla.accelerate(); 
tesla.brake();      
tesla.chargeBattery(90); 
