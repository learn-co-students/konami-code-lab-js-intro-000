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
  let index=0;
  document.body.addEventListener("keydown", (event) => {
    const key = event.key

    if (codes[index] == key) {
      index++
    }

    else {
      index = 0
    }

    if (index == 10) {
      alert("Hurray!");
      index = 0
    }
  });

}
