// && || !  (!!)

// let num = 22;
let num = 22;
if (num >= 0 && num < 9) {
  console.log('Thumbs up!');
}

if (!(num >= 0 && num < 9)) {
  // if (num >= 0 && num < 9) {
  console.log('Thumbs down!');
}

console.log('&&');
console.log(true && true); // true
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log('||');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // flase
console.log(false || true); // true
