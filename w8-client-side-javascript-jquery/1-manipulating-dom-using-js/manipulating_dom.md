# Notes on Manipulating the DOM

- The DOM can be manipulating the DOM with JavaScript

### document methods to find DOM elements

```js
document.getElementById;
document.getElementsByTagName;
document.getElementsByName;
document.querySelector;
document.querySelectorAll;
document.getElementsByClassName;
```

- Return either the first element or a collection of elements
- Selector can be HTML element, class or pseudo-class, id, or attribute

_Examples_

```js
// returns the specific div element with the id 'container'
document.getElementById("container");

// returns a list of elements that have the class 'fields'
document.getElementsByClassName("fields");

// returns a list of elements that have the name attribute with a value of 'add'
document.getElementsByName("add");

// returns a list of the elements that have the tag 'button'
document.getElementsByTagName("button");
```

### Creating an Element

- createElement and appendChild:

```js
document.createElement("element");
parentElement.appendChild(childElement);
```

### Update Existing Content

- textContent - Text in the HTML
- innerText - text as it appears visually ( not fully supported by all browser)
- innerHTML - Text rendered as HTML

```js
const parentElement = document.querySelector('tbody');
const newElement = document.createElement('td');
const newElement.setAttribute('colspan','7');
const newElement.textContent = 'Weekly Average: 25';
const parentElement.appendChild(newElement);
```
