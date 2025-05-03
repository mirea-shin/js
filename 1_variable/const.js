// 'let' CAN change value.
let a = 1;
a = 1.1;

// 'const' reassignable.
const b = 2;
// b = 2.2;

const user = {
  name: 'pineapple',
  color: 'black',
};

console.log(user);

user.color = 'green';

console.log(user);
