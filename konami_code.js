const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index=0;

  document.body.addEventListener('keydown', function(e){
    var key=parseInt(e.detail || e.which)

    if(key===code[index]){
      index++

      if(index===code.length-1){

        index=0;
        alert('CONGRATULATIONS KONAMI NERD JS EXPERT FUCKER!');
      }
    }else{
      index=0;
    }
  })
};

init();
