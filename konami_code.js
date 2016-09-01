const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  document.addEventListener('keydown', onKeyDownHandler())
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("YOU DID IT!");
        index = 0;
      }
    }
}

/* The below passed the test, but I don't think it should have with the code.length -1
function init() {
  document.addEventListener("keydown", function(e){
  const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      alert(e.detail);
      if (index === code.length - 1) {
        alert("YOU DID IT!");
        index = 0;
      }
    }
  })
}
*/

init();
