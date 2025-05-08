function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}

print(12);
print(-12);

const parsedNum = print(-5);
console.log(parsedNum);
