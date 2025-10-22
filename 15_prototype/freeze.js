// 객체의 불변성
// freeze
// 동결! 추가 안됨, 삭제 안됨, 쓰기 안됨, 속성 재정의 안됨

const ellie = { name: '엘리' };
const dog = { name: '우아', owner: ellie };

Object.freeze(dog);

dog.name = '와우';
console.log(dog);

dog.age = 5;
console.log(dog);

delete dog.name;
console.log(dog);

// 단 얕은 꽁꽁 얼림 - 참조되어있는 객체가 있을 때, 해당 사항을 변경하면 수정이 되어버린다.

ellie.name = '엘프';
console.log(dog);

// seal
// 수정은 가능! 추가안됨, 삭제안됨, 속성 재 정의 안됨

const cat = {};
Object.assign(cat, dog);
// Object.assgin(cat, dog);
// const cat = { ...dog };

cat.age = 10;
console.log(cat);

Object.seal(cat);

cat.name = '와우';
console.log(cat);

delete cat.age;
console.log(cat);

console.log(Object.isFrozen(cat));
console.log(Object.isSealed(cat));

// 확장 금지
// 추가 안됨! 그 외의 요소들은 가넝함!

const tiger = { name: '어흥' };
console.log(tiger);

tiger.age = 100;
console.log(tiger);

Object.preventExtensions(tiger);
tiger.mood = 'happy';

console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.name = 'hmm';
console.log(tiger);

tiger.age = 30;
console.log(tiger);
