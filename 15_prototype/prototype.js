function Dog(name, age) {
  this.name = name;
  this.age = age;

  // 인스턴스 레벨의 함수 :  생성자 함수로 생성한 모든 인스턴스에 해당 함수가 포함된다
  //   this.printNmae = () => {
  //     console.log(`${this.name} ${this.age}`);
  //   };
}

const dog1 = new Dog('cong', 10000);
const dog2 = new Dog('congcong', 2000);
console.log(dog1);
console.log(dog2);
// dog1.printNmae();

// 프로토 타입 레벨의 함수

Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.age} prototype !`);
};

dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨(자식)에서 동일한 이름으로 함수를 재정의 하면 = 오버라이딩 하면
// 프로토타입 레벨(부모) 함수의 프로퍼티는 가려진다.

dog1.printName = function () {
  console.log(`${this.name} 안녕!`);
};

dog1.printName();
dog2.printName();

// 정적 레벨

Dog.hello = () => {
  console.log('hello!!!!!!');
};

// dog1.hello();
Dog.hello();
Dog.MAX_AGE = 20;

console.log(Dog);

console.log(dog1.MAX_AGE);
