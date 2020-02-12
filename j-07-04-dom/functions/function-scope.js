// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
// Local scope (fahrenheit, celsius)
// Local scope (isFreezing)

const convertFahrenheitToCelsius = function(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius <= 0) {
    const isFreezing = true;
  }

  return celsius;
};

const tempOne = convertFahrenheitToCelsius(32);
const tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
