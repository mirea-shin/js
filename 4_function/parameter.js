// default value of parameter is 'undefined'
// Default value

function sum(a = 1, b = 2) {
  console.log(arguments);
  console.log(arguments[0]);
  return a + b;
}

console.log(sum());
// console.log(sum(5, 5));

// Rest parameter

console.clear();
function add(a, b, ...numbers) {
  console.log(a, b);
  console.log(numbers);
  console.log(arguments);
}

add(1, 2, 3, 4, 5, 6);
