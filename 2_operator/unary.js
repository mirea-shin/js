// + , -, !

let a = 5;
a = -a; // -1*5

console.log(a);
console.log(-a);

let isTrue = true;
console.log(isTrue);
console.log(!isTrue);
console.log(!!isTrue);
// !!1 // true

// +
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1

console.log(+undefined); // NaN
console.log(+'text'); // NaN
