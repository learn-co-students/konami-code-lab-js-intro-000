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

let i = 0;

function init() {
  var body = document.body;
  body.addEventListener('keydown', function(e) {
    const key = e.key;
    
    
    if(key === codes[i]) {
      i++;
      if (i === codes.length) {
        alert("CONGRATS");
      }
    } else {
      i = 0;
    }
  });
}
