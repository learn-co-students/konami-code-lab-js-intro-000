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
  const input = document.querySelector('input')
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    if (e.key === codes[index]) {
      index++;

      if (index === codes.length) {
        window.alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
