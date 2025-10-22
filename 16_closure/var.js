// var 를 사용할 때와 let을 사용할 떄의 차이점
// var는 블록스코프가 존재하지 않기 때문에 예상한것처럼 동작하지 않는다.

function loop() {
  const array = [];

  //   var i = 0;
  for (let i = 0; i < 5; i++) {
    array.push(() => {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
console.log(array);
array.forEach((func) => func());
