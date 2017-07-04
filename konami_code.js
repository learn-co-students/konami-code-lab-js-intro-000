const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var keystrokes = []

function init() {
  document.body.addEventListener('keydown', function(o){
    for (let i = 0; i < code.length; i++) {
      keystrokes.push(parseInt(o.detail || o.which))}
    if (keystrokes == code) {
      alert("That's the code! Congrats")}
    })
}
