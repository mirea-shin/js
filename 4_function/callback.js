const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, action) {
  if (a < -2 || b < -2) {
    return;
  }

  let result = action(a, b);

  console.log(result);
  return result;
}

calculator(-1, -1, add);
calculator(-1, -1, multiply);

setTimeout(() => {
  console.log('3초뒤!');
}, 3000);
