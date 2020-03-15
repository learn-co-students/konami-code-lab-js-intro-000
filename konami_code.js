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

  // Attaching an keydown event listener to document.body
  document.body.addEventListener("keydown", (event) => {
    for (let i = 0, l = codes.length; i < l; i++) {
      triggerKeyDown(codes[i]);
    };
  });
};

// Keys for A, B, and C keys.
const alphabet = ['a', 'b', 'c'];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function triggerKeyDown(e) {
  const key = e.key;

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
