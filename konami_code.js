
// Create the famous Konami code array
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// start index count at 0
var index = 0

// initialize function
function init() {

	// add keydown event listener to body tag
	document.body.addEventListener('keydown', function(e){
    // parseInt converts 'key' value (from a string) to a number
		// e.detail tracks number of mouse clicks within a short/specific time
		// e.which returns which keyboard key or mouse event pressed for event
		const key = parseInt(e.detail || e.which)

    // Is 'key' value equal to code[index]?
		// if yes, index++, go back to top of function and check next entry
		// if no, reset index to 0; keep trying to crack the code.
		if (key === code[index]) {
			index++

			// if index count reaches the end of the code array (code.length - 1)
			// that means you reached the end and cracked the code ( 'You did it!' )
			if (index === code.length - 1) {
				index = 0
				alert("YOU DID IT!")
			}
		} else {
			index = 0
		}
	})
}
