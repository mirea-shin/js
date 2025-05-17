// Object Literal {key : value}
// new Object
// obejct.create()
// key: 문자, 문자열, 숫자, 심볼
// value: 원시타입, 객체

const apple = {
  0: 'apple',
  name: 'apple',
  ['fruit-name']: 'apple',
  'fruta-name': 'apple',
};

console.log(apple);

// add
apple['color'] = 'red';

console.log(apple);

//delete
delete apple.color;

console.log(apple);
