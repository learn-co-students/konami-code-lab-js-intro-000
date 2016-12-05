const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0;
  document.addEventListener('keydown', function (e) {
    let keyPressed = parseInt(e.which || e.detail)
    if(keyPressed === code[index]){
      index++

      if(index === code.length - 1) {
        alert("You now have infinite lives!!!")
      }
    } else {
      index = 0
    }
  });
}

init()
