function a() {
  throw new Error('Present for you!');
}

function b() {
  try {
    a();
  } catch (err) {
    console.log(err);
    throw err;

    console.log('AHHH!');
  }
}

function c() {
  b();
}

try {
  c();
} catch (e) {
  console.log(e);
  console.log('Catched!');
}

console.log('BYE!');
