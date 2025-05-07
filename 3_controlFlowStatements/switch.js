let day = 6;
let dayName;

// Why use switch Statements?
// Much simple when there are many cases.

switch (day) {
  case 0:
    dayName = 'Sunday';
    break;
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  default:
    dayName = 'Not a Day..';
}

console.log(dayName);
