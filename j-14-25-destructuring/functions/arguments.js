// Multiple arguments
const add = function(a, b, c) {
  return a + b + c;
};

const result = add(10, 1, 5);
console.log(result);

// Deafult arguments
const getScoreText = function(name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`;
};

const scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area
// A 25% tip on $40 would be $10
const getTip = function(total, tipPercent = 0.2) {
  const percent = tipPercent * 100;
  const tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tip}`;
};

const tip = getTip(60);
console.log(tip);
