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
  let idx = 0;
  document.body.addEventListener("keydown", e => {
    if(e.key === codes[idx]) {
      idx += 1;
    }
    else {
      idx = 0;
    }
    if(idx === codes.length) {
      alert('Great!');
      idx = 0;
    }
  })
}
