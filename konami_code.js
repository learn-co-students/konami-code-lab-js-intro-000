const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
var e
function init() {
  document.addEventListener('keydown',function(e){key = parseInt (e.detail || e.which);
                   if (code[index]=== key){
                                          index++;
                       	                 if (index == code.length){
                                             alert("Hurray");
                                             index = 0;            }}
                       else              {index = 0;}})

  }
