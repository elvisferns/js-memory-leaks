'use strict';

class Car {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`🚀 ~ file: index.js ~ line 9 ~ Car ~ drive ~ drive`, drive);
  }
}

window.cars = [];
document.querySelector('#makeCar').addEventListener('click', () => {
  if (!window.carObj1) {
    window.carObj1 = new Car('FORD');
    window.cars.push(window.carObj1);
    window.alert('Car created');
  }
});

document.querySelector('#clearCar').addEventListener('click', () => {
  window.carObj1 = null;
  window.alert('Car reference cleared');
});

document.querySelector('#deleteCar').addEventListener('click', () => {
  window.cars = window.cars.filter(car => car !== window.carObj1);
  window.carObj1 = null;
  window.alert('Car deleted');
});


