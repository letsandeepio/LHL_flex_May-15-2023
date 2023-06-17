# Agenda

> "I promise I've a JavaScript joke. I'll tell you if you callback."

Today we will learn about Promises and have 3 hands-on demos

[x] Quick recap of Callbacks

[x] Demo #1: SPOS\* using Callback Hell/Callback Waterfall

[x] What are promises, what problems they solve?

[x] Error handling Promises Vs Callbacks

[x] Demo #2: Let's refactor our SPOS using promises

[x] Quick overview of wow to run async code in Parallel? (Promise.all, promise.allSettled, Promise.race, promise.any)

[x] Demo #3: Small Information Retrieval System (SIRS)

They key learning outcomes of this lecture are?

1. What are promises and how they're better than callbacks?
2. Three States of promises
3. How do you handle promises using `.then`, `.catch` and `.finally`
4. How do you run async promises in paralellel

# Promises - Quick Introduction

A promise is an object that may produce a single value some time in the future. Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked.

A Promise can be in one of these states:

a. pending: initial state, neither fulfilled nor rejected.

b. fulfilled: meaning that the operation was completed successfully.

c. rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value or rejected with a reason (error).

# Promises - Deep Dive

A promise is a special type of object in JavaScript that represents something that might happen in the future. When you create a promise, you're essentially making a bet with the computer that something will happen. If the thing you bet on happens, your promise will be fulfilled and you'll get what you wanted. But if the thing you bet on doesn't happen, your promise will be rejected and you'll get an error instead.

Promises are a way of making sure that your code doesn't get stuck waiting for something to happen. Instead of making your code wait, you can just tell the computer to keep doing other things while it's waiting for your promise to be fulfilled or rejected. This makes your code run faster and more smoothly.

For example, let's say you're making a game and you want to show a picture of a dog on the screen. You can use a promise to make sure that the picture of the dog is loaded into the computer's memory before you try to show it on the screen. That way, you won't have to wait for the picture to load before you can play the game.

In summary, promises are a way of making sure that your code doesn't get stuck waiting for something to happen, and they make it easier to write code that runs smoothly and efficiently.

# Benefits of Promises

- Promises make it easier to write asynchronous code that is readable and easy to understand.
- They allow you to chain asynchronous operations, so you can write code that is easier to reason about.
- They provide a built-in mechanism for error handling, so you can write cleaner and more robust code.
- They make it easier to write asynchronous code that is composable, meaning that you can easily combine multiple asynchronous operations together.
- They are easy to test, because you can use tools like async/await to write synchronous-looking code that is actually asynchronous.

# Creating promises in Javascript

To create a promise, you can use the Promise constructor, which takes a function with two arguments: resolve and reject. The resolve function is used to fulfill the promise, while the reject function is used to reject it. Here's an example that demonstrates the creation of a simple promise and using resolve callback to resolve the promise:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result);
});
```

# Different ways of handling promises

`Promise.all` is a method that takes an iterable of promises as an input and returns a single promise that resolves when all of the input promises have resolved. The returned promise resolves with an array of the values from the input promises, in the same order as the input promises. If any of the input promises reject, the returned promise immediately rejects with the value of the first rejected promise.

Here's an example of using Promise.all:

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 1);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, 2);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 3);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [1, 2, 3]
});
```

`Promise.allSettled` is similar to Promise.all, but it returns a promise that always resolves, regardless of whether any of the input promises reject. The returned promise resolves with an array of objects, each of which describes the outcome of one of the input promises. Each object has two properties: status, which is either "fulfilled" or "rejected", and value, which is either the resolved value or the rejected reason.

Here's an example of using Promise.allSettled:

```javascript
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
  /*
  [
    { status: 'fulfilled', value: 1 },
    { status: 'rejected', reason: Error: 'error' },
    { status: 'fulfilled', value: 3 }
  ]
  */
});
```

`Promise.race `is a method that takes an iterable of promises as an input and returns a promise that resolves or rejects as soon as one of the input promises resolves or rejects, with the value or reason from that promise.

Here's an example of using Promise.race:

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then((value) => {
  console.log(value); // 'two'
});
```

`Promise.any` is a method that takes an iterable of promises as an input and returns a promise that resolves when the first input promise resolves, with the value of that promise. If all of the input promises reject, the returned promise rejects with an AggregateError containing the rejection reasons of the input promises.

Here's an example of using Promise.any:

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "one");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.any([p1, p2])
  .then((value) => {
    console.log(value); // 'two'
  })
  .catch((error) => {
    console.log(error);
  });
```

# My favorite resources:

Promises MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

SpaceX API - https://docs.spacexdata.com/

History of Promises in JavaScript: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

Nodejs docs: https://nodejs.org/docs/latest/api/
