General formula for attribute
element.setAttribute("attribute", "value");

To get `element` below methods could be used

1.  document.getElementById
2.  document.getElementsByClassName
3.  document.getElementsByTagName - HTML Collection
4.  document.querySelector
5.  document.querySelectorAll

document.querySelector & document.querySelectorAll - ??

1.  can do work of all the 3

    1. document.getElementById
    2. document.getElementsByClassName
    3. document.getElementsByTagName

2.  document.querySelector("css selector");
3.  Supports complex way of selecting elements
4.  Backward compatibility
5.  New feature is only introduced
6.  Inspired from JQuery

```js
document
  .getElementById("username")
  .setAttribute("placeholder", "Enter your name");
document
  .querySelector("#username")
  .setAttribute("placeholder", "Enter your name");
document.querySelectorAll("ul > li");
```

### Callback

1. When an event completes an action is taken
   1. Event completes -> Place reached | Action -> Calling mom
   2. Event completes -> Manager reached bank | Action -> PA is calling
   3. Event completes -> 4am | Action -> Reception is notifying
2. Time dependent

```js
[4, 5, 6].map((n) => n * 2); // Not a callback

setTimeout(function msg() {
  console.log("Hi");
}, 4 * 1000);

//  Event completes -> 4s | Action -> msg()

setInterval(function cool() {
  console.log("fun");
}, 2 * 1000);

//  Event completes -> every 2s | Action -> cool()
```

1.? `msg` function is the callback function 2. \* `cool` function is the callback function

### Callback hell

1. Nested callback

### Hackthon

1. 24hrs
2. Portion - Covered till that day
3. Next friday - tentatively
4. Github & netlify
5. Monday & Tuesday - Mock interview
   1. 30mins
   2. Portion - Covered till that day
   3. Dress - professional
   4. Camera & Screen share
   5. Internet - Laptop & Phone (backup)
   6. Honest
   7. English
6. No classes - during hackathon & mock interview
