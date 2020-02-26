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
  let pressed = []
  // your code here
  document.body.addEventListener("keydown", (event) => {
    pressed.push(event.key)
    pressed.splice(-codes.length - 1,pressed.length-codes.length)
    console.log(pressed);
    if (pressed.toString() === codes.toString()) {
      alert("Konami Code!")
    }
  })
}
