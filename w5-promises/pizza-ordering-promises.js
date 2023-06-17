//
//  What are promises?
//  Promises special type of object in Javascript which signifies a value that
//  it will resolve to in the future
//

// Three states:

// 1. Pending
// 2. Fullfilled/Resolved
// 3. Rejected // fail to keep the promise

// .then keyword

// .catch keyword

// .finally

const readlinePromises = require("./utils/readline-promise");

const rlp = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const new_order = {};

rlp
  .question("What is your name?")
  .then((username) => {
    new_order.username = username; // => Sandeep
    return rlp.question("What kind of pizza  crust you like?");
  })
  .then((pizzaCrust) => {
    new_order.pizzaCrust = pizzaCrust;
    return rlp.question("What kind of pizza toppings you like?");
  })
  .then((pizzaToppings) => {
    new_order.pizzaToppings = pizzaToppings;
    return rlp.question("What kind of pizza sauce you like?");
  })
  .then((pizzasauce) => {
    new_order.pizzaSauce = pizzasauce;
    return rlp.question("What kind of pizza protien you like?");
  })
  .then((pizzaProtien) => {
    new_order.pizzaProtien = pizzaProtien;

    console.log(
      `Hi ${new_order.username} you ordered a pizz with ${new_order.pizzaCrust} crust, toppings: ${new_order.pizzaToppings}, with sauce ${new_order.pizzaSauce}, with protein ${new_order.pizzaProtien}`
    );
  })
  .catch((err) => {
    console.log("You took too long to respond!");
  })
  .finally(() => {
    rlp.close();
  });
