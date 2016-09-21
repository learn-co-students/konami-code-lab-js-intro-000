const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var konamiIndex = 0;

function init() {
  // your code here
  document.body.addEventListener("keydown", checkKonamiProgress);
}

function checkKonamiProgress(event) {
  var key = parseInt(event.detail || event.which);
  if (key === code[konamiIndex]) advanceCode();
  else resetCode();
}

function advanceCode() {
  if (konamiIndex >= code.length - 1) {
    alert("You did it!");
    resetCode();
  } else {
    konamiIndex++;
  }
}

function resetCode() {
  konamiIndex = 0;
}
