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

var pressed = [];


function init() {
  document.body.addEventListener("keydown", (event) => {
    //console.log(event.key);
    pressed.push(event.key);
    console.log(pressed.join(''));

    var codeString = codes.join('')
    console.log(codeString);

    if (pressed.join('').includes(codeString)) {
      console.log(pressed.join(''))
      alert("Hurray");
      pressed = []
    }
  })
}
