const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0;

  document.body.addEventListener('keydown', function(event) {
  	var key = parseInt(event.which || event.keyCode || event.charCode || event.detail, 10 );

 	if (code[index] === key) {

 		index++;

 		if (index === code.length-1) {
 			alert('hurray!');
 			index = 0
 		}

 	} else {
 		index = 0;
 	}
  });
}
