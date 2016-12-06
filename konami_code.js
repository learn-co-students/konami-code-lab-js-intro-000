const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
document.body.addEventListener('keydown', function(e){
var i = 0
var key = parseInt(e.which || e.detail)

if(key === code[i]){
  i++
  if(i === code.length  - 9 ){
    alert("CONGRATS SAM!")
    i=0
  }
}
else{
  e.preventDefault()
}
})
}
