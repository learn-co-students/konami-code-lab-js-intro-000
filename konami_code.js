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
  // your code here
  var index;
  document.body.addEventListener("keydown", (event) => {
  // Now, how can we check for which specific key was pressed?
  console.log( event.key + " was pressed")
  const key = event.key
  var codeCompare = codes
  //debugger
  if(event.key === codeCompare[0]){
    codeCompare.shift()
    console.log(codeCompare.length)

    if(codeCompare.length === 0){
      alert("Hurray")
      return true;
    }
  } else{
    console.log("not correct")
    return false;
  }

})
}
