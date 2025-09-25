class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eat somehing');
  }
  say(text) {
    console.log(`say : ${text}`);
  }
}

const dog = new Animal('red');

dog.say('HI');
console.log(dog);

class Plant extends Animal {
  constructor(color, name) {
    // 부모 요소에 상속받아서 어쩌고 할 떄는 어쩌고 super 를추가해야해
    super(color);
    this.name = name;
  }
  play() {
    console.log('PLAY!!!!!');
  }
}
// dog.play();
const aloe = new Plant('hmm', 'my name');

console.log(aloe);
