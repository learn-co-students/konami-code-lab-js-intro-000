const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  document.body.addEventListener("keydown", function(e) {
    var key = parseInt(e.which || e.detail);
    for (var i = 0; i < code.length; i++) {
      if (key === code[i] ) {
        index++
          alert("You DID IT!");
      }
      else {
        index = 0;
      }
    }
  })
}

init();
