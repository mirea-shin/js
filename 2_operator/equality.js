// 동등비교

// == same value
// != not same value
// === same type and value
// !== not same type and value

console.log(2 == 2);
console.log(2 == '2');
console.log(2 != '2');

console.log(2 === 2);
console.log(2 === '2');
console.log(2 !== '2');

console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

console.clear();

// object

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
// same reference
console.log(obj3 === obj2);
