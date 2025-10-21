// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해준다.

// 함수의 선언문은 선언 이전에도 호출이 가능함!!! 함수!
printHI();

function printHI() {
  console.log('HI');
}

// 선언형 함수는 안됨
// 변수 (let, const), 클래스는 선언만 호이스팅되고, 초기화는 안된다.

// console.log(hi);
// const cat = new Cat();
// printHello();

let hi = 'hi';
class Cat {}

const printHello = () => {
  console.log('Hello');
};

let x = 1;
{
  // let x =2 ;
  console.log(x);
  // let x = 2;
}
