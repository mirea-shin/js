const user = { name: 'mirea' };

const displayObj = (obj) => {
  // dont do that!
  obj.name = 'hello';
};

displayObj(user);
console.log(user);
