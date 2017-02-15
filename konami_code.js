const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var idx =0

function init() {
  // your code here


  document.body.addEventListener('keydown', function(e){

    const keys =  parseInt(e.detail || e.which)

  if (keys === code[idx]) {
    idx++
  if (idx === code.length){
    alert("Congrats!, you found the code son!")
    idx = 0
  }
 } else {
    idx = 0
  }
})
}
