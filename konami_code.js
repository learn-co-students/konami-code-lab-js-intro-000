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
  // Attaching an keydown event listener to document.body
  document.body.addEventListener("keydown", function(e) {
    // Now, how can we check for which specific key was pressed?
      const key = e.key;

      if (key === codes[index]) {
        index++;
      }
      if (index === codes.length) {
        alert("Hurray!");
        index = 0
      }
  })
}
