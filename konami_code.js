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

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var i = 0;
document.addEventListener('keydown', function (e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[i]) {
    i++;

  if (index === code.length - 1) {
    window.alert("Congrats!");
    i =0;}
} else { i = 0; }
}, false);
}
