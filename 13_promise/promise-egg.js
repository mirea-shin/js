function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 1st func`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} - second`);
}

function getChicken() {
  //   return Promise.resolve(`🪴 => 🐓`);
  return Promise.reject(new Error('err를 던진다'));
}

getChicken()
  .catch((err) => {
    console.log(err);
    return `이거 닭`;
  })
  .then(fetchEgg)
  .then(fryEgg)
  //   .then((res) => fetchEgg(res))
  //   .then((res) => fryEgg(res))
  .then(console.log);
