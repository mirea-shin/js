// JSON: JavaScript Object Notation

const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat!');
  },
};

const json = JSON.stringify(ellie);
console.log(json);
console.log(ellie);

const obj = JSON.parse(json);
console.log(obj);
