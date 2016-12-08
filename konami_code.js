const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var nextPosition = 0;

function init() {
  document.addEventListener('keydown', checkCode);
}

function checkCode(e) {
  const key = parseInt(e.which || e.detail);
  const nextKey = code[nextPosition];

  if (key === nextKey) {
    nextPosition += 1

    if (nextPosition == code.length) {
      alert("Winner!");
      resetCode();
    }

  } else {
    resetCode();
  }
}

function removeListener() {
  document.removeEventListener('keydown', checkCode);
}

function resetCode() {
  nextPosition = 0;
}

init()
