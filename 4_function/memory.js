function add(a, b) {
  return a + b;
}

// same memory address!
const sum = add;

console.log(sum(1, 2));
