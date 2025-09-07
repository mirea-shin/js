// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환핟.

const number = 123; // number 원시타입

console.log(number.toString()); // Number 객체로 감싸진다.
console.log(number); // number 원시타입

const text = 'bye'; // string 문자열 원시타입
text.trim(); // String 객체 
text.length;
