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
  // your code here

  let index = 0;

  document.body.addEventListener("keydown", function(event) {
    const key = event.key;

    if (codes[index] === key) {
      index++;

      if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      }

    } else {
      index = 0;
    }

  });
}







// function init() {

//   let index = 0;
 
//   // Attaching an keydown event listener to document.body
//   document.body.addEventListener("keydown", (event) => {
//     // Now, how can we check for which specific key was pressed?

//     if ("keydown" === event[index]) {
//       index++;

//       if (index === event.length) {
//         alert("Congratulations!");
//         index = 0;
//       }

//     } else {
//       index = 0;
//     }

//   }
// }
