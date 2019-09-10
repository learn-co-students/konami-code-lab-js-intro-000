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


function init(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("You did it successfully!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

document.querySelectorAll('body')[0].addEventListener('keydown', init)
