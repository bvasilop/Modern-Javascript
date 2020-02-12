const person = {
  age: 27,
};

person.age = 28;
// person = {}
// eslint-disable-next-line dot-notation
person['age'] = 30; // another way to write
console.log(person);
