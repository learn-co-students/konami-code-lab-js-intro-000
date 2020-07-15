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
 let index = 0;
  // Attaching an keydown event listener to document.body
  document.body.addEventListener("keydown", (event) => {
    const key = e.key;
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

/*
document.body.addEventListener('keydown', init);

function init(e) {
  newCodeArray = [];
  newCodeArray.push(e);
  
  if(codes[i] === newCodeArray[i]){
    alert("correct order"); 
  } else {
    newCodeArray = [];
  }
}
*/