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

// function sequenceChecker() {
//     const keyPressed = e.key;
//
//     if (keyPressed === codes[index]) {
//       index++
//
//       if (index === codes.length) {
//         alert("Nice one!");
//       }
//     }
//   }

  function init() {
    let index = 0
    document.body.addEventListener("keydown", function(e) {
      const keyPressed = e.key;

      if (keyPressed === codes[index]) {
        index++

        if (index === codes.length) {
          alert("Nice one!");
    }
  }
})
}
