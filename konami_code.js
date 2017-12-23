const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var ind = 0;

  document.body.addEventListener('keydown', function(evnt) {
    const key = parseInt(evnt.detail || evnt.which);
    if (key === code[ind]) {
      ind++;

      if (ind === code.length) {
        alert('You did it!');
        ind = 0;
      }
    } else {
        ind = 0;
      }
  });
}
