const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var nextPosition = 0;

function init() {
  document.addEventListener('keydown', checkCode);
}

function checkCode(e) {
  const keyWhich = e.which;
  const keyDetail = e.detail;
  const nextKey = code[nextPosition];

  if (keyWhich == nextKey || keyDetail == nextKey) {
    nextPosition += 1

    if (nextPosition == code.length) {
      removeListener();
      alert("Winner!");
    }

  } else {
    nextPosition = 0;
  }
}

function removeListener() {
  document.removeEventListener('keydown', checkCode);
}


init()
