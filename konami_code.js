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

  let i = 0

  document.body.addEventListener('keydown', (e) => {
    var pressed = e.key
    if(pressed == codes[i]) {
      i++
    } else {
      i = 0
    }

    if(i == 10) {
      alert('Congratulations, you have unlocked the Konami Code!')
      i = 0
    }
  })
}
