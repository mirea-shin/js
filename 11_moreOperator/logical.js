const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

if (obj1 || obj2) {
  console.log('Return boolean in conditional statement');
}

let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);

let item = { price: 1 };
const price = item && item.price;
console.log(price);

item = {};
const price1 = item && item.price;
console.log(price1);

// default setting

// default parameter
function print(msg = 'maple') {
  console.log(`Hola, ${msg}`);
}

print('hi');
print();
print(null);

function printWithOR(msg) {
  console.log(`Hola!, ${msg || '단풍'}`);
}

printWithOR('hi');
printWithOR();
printWithOR(0);
printWithOR(null);
