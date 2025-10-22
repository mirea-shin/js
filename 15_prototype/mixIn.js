// 오브젝트는 단 하나의 prototype을 갖을 수 있다 (부모는 단 하나)
// 하지만 , 여러 개의 함수들을 상속하고 싶을 때 사용하는 것이 있다.
// Object.assign()

const play = {
  play: function () {
    console.log(`${this.name} 놀아여`);
  },
};

const eat = {
  eat: function () {
    console.log(`${this.name} 먹어여`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, eat);

const dog1 = new Dog('콩콩이');
dog1.play();
dog1.eat();

// 자바스크립트는 프로토 타입 베이스 언어기 때문에
// 클래스에도 동일하게 적용된다.

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

const tiger = new Tiger('호랑이');

// tiger.play();

Object.assign(Tiger.prototype, play, eat);

tiger.play();
tiger.eat();
