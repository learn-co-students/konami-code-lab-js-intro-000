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

var iPos = 0;

function funcHandleKeyDown(event) {
  if (event.key === codes[iPos]) {
    if (iPos === codes.length-1) {
      alert('Congratulations!');
      iPos = 0;
    }
    else {
      iPos++;
    }
  }
  else {
    iPos = 0;
  }
}

function init() {
  // your code here
  document.body.addEventListener('keydown', funcHandleKeyDown);
}