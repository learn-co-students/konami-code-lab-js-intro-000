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
  //   // your code here
  let i = 0
  document.body.addEventListener('keydown', (e) => {
    const key = e.key
    console.log(`index${i} key${key}`)
    if (key === codes[i]) {
      i ++
      if (i===codes.length){
        alert("Nice!")
      }
    }
    else {
      i = 0
    }
  });
}
