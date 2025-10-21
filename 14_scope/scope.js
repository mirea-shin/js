// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다
{
  const a = 'a';
}

// console.log(a);
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.

function printMsg() {
  const msg = 'Seceret MSG!';
  console.log(msg);
}

printMsg();
// console.log(msg);

// 함수 외부에서는 함수의 매개변수를 참조할 수 없다.

function sum(a, b) {
  return a + b;
}

// console.log(a);
