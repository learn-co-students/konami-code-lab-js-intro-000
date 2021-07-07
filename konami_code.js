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
  var index = 0
  const body = document.querySelector('body')
  var onKeyDownHandler = (e) => {
    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++
      if (index === code.length - 1) {
        alert("KONAMI!")
        index = 0
      }
    } else {
      index = 0
    }
  }
  body.addEventListener('keydown', onKeyDownHandler)
}
