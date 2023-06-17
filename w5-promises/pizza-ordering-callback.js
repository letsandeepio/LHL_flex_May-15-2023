// We want to build a commandline nodejs app that asks user for pizza preferences and then confirms the order back to the user

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?", (username) => {
  rl.question("What kind of pizza  crust you like?", (pizzaCrust) => {
    // Error handling...

    // Notify your chef/cook  //Notify the waiter

    rl.question("What kind of pizza toppings you like?", (pizzaToppings) => {
      // Error handling...
      rl.question("What kind of pizza sauce you like?", (pizzaSauce) => {
        rl.question("What kind of pizza protein you like?", (pizzaProtien) => {
          console.log(
            `Hi ${username} you ordered a pizz with ${pizzaCrust} crust, toppings: ${pizzaToppings}, with sauce ${pizzaSauce}, with protein ${pizzaProtien}`
          );

          rl.close();
        });
      });
    });
  });
});
