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



var index = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', function (event) {
    const key = parseInt(event.detail || event.which);

    if (key === code[index]) {
      index++;

      if (index === code.length -1) {
        alert("YOU DID IT!");
        index = 0;
      }
    }
    else {
      index = 0;
    }
  });
};
