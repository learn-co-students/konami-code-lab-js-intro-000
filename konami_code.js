var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var arrEntered = []
var i = 0

function init() {
  // your code here
  document.body.addEventListener('keydown', keyDownHandler)
}

function keyDownHandler(e){
  const key = parseInt(e.detail || e.which)

  if(key === code[i]){
    arrEntered.push(key)
    i++
    if(i === code.length){
      alert("congrats!")
    }
  }
  else{
    arrEntered = []
    i = 0;
  }
}
