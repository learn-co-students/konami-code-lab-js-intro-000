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

function init() {
  document.body.addEventListener ('keydown', function(e) {


function onKeyDownHandler(e) {
  var key = e.key;

      // check if key is equal to current value of index in code array
      // then loop through the array if conditions match

    if (key === codes[index]) {
        // if yes, increment index by 1
        index++;

        // if still in the loop, check if index is equal to code array length
      if (index === codes.length - 1) {
          // reset the index counter
          index = 0;
          // if yes, you passed, congrats!
        alert("KONAMI CODE!");
      }

    // if key doesn't match current index in code array, then reset the index to zero
    } else {
      index = 0;
    }
  });
}
}
