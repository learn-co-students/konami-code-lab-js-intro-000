const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var dupe = code.slice();

  //set event listener for keydown
  document.body.addEventListener('keydown',codeFunc);

  function codeFunc(event){
    walkCode(event);
  }

  function walkCode(event){
    var garbageparse = parseInt(event.which || event.detail);
    if(garbageparse===dupe[0]){
      dupe.shift();
      if(dupe.length===0){
        alert('AWESOME POWER UNLOCKED!!!');
        dupe = code.slice();
      }
    }
    else{
      dupe = code.slice();
    }
  }
}
