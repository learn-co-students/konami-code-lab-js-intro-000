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

var index = 0;

function init() {
  // Attaching an keydown event listener to document.body
  document.body.addEventListener("keydown", onKeyDownHandler);
}

function onKeyDownHandler(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
