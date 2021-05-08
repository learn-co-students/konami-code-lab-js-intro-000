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

var code = []

function init() {
  // your code here
document.body.addEventListener('keydown', function(e) {checker(e.key) });
}

function checker(pressed) {
  code[code.length] = pressed
  for (let i = 0; i < code.length;i++) {
    if (code[i] !== codes[i]) {code=[] }
    
}
if (codes.length === code.length) {alert("Hurray")}

}