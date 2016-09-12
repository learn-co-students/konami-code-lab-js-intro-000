const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  var input = [];

  var $ = document.body;
  $.addEventListener('keydown', function(e) {
    input.push(e.which || e.detail);

    for (let i = 0; i < input.length; i++) {
      if (input[i] != code[i]) {
        input = [];
        break;
      }
      else if (input.length === code.length) {
        alert("You did it! 30 lives for you!!");
        break;
      }
    }
  });
}
