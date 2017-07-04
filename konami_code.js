const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var keystrokes = []

function init() {
  document.body.addEventListener('keydown', function(o){
    keystrokes.push(o.which)
    if (keystrokes == code) {
      alert("That's the code! Congrats")}
  })
}
