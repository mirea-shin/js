const text = 'hello';

const func = () => console.log(text);

func();

const outer = () => {
  const x = 0;
  function inner() {
    console.log(`inside inner :${x}`);
  }
  return inner;
};

const result = outer();
result();
