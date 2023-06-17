// Important: any will resolve as long as one promise is resolving

const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "one");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "two");
});

Promise.any([p1, p2])
  .then((value) => {
    console.log(value); // 'two'
  })
  .catch((error) => {
    console.log(error);
  });
