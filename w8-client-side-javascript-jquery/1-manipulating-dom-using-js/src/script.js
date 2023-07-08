// 1. Get reference to the form ✅
// 2. Add or Register an event listener ✅
// 3. Capture the value from the text box ✅
// 4.Create LI element ✅
// 5. Add it our page ✅

document
  .getElementById("new-todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const textBox = this.elements.todo;
    const textBoxValue = textBox.value;

    const newTodo = document.createElement("li");

    newTodo.innerText = textBoxValue;

    const todosContainer = document.querySelector("#todos");

    todosContainer.append(newTodo);

    console.log("you submitted the form");
  });
