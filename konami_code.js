//const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const code = [65, 76, 69, 88]
var index = 0;
function init(e) {
  const key = parseInt(e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Congradulations, login successful!");

      index = 0;
    }
  } else {
    index = 0;
  }
  debugger
}


document.body.addEventListener('keydown', init)
