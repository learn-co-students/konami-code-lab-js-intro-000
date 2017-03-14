const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index =  0

function init(e) {
document.body.addEventListener('keydown', function(e) {
const key = parseInt(e.detail || e.which)
for (index in code){
    if (key === code[index]) {
      index++
      alert("Congrat!")
    }
  }
})
}
