const fs = require("fs");

// In context of Asynchronous Tasks => Anything that takes time to run

// Higher Order Functions
fs.readFile("./data1.txt", "utf-8", printContents);

// Callbacks

const printContents = function (error, data) {
  console.log("Content of the file:", data);
};
