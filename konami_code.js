const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// keep track of index outside of the event handler
function init() {
	var index = 0
	document.body.addEventListener('keydown', function(e) {
		const key = parseInt(e.which || e.detail)

		if (code[index] === key) {
			index++
			if (index === code.length -1) {
				alert('Contra!')

				index = 0
			}
		} else {
			index = 0
		}
	})
}
