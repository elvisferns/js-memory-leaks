'use strict';

class Car {
  constructor(name) {
    console.log(`🚀 ~ file: index.js ~ line 5 ~ Car ~ constructor ~ name`, name);
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
  window.alert('Car reference cleared');
});

document.querySelector('#deleteCar').addEventListener('click', () => {
  window.cars = window.cars.filter(car => car !== window.carObj1);
  window.carObj1 = null;
  window.alert('All Car references cleared');
});

// memory leaks with handlers
class CarWithHandler extends Car {
  constructor(name) {
    super(name);
    this.init();
  }

  handler = () => {
    window.alert(`The car name : ${this.name}`);
  }

  init() {
    this.el = document.querySelector('#printName');
    this.el.addEventListener('click', this.handler);
  }

  destroy() {
    if (this.handler) {
      this.el?.removeEventListener('click', this.handler);
    }
  }

  destroyElement() {
    this.el?.remove();
  }
}

document.querySelector('#makeCarHandler').addEventListener('click', () => {
  if (!window.carHandlerObj1) {
    window.carHandlerObj1 = new CarWithHandler('FORD With Handler');
    window.alert('CarWithHandler created');
  }
});

document.querySelector('#clearCarHandler').addEventListener('click', () => {
  window.carHandlerObj1 = null;
  window.alert('CarWithHandler reference cleared');

});

document.querySelector('#deleteCarHandler').addEventListener('click', () => {
  window.carHandlerObj1?.destroy();
  window.carHandlerObj1 = null;
  window.alert('CarWithHandler handler removed');
});

document.querySelector('#deleteCarEl').addEventListener('click', () => {
  window.carHandlerObj1?.destroyElement();
  window.carHandlerObj1 = null;
  window.alert('CarWithHandler destroy element');
});
