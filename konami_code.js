const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
var index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  var body = document.querySelector('body');
  body.addEventListener('keydown', function(e){

  console.log(e.which); //show key

  const key = parseInt(e.detail || e.which);
  if (key === code[index]){ //compare key to code[index], first key===code[0]...
    index++;

      if (index === code.length){ //10 === 10
        alert("Wohooo!!!");
        index = 0;  //restart
      }
  }
  else {
    alert("WRONG");
    index = 0;  //restart
  }
});
}
