const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// arrup arrup arrdown arrdown  arrleft arrright arrleft arrright Bkey  Akey



function init() {

	var index = 0;
	var koncode = document.body
	// Write your JavaScript code inside the init() function
	function something(e) {
		const key = parseInt(e.detail || e.which);
		if ( key === code[index] ) {
			console.log(key);
			index++;

		 	if( index === code.length ) {
		 		alert('Done')
	      index = 0;
		 	}
		 }
		 else{
		 		console.log(key);
		 		index = 0;
		}
	}
	koncode.addEventListener('keydown',something);
}
//===========
