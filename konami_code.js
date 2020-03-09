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

var key_log = 0

function init() {
document.body.addEventListener("keydown",function(e) {
  var key = e.key
  if(key === codes[key_log]) {
    key_log += 1
    if (key_log === codes.length) {
      alert("Well done, you have found the Easter Egg!!")
      key_log = 0
    }
  } else {
    key_log = 0
  }
})
}
