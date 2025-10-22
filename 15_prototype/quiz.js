class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName = function () {
    console.log(`${this.name} ${this.age}!`);
  };
}

class Dog extends Animal {
  constructor(name, age, owner) {
    super(name, age);
    this.owner = owner;
  }
  play = function () {
    console.log('놀장!');
  };
}

const dog = new Dog('콩이', 100, '미례');
console.log(dog);
dog.printName();
dog.play();

class Tiger extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  hunt = function () {
    console.log('사냥!');
  };
}

const tiger = new Tiger('호랑이', 30);
console.log(tiger);
// console.log(tiger.pr);

tiger.hunt();
// tiger.play();

tiger.printName();
