// keys to press in this order
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

// keep track of index outside of event handler
let index = 0;

// function invokes the event listener
function init() {
  // attach event listener to document.body - check for keydown events
  document.body.addEventListener('keydown', function(event){
    // press all ten keys in correct order congrats alert
    const key = event.key;
    console.log(key);
    if (key === codes[index]){
      index++;
      if (index === codes.length){
        alert("Hurray!");
      }
    
    } 
    // nothing happens if not correctly pressed
    else {
      index = 0;
    }
  });
  }





