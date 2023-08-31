class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'beep';
    }
    toString() {
        const { make, model, year } = this;
        return `The vehicle is a ${make} ${model} from ${year}.`
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM'
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only Vehicles Allowed'
        }
        if (this.vehicles.length >= this.capacity) {
            return 'Sorry garage is full'
        }
        else this.vehicles.push(newVehicle)
    }
}

