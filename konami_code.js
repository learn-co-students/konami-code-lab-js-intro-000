const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  document.body.addEventListener('keydown', onKeyDownHandler)
}

function onKeyDownHandler(e) {
  //if (parseInt(e.which) === 38 || parseInt(e.detail) === 38) {
    alert("Congratulations! " + e.which)
  //}
}

init()
