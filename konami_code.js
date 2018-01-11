const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
const body = document.querySelector('body')

body.addEventListener('keydown', doer)

function doer(e, j) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || e.which);
  console.log(key)
  if (key === code[index]){
    index++

    if (index === code.length) {
      alert("You did it!")
      index = 0;
    }
  }
  else {
    index = 0;
  }
}
