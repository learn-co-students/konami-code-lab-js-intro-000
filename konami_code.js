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

var index =  0

function init(e) {
document.body.addEventListener('keydown', function(e) {
const key = parseInt(e.detail || e.which)
for (index in code){
    if (key === code[index]) {
      index++
      alert("Congrat!")
    }
  }
})
}
