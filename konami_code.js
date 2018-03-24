const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let count = 0;

function getKey(e) {
  const key = parseInt(e.which || e.detail);
  if (key === code[count]) {
    count += 1;

    if (count === code.length) {
      alert('yay');
      count = 0;
    }
  } else {
    count = 0;
  }
}

function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', getKey);
}

init();
