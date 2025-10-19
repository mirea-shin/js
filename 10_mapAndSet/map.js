const map = new Map([
  ['k1', 'apple'],
  ['k2', 'banana'],
]);

console.log(map);
console.log(map.size);
console.log(map.has('apple')); // false
console.log(map.has('k1')); // true

// iterator
map.forEach((val, key) => console.log(val, key));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// find
console.log(map.get('k1')); // apple
console.log(map.get('apple')); // undefined

// add
map.set('k3', 'hihi');
console.log(map);

map.set(['arr'], 'hi');
console.log(map);

console.log(map.get(['arr'])); // undefinded

const testArr = ['test'];
map.set(testArr, 'Hi im Arr');
console.log(map.get(testArr)); // Hi im ARR

// delete
map.delete('k3');
console.log(map);

map.clear();

// ⚡️ 오브젝트와의 차이점
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };

const obj = {
  [key]: milk,
};

console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);

console.log(obj[key]);
// console.log(map2[key]);
console.log(map2.get(key));
