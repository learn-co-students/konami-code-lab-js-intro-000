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
 document.body.addEventListener('keydown', KeyDown)}

function KeyDown(e){
    var keyName = e.key;
  if (keyName === codes[index]) {
    index++;
    if (index === codes.length) {
     alert("Hurray!");
     index = 0;
  };
  } else {
index = 0;
}
}


init();
// your code here
