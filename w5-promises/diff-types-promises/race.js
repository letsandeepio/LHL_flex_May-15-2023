// Important: race will resolve the first resolved promise value

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "one");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "two");
});

Promise.race([p1, p2]).then((value) => {
  console.log(value); // 'two'
});
