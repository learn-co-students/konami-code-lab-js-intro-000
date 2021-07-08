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
  var index = 0;

  function konamiCodeCheckHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index ++;
      if (index === code.length - 1) {
        alert("You have discovered the secret message!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  document.body.addEventListener('keydown', konamiCodeCheckHandler);
}

init();
