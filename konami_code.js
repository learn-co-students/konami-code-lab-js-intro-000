const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var i = 0;
  document.body.addEventListener('keydown', function(e){
    if (code[i] === parseInt(e.detail || e.which)){
      i++;
        if (i === code.length - 1) {
          alert ("You did it!");
          i = 0;
        }
    } else {
      i = 0;
    }
  })
}
