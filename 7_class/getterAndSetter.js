//   접근 제어자 Access

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.koreanName = `${lastName} ${firstName}`;
  }
  get makeKoreanName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set something(value) {
    console.log(value);
    // this.lastName = value;
  }
}

const student = new Student('미례', '신');
// console.log(student.koreanName);
// console.log(student.makeKoreanName());
student.lastName = '김';
// get - 이용하면 이런식으로 프로퍼티에 접근하듯이 사용이 가능하다.
console.log(student.makeKoreanName);

// set = 를 붙이면 값이 할당됨?!
student.something = 'hey?';
