// for
// for(variable Statements; condition; increment||decrement) { }
// process
// 1. variable
// 2. check condition
// 3. if condition is true, execute function
// 4. change the variable value
// 5. repeat the process (Except 1) until condition is false

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    console.log(`hello ${i}`);
  }
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// Infinity Loop
// for(;;){}

// TypeError: Assignment to constant variable.
// for (const i = 0; i < 5; i++) {
//   for (const j = 0; j < 5; j++) {
//     console.log(i, j);
//   }
// }
