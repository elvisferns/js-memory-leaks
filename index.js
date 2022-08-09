class Car {
  constructor(name) {
    this.name = name;
  }
}

window.cars = [];
const car1 = new Car('FORD');
window.cars.push(car1);