const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var user = 0
function init() {
document.body.addEventListener('keydown', onKeyDownHandler, false)
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === code[user]) {
    user++

    if (user === code.length - 1) {
      alert("YOU DID IT!")
      user = 0
    }
  } else {
    user = 0
  }
}
}
