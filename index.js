// var

// 1. 변수 선언하는 키워드 없이 선언과 할당이 가능하다
// 선언인지 재할당인지 구분이 어려움

something = 'bad';
console.log(something);

// 2. 중복 선언이 가능하다
var anything = 'bad';
var anything = 'bad!';
console.log(anything);

// 3. 블록 레벨 스코프가 적용되지 않는다.

{
  var apple = 'green';
  {
    var apple = 'blue';
  }
}

console.log(apple);

// 함수 레벨 스코프는 지원됨

const sayBanana = () => {
  var banana = 'banana';
};

// console.log(banana);
