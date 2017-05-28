const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var input_index = 0;
function init() {
  const input = document.body;
 
  input.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
    if (key == code[input_index]){
      input_index += 1; 
      if (input_index === code.length){
        alert("You did it!");
      }
    } else {
      input_index = 0;
    }
  });

}
