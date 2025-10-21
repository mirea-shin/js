function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// chaining
getBanana() //
  .then((banana) => {
    return getApple().then((apple) => [banana, apple]);
  })
  .then(console.log);

// Promise.all
Promise.all([getApple(), getBanana()]).then(console.log);

// Promise.race
Promise.race([getApple(), getBanana()]).then(console.log);

// Promise.settledAll
Promise.allSettled([getApple(), getBanana(), getOrange()]).then(console.log);
