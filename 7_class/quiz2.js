class Employee {
  #pay;

  constructor(name, department, workingHour) {
    this.name = name;
    this.department = department;
    this.workingHour = workingHour;
    if (workingHour.NaN || 0 > workingHour) {
      this.#pay = 'something wrong';
    }
    if (workingHour >= 200) {
      this.#pay = 10000;
    } else {
      this.#pay = 8000;
    }
  }

  checkWorkingHour(val) {
    if (val.NaN || 0 > val) {
      this.#pay = 'something wrong';
    }
    if (val >= 200) {
      this.#pay = 10000;
    } else {
      this.#pay = 8000;
    }
  }

  get monthlyPay() {
    if (this.#pay.NaN) {
      console.log('You need to setting workingHour');
    } else {
      //   this.#pay * this.workingHour;
      console.log(this.#pay * this.workingHour);
    }
  }

  set test(val) {
    this.workingHour = val;
    this.checkWorkingHour(val);
  }
}

const fullTimeWorker = new Employee('mr', 'something', 200);

fullTimeWorker.monthlyPay;
fullTimeWorker.test = '3';

fullTimeWorker.monthlyPay;
