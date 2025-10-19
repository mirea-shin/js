// ??
// null 과 undefined

let num = 0;
let isNull = null;
let isUndfined = null;
let isBlank = '';

console.log(num || 1);
console.log(num ?? 1);

console.log(isNull ?? 1);
console.log(isUndfined ?? 1);

console.log(isBlank ?? 1);
console.log(isBlank || 1);
