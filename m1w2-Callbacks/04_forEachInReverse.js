const numbers = [1, 2, 3, 4, 5];

const forEach = (array, cb) => {
  for (const item of array) {
    cb(item);
  }
};

// we have two services shipping and ordering

// end of the array
// => array.length - 1

// Higher Order Function

const forEachInReverse = (array, cb, service) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const item = array[i];
    cb(item, i, service);
  }
};

// callback

const printItemAndIndex = (item, index) => {
  console.log(`The item ${item} is at index ${index}`);
};

const printItemAndIndexService = (item, index, service) => {
  console.log(
    `The item ${item} is at index ${index}. It was called by ${service}`
  );
};

forEachInReverse(numbers, printItemAndIndexService, "Ordering");

forEachInReverse(numbers, printItemAndIndexService, "Shipping");

// forEachInReverse(numbers, console.log);
