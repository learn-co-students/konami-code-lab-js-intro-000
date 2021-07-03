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