function runInDelay(callback, seconds) {
  if (seconds < 0 || seconds == null) {
    throw new Error('전달한 초를 확인하시오');
  }
  const ms = seconds * 1000;
  setTimeout(() => {
    callback(seconds);
  }, ms);
}

const action = (seconds) => {
  console.log(`${seconds}초 후에 실행됩니당ㅎ`);
};

try {
  runInDelay(action, 3);
} catch (err) {
  console.error(err);
}

console.log('done!');
