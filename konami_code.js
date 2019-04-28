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
const alphabet = ['a', 'b','c'];

let index = 0;

function init() {
  // your code here
    window.addEventListener("keydown", function(event){
    const key = parseInt(event.which);
    console.log(event.which);
    if(key === codes[index]){
      index++;
      if(index === codes.length){
        window.alert("You found the Konami Code!")
      }
    } else{
      index = 0;
    }
  })
}
init();
}

