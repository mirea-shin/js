// 내부 정보를 은닉하고, 공개함수 (public, 외부)를 통한 데이터 조작을 위해 필요
// 캡슐화와 은닉화
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일
// But js에 class가 도입되면서 그렇게 까지 필요한 기능은 아님

const makeCounter = () => {
  let num = 0;
  function increase() {
    num++;
    console.log(num);
  }

  return increase;
};

const getIncrease = makeCounter();

getIncrease();
getIncrease();
getIncrease();
getIncrease();

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(`increase 함수 : ${this.#count}`);
  }
}

const counter = new Counter();

counter.increase();
