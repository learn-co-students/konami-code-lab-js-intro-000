const code = [
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
  let index = 0;
  document.body.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else { 
      index = 0;
    }
  });
}