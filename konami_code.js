const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;
function keydownStuff(e) {
debugger;
console.log(e);
    const key = parseInt(e.detail || e.which)
	var theKey = code[index];
console.log("key: " + key);
console.log(theKey);
    if (key == theKey) {
console.log("equaled");
        index++;
    }
	if (index == code.length) {
        alert("congradulations!");
		index = 0;
    }
	else if (key != theKey && key != null) {
console.log("index reset");
        index = 0;
    }
}
document.body.addEventListener('keydown', keydownStuff)

}
