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

let index = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', checkCodes)
}

function checkCodes(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++
  } else {
    index = 0;
  }

  if (index === codes.length) {
    alert('POWERUP');

    index = 0;
  }
}
