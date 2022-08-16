'use strict';

class Car {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`🚀 ~ file: index.js ~ line 9 ~ Car ~ drive ~ drive`, drive);
  }
}

document.querySelector('#makeCar').addEventListener('click', () => {
  if (!window.carObj1) {
    window.cars = [];
    window.carObj1 = new Car('FORD');
    window.cars.push(window.carObj1);
    window.alert('Car created successfully');
  }
});

document.querySelector('#clearCar').addEventListener('click', () => {
  window.carObj1 = null;
});

document.querySelector('#deleteCar').addEventListener('click', () => {
  window.cars = window.cars.filter(car => car !== window.carObj1);
  window.carObj1 = null;
});


let cars = [];
let carsMap = new Map();
let carsSet = new Set();
document.querySelector('#makeCarCollection').addEventListener('click', () => {
  if (!window.carObj1) {
    cars = [];
    carsMap.clear();
    carsSet.clear();
    window.carObj1 = new Car('FORD');
    cars.push(window.carObj1);
    carsMap.set('FORD', window.carObj1);
    carsSet.add(window.carObj1);
    window.alert('Car created in collection');
  }
});

document.querySelector('#deleteCarCollection').addEventListener('click', () => {
  cars = cars.filter(car => car !== window.carObj1);
  carsMap.delete('FORD');
  carsSet.delete(window.carObj1);
  window.carObj1 = null;
});

let carsWeakMap = new WeakMap();
let carsWeakSet = new WeakSet();
document.querySelector('#makeCarWeakCollection').addEventListener('click', () => {
  if (!window.carObj1) {
    window.carObj1 = new Car('FORD');
    carsWeakMap.set(window.carObj1, 'FORD');
    carsWeakSet.add(window.carObj1);
    window.alert('Car created in weak collections');
  }
});

