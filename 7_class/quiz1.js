class Counter {
  constructor(count) {
    if (count < 0) {
      this.count = 0;
    } else {
      this.count = count;
    }
  }
  addCount() {
    this.count++;
    console.log(this.count);
  }
}

const count = new Counter(1);

count.addCount();
count.addCount();
console.log(count);

const negativeCount = new Counter(-1);

negativeCount.addCount();
negativeCount.addCount();
console.log(negativeCount);
console.log(negativeCount.count);
