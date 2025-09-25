// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const input1 = ['🍌', '🍓', '🍇', '🍓'];
const output1 = input1.map((el) => (el === '🍓' ? '🥝' : el));

console.log(input1);
console.log(output1);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const input2 = ['🍌', '🥝', '🍇', '🥝'];
const output2 = input2.filter((el) => el === '🥝');

const findElement = (arr, item) => {
  return arr.filter((el) => el === item).length;
};

const result = findElement(input2, '🥝');
console.log(result);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const input3 = ['🍌', '🥝', '🍇'];
const input4 = ['🍌', '🍓', '🍇', '🍓'];

const result3 = input3.filter((el) => input4.includes(el));
console.log(result3);

// input3.reduce;

const inputNums = [3, 16, 5, 25, 4, 34, 21];

const averageFunc = (nums) => {
  const filredArr = nums.filter((el) => el >= 5);
  const sum = filredArr.reduce((sum, curr) => {
    sum += curr;
    return sum;
  }, 0);

  return sum / filredArr.length;
};

const result4 = averageFunc(inputNums);

console.log(result4);
