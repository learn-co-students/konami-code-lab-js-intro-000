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

var index = 0; //global variable

// unattached event handler
  function keyCode(e) {
    var key = parseInt(e.detail || e.which)//converts from string and returns true if either method is true

    if (key === code[index]) {//if the key matches the value held at an index
      index++ //advance index

      if (index === code.length-1) {//if iteration reaches the last index of the code (and thus all keys have been pressed in order)
        alert('KONAMI!!!')//alert
        index = 0//and reset index
      }
  } else {//otherwise, start over
    index = 0
  }
}
document.body.addEventListener('keydown', keyCode); //set the listener. when keydown begin function keyCode
}	 }
/*also passes test when
if (index === code.length) {
but since index starts at 0 and length starts at 1, it should be code.length-1
got help from the repositories*/
