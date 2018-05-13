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
  var counter = 0


  document.body.addEventListener('keydown', function(e) {
    var key = e.key;
    if (key === codes[counter]) {
      counter++
      if (counter === codes.length) {
        alert('Hurray!')
        counter = 0
      }
    } else {
      counter = 0
    }

  })
}
