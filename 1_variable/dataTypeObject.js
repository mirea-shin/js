// Copy by Reference
const apple = {
  name: 'apple',
  color: 'red',
};

// apple has reference ([ex] 0x1233)
console.log(apple);

// banana has refernce too.
const banana = apple;

console.log('🍌');
console.log(banana);

// change object value;
apple.name = 'bananaApple';

console.log(banana);
console.log(apple);
