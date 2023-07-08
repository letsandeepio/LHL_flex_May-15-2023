# Notes on Browser Events

The browser supports a lot of different events. We use this interface to listen for certain events that happen so we can react to them.

- click
- focus, blur
- keyup, keydown
- mouseup, mousedown, mouseover, mousemove
- scroll
- select

## Monitor Events

```javaScript
monitorEvents(document.body, "click");
unmonitorEvents(document.body);
```

## Add an Event Listener

JavaScript can listen to a particular event on a DOM element:

```javascript
document
  .querySelector("input[type=submit]")
  .addEventListener("click", function(event) {
    event.preventDefault();
    console.log("clicking ok");
  });
```

### PreventDefault

When we handle events sometimes we want to ensure that they are not handled any further. In the example today we had a button that was part of a form. We only want to handle the click event on the button, and don't want to submit the form.

We can cancel events. Using the `Event.preventDefault()` method we can tell the browser that we are happy to do all the necessary work when the event is triggered.

[MDN Event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

[MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)
