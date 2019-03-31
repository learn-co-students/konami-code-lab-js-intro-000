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

let index = 0

function init() {
  const body = document.querySelector('body')
  body.addEventListener('keydown', codeTest)
}

function codeTest(e) {
  let key = e.key
  if (key === codes[index]) {
    index++
  }
  else {
    index = 0
  }
  if (index === codes.length) {
    alert('Game Unlocked')
    index = 0
  }

}
