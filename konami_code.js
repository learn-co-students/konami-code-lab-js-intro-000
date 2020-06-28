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

//init();
let i = 0;
function init() {
  document.body.addEventListener('keydown',(event) => {
    const key = event.key;
    console.log(key);
    if(key === codes[i]) {
      i++;
    } else {
      i = 0;
    }
    if(i == codes.length) {
      alert("Hurray");
    }
  })
}
