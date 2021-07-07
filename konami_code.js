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

var keystrokes = []

function init() {
  document.body.addEventListener('keydown', function(o){
    for (let i = 0; i < code.length; i++) {
      keystrokes.push(parseInt(o.detail || o.which))}
    if (keystrokes == code) {
      alert("That's the code! Congrats")}
    })
}
