# M01W01 - The Dev Workflow

### Lecture Overview

Hello Labber's, thanks for coming to the first ever lecture. We did a quick overview of the bootcamp curriculum, how lectures works and how to get maximum out of them. We also learnt basics of git and version control. We learnt problem solving using incremental development by way of solving a coding challenge.

We did a demo to practice our dev workflow. How to solve a problem step by step:

- Thinking about the problem in general concepts (before even writing code)
- Breaking down the problem into smaller chunks
- Writing little bit of code & testing our assumptions
- Making use of our BFFs (best friend forever)
  - Google
  - Stack overflow
  - MDN Docs
- Building on step by step solutions
- Using console.log to our advantage
- Committing your work very often

### Curriculum Overview

- These [slides](https://docs.google.com/presentation/d/1m3R_aN4S5YoCBmXRbjaZQGatygWyZXYLcN-fkcP_HWA) contain a high-level overview of the Lighthouse Labs web bootcamp curriculum

### Problem Solving

> Without requirements or design, programming is the art of adding bugs to an empty text file.
>
> -- _Louis Srygley_

- We have a variety of different approaches available to us as problem solvers
- You will be exposed to these approaches over the course of the bootcamp

### Tips

- Work incrementally, writing and then executing small amounts of code

  - Break the problem down into a series of smaller (and easier to understand) steps.
  - Small segments of code allow us to more easily see where errors/bugs are in our code.

- Use proper indentation

  - Indentation helps us to see how our code is nested (eg. which lines of code are inside the function or if statement).

  ```javascript
  // no indentation
  const printArray = function (arr) {
    arr.forEach(function (element) {
      console.log(element);
    });
  };
  console.log("All done!");

  // proper indentation
  const printArray = function (arr) {
    arr.forEach(function (element) {
      console.log(element);
    });
  };
  console.log("All done!");
  ```

- Try to avoid copy/pasting code; type it out for yourself and try to understand what you are typing
- Errors are your friend
  - Try to decipher the error message before you Google it.
  - Errors help to show us where we made a mistake and being able to read them is a valuable skill.

### Asking For Help

- Remember the 15 minute rule
- Typical research path:
  - **Google** the error message/what you want to accomplish; make sure to add the programming language (eg. JavaScript) to your search term (eg. "remove elements from array javascript")
  - **StackOverflow** is useful for seeing multiple possible solutions to a problem (DO NOT copy and paste)
  - **Mozilla Developer Network (MDN)**... read the documentation

### Git Workflow

- To create a git repository in a directory, run `git init`
- `git status` will show you which files have been changed in the working directory
- Use `git diff` to see what specifically was changed inside each file
- To add files to the staging area, use `git add <filename>` or `git add .` to add all changes
- Commit your changes using `git commit -m 'a meaningful commit message'`
- Finally, push your code to github using `git push origin master` or `git push origin main`

**NOTE:** This workflow is great for solo coding projects. When you work as part of a team (such as during mid-terms and finals), you will use a more advanced workflow.

## Code golfing:

I talked about Code Golfing a bit in the lecture.
It generally means trying to do a lot with your code in fewer lines as possible.
It is the tendency to write the most concise solution ever possible.
We as begginers should try to avoid

```javascript
const array = [1, 2, 3, 4, 5, 6, 7];

const addNumbers = (pineAppleArray) =>
  pineAppleArray.reduce(
    (acc, currValue) =>
      Number.isInteger(Number(currValue))
        ? Number(currValue) + Number(acc)
        : acc,
    0
  );

const fancyTotalSum = addNumbers(arguments);
```

### Useful Links

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [Node Documentation](https://nodejs.org/en/docs/)
- [Python Tutor](http://pythontutor.com/javascript.html#mode=edit)

Notes adapted from LHL Previous lectures
