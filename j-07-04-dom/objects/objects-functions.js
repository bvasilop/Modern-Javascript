const myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

const otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723,
};

const getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

const bookSummary = getSummary(myBook);
const otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge area
// Create function - take fahrenheit in - return object with all three

const convertFahrenheit = function(fahrenheit) {
  return {
    fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9),
  };
};

const temps = convertFahrenheit(74);
console.log(temps);
