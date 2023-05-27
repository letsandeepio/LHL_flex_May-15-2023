// Global Scope
const num1 = 1;

// Local scope
const sumNumbers = () => {
  const num2 = 2;
  const sum1 = () => {
    const num3 = 3;
    const sum2 = () => {
      const num4 = 4;
      const sum3 = () => {
        console.log(num1 + num2 + num3 + num4);
      };
    };
  };
};

const sumTotal = sumNumbers();

console.log(num2);
