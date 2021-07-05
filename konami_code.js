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

let counter = 0;

function init() {
  document.body.addEventListener("keydown", (event) => {
    const key = event.key;
//check the key against the Konami Code array
//if it matches, increase counter and listen for next keystroke
    if (key === codes[counter]) {
      counter++;
//the only way for counter to equal 10 is if all keystrokes have been correct!
      if (counter === codes.length) {
        alert("Hurray! You have cracked the code!");
        counter = 0;
      }
//if it doesn't match, reset the counter and listen for the
    } else {
      counter = 0;
    }
  });
}

//Alternative solution: add keystrokes to an array, then check the array against the codes array

//let temp = []

//function initAlt() {
//  document.body.addEventListener("keydown", (event) => {
    //debugger
//    temp.push(event.key);
//    for (let i = 0; i < temp.length; i++) {
//      if (temp[i] !== codes[i]) {
//        temp = []
//        break
//      }
//    }
//    if (temp.length == 10) {
//      alert("Congratulations! You have cracked the code!");
//    }
//  })
//}
