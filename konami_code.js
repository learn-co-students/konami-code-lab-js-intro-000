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

let index = 0;

function init() {
  //attaching a keydown event listener to document.body
  document.body.addEventListener("keydown", (event) => {
      
    const key = event.key;

    if(key === codes[index]) {
      index++;

      if(index === codes.length) {
        alert("Hurray!");
      }
    } else {
      index = 0;
    }
  })
}
