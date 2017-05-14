const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', keyDownHandler)
 var count = 0
  function keyDownHandler(e){
    var key = parseInt(e.detail || e.which)
	if (key == code[count]){
		count++
	}
	else {
		count =0;
	}
	//console.log(count)
	if (count== code.length){
		//console.log ("you are")
    alert("Congrats")
	}

  }
}
init()
