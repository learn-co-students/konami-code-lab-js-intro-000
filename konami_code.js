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

function init() {
  // your code here
  var index = 0;

	window.addEventListener('keydown',function(e){
  		const key = parseInt(e.detail || e.which);
		if(key === code[index]){
			index++;
			if (index === code.length - 1){
				alert("Congratulations! You're in our secret club!");
				index = 0;
			}
		}
		else{
			index = 0;
		}
	});
}

