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
  document.body.addEventListener("keydown", (event) => {

  var code = event.key;
  console.log(code);

  if(code == codes[index]) {
    index = index + 1;
    console.log(index);

    if(index == codes.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }

  });
}
