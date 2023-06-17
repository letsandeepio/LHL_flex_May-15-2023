// different 3 promises

// you can imagine this as 3 api calls

// IMPORTANT: all will not resolbe if one of the promises gets rejected

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 1);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 2);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 3);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [1, 2, 3]
});
