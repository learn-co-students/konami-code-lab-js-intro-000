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
// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function init(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Congratulatory Message!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

document.querySelectorAll('html')[0].addEventListener('keydown', init)
