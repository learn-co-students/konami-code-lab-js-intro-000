const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  function keyHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (code.indexOf(key) !== -1) {
      alert("YOU DID IT");
    } else {
      return e.preventDefault();
    }
  }
  document.body.addEventListener('keydown', keyHandler);
}

init();