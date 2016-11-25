const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;
const zone = document.body;

/*debugger listener to track key press
zone.addEventListener('keydown', function(event) {
  const key = parseInt(event.detail||event.which);
  console.log(key);
})*/

function init() {

zone.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.which);

  if(key === code[index]){
    index++;

    if(index === code.length){
      alert("YOU DID IT!");
      index = 0;
    }
  }else{
    index = 0;
  }
  console.log(index);
})

}
