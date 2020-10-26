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

  // Attaching an keydown event listener to document.body
  document.body.addEventListener("keydown", (event) => {
    // Now, how can we check for which specific key was pressed?
    // Keep track of index outside of the event handler.
    let index = 0;

    // This is the function that would be invoked by the event listener.
    function onKeyDownHandler(e) {
      const key = event.key;

      if (key === code[index]) {
        index++;

        if (index === code.length) {
          alert("Hurray!");

          index = 0;
        }
      } else {
        index = 0;
      }
    }
  }
}
