// IMPORTANT: allSettled will resolve even if one of the promises gets rejected

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 1);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, new Error(error));
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 3);
});

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(results);
});
