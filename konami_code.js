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
  document.body.addEventListener('keydown', konamiTest);
}

var i = 0;

function konamiTest(event) {
  if (event.key === codes[i]){
    console.log(i)
    i++;
  } else {
    console.log('Wrong code. Try again!')
    i = 0;
  }

  if (i === codes.length){
    alert('Congratulations! You have unlocked the next lesson!')
  }
}
