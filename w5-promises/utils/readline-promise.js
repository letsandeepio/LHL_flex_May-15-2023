const readline = require("readline");

const createInterface = (opts) => {
  const rl = readline.createInterface(opts);

  const question = (prompt) => {
    return new Promise((resolve, reject) => {
      // code to reject a promise after 20 seconds
      const timeout = setTimeout(reject, 5000);
      rl.question(prompt, (input) => {
        clearTimeout(timeout);
        resolve(input);
      });
    });
  };

  const close = () => {
    rl.close();
  };

  return {
    question,
    close,
  };
};

module.exports = {
  createInterface,
};
