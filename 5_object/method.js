const name = 'banna';

const apple = {
  name: 'apple',
  display() {
    console.log(`${this.name} is good`);
  },
};

//  arrow function X
// 화살표 함수는 자신만의 this 바인딩을 갖지 않음
//대신 외부 스코프(여기서는 apple 객체가 아니라, 상위 실행 컨텍스트인 전역 스코프) 의 this를 그대로 사용해요.
//   display :() => {
//     console.log(` ${this.name} is good`);
//   },

apple.display();
