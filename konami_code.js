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
  const body = document.querySelector("body");
  
  function keyDownHandler(e){
    const key = e.key;
    
    if(key === codes[index]){
      index++;
      
      if(index === codes.length){
        alert("Konami Code!!!!!");
      }
    } else {
      index = 0;
    }
  }
  body.addEventListener('keydown', keyDownHandler);
}


