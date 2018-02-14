const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;


function init() {

  document.body.addEventListener('keydown', function(event) {

  var keyPressed = parseInt(event.which || event.detail);

  if(keyPressed === code[index]) {
    index++;

    if(index === 10) {
      alert('Congratulations!');
      index = 0;
    }
  } else {
    index = 0;
  }

});

} // end of init
