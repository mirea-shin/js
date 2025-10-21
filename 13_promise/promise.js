function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0 보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

const SECONDS = 0;

runInDelay(SECONDS)
  .then(() => console.log(`${SECONDS}초후 완료`))
  .catch(console.error)
  .finally(() => {
    console.log('끝!');
  });
