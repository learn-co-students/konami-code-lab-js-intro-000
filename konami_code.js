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

let index = 0;

function init() {
  document.body.addEventListener('keydown', event => {
    event.key === codes[index] ? index += 1 : index = 0;
    if (index === codes.length) {
      alert('Hurray')
      index = 0;
    }
  });
  
  //if key is equal to codes at index
    //increment index
  //otherwise
    //reset index to 0
  //if the length of codes is equal to index
    //alert the user Congratulations!
}
