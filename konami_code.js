const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0;
  document.body.addEventListener('keydown', function (e) {
    const key = parseInt(e.which || e.detail);
    if(code[index] === key) {
      index++;
      if(index === code.length) {
        index = 0;
        alert('Konami code entered');
      }
    } else {
      index = 0;
    }
  })
}
