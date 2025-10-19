const map = new Map();

const key1 = 'key';
const key2 = 'key';
const key3 = 'key';

map.set(key1, 'Hoy');

console.log('###########');
console.log(map.get(key1));
console.log(map.get(key2));
console.log(key1 === key2);
console.log('###########');

const symbolKey1 = Symbol('key');
const symbolKey2 = Symbol('key');
const symbolMap = new Map([[symbolKey1, 'Ayer']]);
console.log(symbolMap.get(symbolKey1)); // Ayer
console.log(symbolMap.get(symbolKey2)); // Undefined
console.log(symbolKey1 === symbolKey2); // false

console.log('########');

// 동일한 이름으로 하나의 키를 사용하고 싶으면 Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)

const map2 = new Map();

const k1 = Symbol.for('key😀');
const k2 = Symbol.for('key😀');
const k3 = Symbol.for('key');
console.log(key3 === k3);

map2.set(k1, 'Hamburger');
console.log(map2.get(k2));
console.log(k1 === k2);
console.log(k1);
console.log(Symbol.keyFor(k1));

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj[k2]);
console.log(obj[Symbol('key')]);
