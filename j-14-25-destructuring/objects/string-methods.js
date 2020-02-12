const name = '  Andrew Mead ';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
const password = 'abc123asdf098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

// Challenge area

// isValidPassword
const isValidPassword = function(password) {
  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('asdfpasdfpoijpassword'));
