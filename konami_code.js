const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;
  function onKeyDownHandler(e) {
    var key_int = parseInt(e.which||e.detail);
    if (key_int === code[index]) {
      index++;
      if (index === code.length) {
        window.alert('CODE ACCEPTED!');
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  document.body.addEventListener('keydown', onKeyDownHandler);
}
