
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(){

  var index = 0;

  document.addEventListener('keydown'||'click', function(e){
    const key = parseInt(e.detail ||e.which);
    var requiredKey = code[index];
    if (key == requiredKey){
      index = index +1;
      if (index == code.length)
      {
          alert("You did it");
          index =0;}

    }else{
      index =0;
    }

  });
};
