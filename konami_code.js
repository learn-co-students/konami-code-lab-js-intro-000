const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  //attach an event listener to document.body and check for 'keydown' events.
  //If the user enters this special code, pressing all ten of the keys in the correct order, alert() a congratulatory message.
  //However, if they press a key out of sequence or a key that isn't part of the Konami code, don't alert() anything and simply keep listening for all ten keydowns in the correct order.
  let counter = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    counter = (codes[counter] === key) ? ++counter : 0

    if (counter === codes.length) {
      window.alert("heck yeah, konami");
      counter = 0;
    }
  });
}
