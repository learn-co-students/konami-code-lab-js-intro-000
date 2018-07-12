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

var keys = [];
const body = document.body;
function init() {
  // your code here
  body.addEventListener('keydown', function(event) {
  keys.push(event.key);
  for(let i = 0; i< keys.length; i++){
  if(keys[i] != codes[i]){
    keys = [];
  }
 
  }
 if(keys.length == codes.length){
   alert('Hurray!');
  }
 
})

  }
