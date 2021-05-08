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

let keyLog = [];
let reference = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e) {
    if (e.key===codes[reference]) {
      keyLog.push(e.key);
      reference++;
      if (keyLog.length===codes.length) {alert("Hurray!")};
    } else {
      reference = 0
      keyLog = [];
    }});
}
