const set = new Set([{ a: 'apple' }, 2, 3]);

console.log(set);
console.log(set.size);
console.log(set.entries());
console.log(set.keys()); // set은 사실상 key가 없다

// shallow Copy - 1
console.log(set.has({ a: 'apple' })); // false

const testObj = { name: 'banana' };
const testSet = new Set([testObj, 1, 2]);

console.log(testSet);

console.log(testSet.has(testObj)); // true
testObj.name = 'ahahahah!!';

console.log(testSet);

// shallow Copy - 2
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

obj1.price = 10;
objs.add(obj1);
console.log('objs', objs);

// Iterator
testSet.forEach((item) => console.log(item));

for (const val of set.values()) {
  console.log(val);
}

// add

set.add('5');
console.log(set);

// delete
set.delete(5);
console.log(set);
set.delete('5');
console.log(set);

//clear
set.clear();
console.log(set);
