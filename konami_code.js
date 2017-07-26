const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var i = 0;
function init() {
// I can put i = 0 inside the init function too.
  document.body.addEventListener('keydown', function(e) {
    if (parseInt(e.detail || e.which) === code[i]) {
      i++;
      if (i === code.length) {
        alert("Boooooom");
        i = 0;
      }
    }
    else {
        i = 0;
      }
  });
  return
}
