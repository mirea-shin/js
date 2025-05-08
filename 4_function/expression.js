// 함수 선언문 function name (){ }
// 함수 표현식 const name = () => {}
let add = function (a, b) {
  return a + b;
};

// 화살표 함수 const name  = () => {}
add = (a, b) => a + b;

// IIFE? (Immediately invoked function Expressions)

(function run() {
  console.log('now!');
})();
