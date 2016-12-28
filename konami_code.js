const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
function init() {
const input = document.body

input.addEventListener('keydown', function(e) {
   const key = parseInt(e.detail || e.which)

  if (key === code[index]) {
  	index++

	if (index === code.length){
		alert("done")
		index = 0
	}
  }
  	else {
  		index = 0
  	}
})

  // your code here
}
