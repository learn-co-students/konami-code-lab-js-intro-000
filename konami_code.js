const arr = [
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

  document.body.addEventListener("keydown", (event) => {

    const key = event.key;

    if (key === arr[i]) {
    i++;

    if (i === arr.length) {
      alert("Congrats!");

      i = 0;
    }
  } else {
    i = 0;
  }
})
};
