const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0;
  document.body.addEventListener('keydown', event => {
    var key = parseInt( event.which || event.detail );
    if (code[index] === key){
      index++;
      if (index === code.length){
        alert("You entered the code!");
        index = 0;
      }
    }
    else{
      index = 0;
    }
  })
}
