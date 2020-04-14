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
  let count = 0;
  document.body.addEventListener("keydown", (event) => {
    // console.log(event.key)

    if (event.key === codes[count]) {
      // console.log(codes[count])
      count++;
      if(count === codes.length) {
        alert("Hurray!");

        count = 0;
      }
    } else {
      count = 0;
    }

  });
}
init();
