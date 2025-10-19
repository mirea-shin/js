function readFile(path) {
  throw new Error('에러다');
}

function handleError() {
  try {
    readFile();
  } catch (err) {
    console.log(err);
  } finally {
    console.log('todo something...!');
  }
  console.log('실행됩니다');
}

handleError();
