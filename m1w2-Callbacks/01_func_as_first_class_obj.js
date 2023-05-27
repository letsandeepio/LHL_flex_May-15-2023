// const greet = (name) => {
//   console.log(`Hello ${name}`);
// };

// greet("Sandeep");
// greet("David Beckham");

// Higher Order Function
const greet = (name, customGreetingCb) => {
  console.log(`Hello ${name}`);
  customGreetingCb();
};

// Callback
const sayGoodBye = () => {
  console.log("Goodbye!");
};

const sayBonjour = () => {
  console.log("Bonjour");
};

// Passing by reference

greet("Sandeep", sayGoodBye);
greet("Sandeep", sayBonjour);
