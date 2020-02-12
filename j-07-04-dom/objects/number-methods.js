const num = 103.941;

console.log(num.toFixed(2));

console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.ceil(num));

const min = 0;
const max = 1;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// Challenge area
// 1 - 5 - true if correct - false if not correct
const makeGuess = function(guess) {
  const min = 1;
  const max = 5;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return guess === randomNum;
};

console.log(makeGuess(1));
