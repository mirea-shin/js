let integer = 123;
let negative = -123;
let double = 1.23;

console.log(integer, negative, double);

let binary = 0b1111011;
let octal = 0o173;
let hex = 0x7b;

console.log(binary, octal, hex);

console.log(0 / 123);
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN

let bigInt = 232312312312312323n;

console.log(bigInt);
