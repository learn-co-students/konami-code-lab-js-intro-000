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
  index = 0;
  document.body.addEventListener('keydown', wert);
}

function wert(e) {
  const key = e.key;
  if(key == codes[index]) {
    index++;
    if(index === codes.length) {
      window.alert("infinte lives");
      index = 0;
    }
  } else {
    index = 0;
  }
}
