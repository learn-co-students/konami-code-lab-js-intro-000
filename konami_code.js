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

// register keydownHandler with document.body
//alert('init')
document.body.addEventListener('keydown', keydownHandler);



}

function keydownHandler(event) {
  //alert("code: " + event.key);

  const key = event.key;
  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Congratulations!");

      index = 0;
      }
  } else {
    index = 0;
  }
}
