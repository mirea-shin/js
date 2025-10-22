// 프로토 타입을 베이스로한 객체지행 프로그래밍

function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.age}`);
};

function Dog(name, age, owner) {
  Animal.call(this, name, age);
  this.owner = owner;
}

// Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('PLAY!!');
};

const dog1 = new Dog('콩이', 1000, '미례');
console.log(dog1);
console.log(dog1.play());

function Tiger(name, age) {
  Animal.call(this, name, age);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.sayNo = () => {
  console.log('NO');
};
const tiger = new Tiger('호랑', 1);
console.log(tiger);
tiger.sayNo();

tiger.printName();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Object);
console.log(dog1 instanceof Tiger);
console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);
console.log(tiger instanceof Tiger);
