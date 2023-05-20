/*
 - Get the arguments from the commandline [done]
    - We need at least 2 arguments. [done] 
    - If any argument is not a number, output an error message [done]
 
 - goes through each and prints out the sum of them [done]
  - argument is not a whole number, skip it. [done];
  - support negative numbers [done];

*/

const arguments = process.argv.slice(2);

if (arguments.length < 2) {
  console.log("Please provide atleast 2 arguments");

  process.exit();
}

for (const argument of arguments) {
  if (isNaN(argument)) {
    console.log("Provide valid values");
    process.exit();
  }
}

// function expression
// function hoisting!
const sum = (array) => {
  let totalSum = 0;

  for (const argument of array) {
    const converted = Number(argument);
    if (Number.isInteger(converted)) {
      totalSum += converted;
    }
  }
  return totalSum;
};

const output = sum(arguments);

console.log(output);
