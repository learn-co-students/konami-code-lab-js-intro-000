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

let i = 0;
let check = true;
function init() {
  // your code here
  document.body.addEventListener("keydown", event =>{
    const key = event.key;
    if (key != codes[i]){
      check = false;
      i++;
    }
    else if(key == codes[i]){
      i++;
    }
    if (check == true && i == codes.length ){
      alert("Hurray!");
    }
  });
};
