const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var keyPressed = [];
var index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.body;

  body.addEventListener("keydown", konamiFunc);
}

function konamiFunc(event) {
  let input = parseInt(event.which);
  console.log(input);
  keyPressed.push(input);

  if(keyPressed[index] === code[index]) {
    index++;

    if(index === code.length) {
      alert("Yay!");
      index = 0;
    }

  } else {
    index = 0;
    keyPressed = [];
  }
}
