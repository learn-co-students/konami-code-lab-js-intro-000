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
  var index = 0;
  document.body.addEventListener("keydown", 
  function onKeyDownHandler(e) {
  const key = e.key;
  if (key === codes[index]) {
   
   
    index++;
    
     console.log(index);
      console.log(key);
    if (index === codes.length) {
      window.alert("Yahoo! Mountain Dew!");
        index = 0;
    }
  } else {
    
    index = 0;
  }
    
  });
}

