const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0
  document.body.addEventListener('keydown', function(e){
    const input = parseInt(e.which || e.detail);

    if (code[i] === input) {
      i++;
      if (i === code.length) {
        alert ("Hurray!");

        index = 0;
      }
    }else {
      index = 0;
    }
  })
}
