// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

const test = new Set([...fruits]);
console.log(test);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

let testArr = [];
const testSet = new Set([]);

set1.forEach((el) => {
  if (set2.has(el)) {
    testSet.add(el);
  }
});

console.log(testArr);
console.log(testSet);
