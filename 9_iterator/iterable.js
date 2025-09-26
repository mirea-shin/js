// 이터러블 하다 = 순회가 가능하다
// 심볼정의를 가진 객체나 특정 함수가 iterableIterator를 리턴한다는 것은
// 순회 가능한 객체! 라는 것을 의미한다.
// 순회가 가능하다면 무엇으 ㄹ할 수 있나?
// 빙글 빙글 도느 ㄴ반복문 연산자들을 사용할 수 있다.

const array = [1, 2, 3];

console.log(array.values());

const iterator = array.values();

while (true) {
  const item = iterator.next();
  //   console.log(iterator.values());
  console.log(item);
  if (item.done) break;
  console.log(item.value);
}

for (let item of array.values()) {
  console.log(item);
}

const obj = { id: 123, name: 'Ellie' };
for (const key in obj) {
  console.log(key);
}
