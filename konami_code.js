const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  const body = document.querySelector('body')

  var codePosition = 0

  const lastPos = code.length - 1

  function konamiCheck(e)
  {
    let keyPressed = parseInt(e.detail || e.which)
    if (keyPressed === code[codePosition]) {
      if (codePosition === lastPos) {
        alert('happy day');
        codePosition = 0
      }
      else {
        codePosition ++
      }
    }
    else {
      codePosition = 0
    }
  }

  body.addEventListener ('keydown', konamiCheck)
}

init()
