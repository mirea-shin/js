let item = { price: 1 };
let item2;

// const price1 = item1.price;
const price2 = item2?.price;

// console.log(price1);
console.log(price2);

let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  //   const owner = obj && obj.owner && obj.owner.name;
  const owner = obj?.owner?.name;
  console.log(owner);
}

printName(obj);
