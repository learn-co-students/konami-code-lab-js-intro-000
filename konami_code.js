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

function enterCode(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("KONAMI CODE ENTERED!");
      index = 0;
      }
  }
    else {
    index = 0;
    }
}

function init() {
document.body.addEventListener("keydown", enterCode)
}
