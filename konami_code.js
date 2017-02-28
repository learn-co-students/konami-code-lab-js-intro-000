const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var next = 0;

function kcode(e) {
  if (parseInt(e.detail || e.which) === code[next]) {
    next++;
  }
  else {
    next = 0;
  }

  if (next === code.length) {
    alert("Yep.");
  }
}

function init() {
  document.body.addEventListener('keydown', kcode);
}
