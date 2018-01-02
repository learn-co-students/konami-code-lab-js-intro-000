const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
function konamiCodeHandler(e) {
  const key = parseInt(e.detail || e.which);
  if (key === code[index]) {
    index++;
    console.log(e.which)
    if (index === code.length) {
      alert("Cheats Enabled");
      index = 0;
    }
  } else {
    index = 0;
  }
}
function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')
  body.addEventListener('keydown', konamiCodeHandler);
}
init();
