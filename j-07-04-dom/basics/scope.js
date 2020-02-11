// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global Scope (varOne)
// Local Scope (varTwo)
// Local Scope (varFour)
// Local Scope (varThree)

const varOne = 'varOne';

if (true) {
  console.log(varOne);
  const varTwo = 'varTwo';
  console.log(varTwo);

  if (true) {
    const varFour = 'varFour';
  }
}

if (true) {
  const varThree = 'varThree';
}

console.log(varTwo);
