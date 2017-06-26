const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var i = 0
  var handler = function onKeyDownHandler(e)
  {
    const key = parseInt(e.detail || e.which)
    if (key === code[i]) i++;
    else i = 0;

    if (i === code.length)
    {
      alert ("good job.")
      i = 0;
    }
  }
  document.body.addEventListener('keydown', handler)
}
