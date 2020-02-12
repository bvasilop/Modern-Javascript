// Function - input (argument), code, output (return value)

const greetUser = function() {
  console.log('Welcome user!');
};

greetUser();
greetUser();
greetUser();

const square = function(num) {
  const result = num * num;
  return result;
};

const value = square(3);
const otherValue = square(10);

console.log(value);
console.log(otherValue);

// Challenge Area

const convertFahrenheitToCelsius = function(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

const tempOne = convertFahrenheitToCelsius(32);
const tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
