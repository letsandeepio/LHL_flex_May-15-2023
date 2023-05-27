const numbers = [1, 2, 3, 4, 5];
const numbersOdd = [1, 3, 7, 9];

// Function Declarations
function sayHi() {
  console.log("Hi!");
}

// Function Expressions
// arrow functions modifies your 'this' context
const sayHi = () => {
  console.log("Hi!");
};

// Higher Order Function
const forEach = (array, cb) => {
  for (const item of array) {
    cb(item);
  }
};

// const multiplyBy2 = (number) => {
//   console.log(number * 2);
// };

// Inline function declaration

// forEach(numbers, console.log);
forEach(numbers, (number) => {
  console.log(number * 2);
});

// Array Higher Order Function
// filter
// map
// reduce
// numbers.forEach(multiplyBy2);
