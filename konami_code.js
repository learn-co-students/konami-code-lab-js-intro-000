var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var tenLastKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  // your code here
function init(){
//to create a rolling array of the last 10 keystroke values
//To compare the values at [i] of two arrays
  function compareArrays (array1, array2){
    var same = true;
    for(var i = 0; i < 10; i++){
      if (same === false){
        return false;
      }else if(array1[i] === array2[i]){
        same = true;
      }else{
        same = false;
      }
    }
    return true;
  }

  document.body.addEventListener('keydown', function(e){
    var key = parseInt(e.detail || e.which);
    tenLastKeys.push(key);
    tenLastKeys.shift();
    if (compareArrays(code, tenLastKeys) === true){
        alert("Congrats! You found the Easter Egg!");
    }
  })
}
