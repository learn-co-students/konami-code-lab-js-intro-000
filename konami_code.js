const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index=0
function init() {
  // your code here
//document.querySelector('body').addEventListener('keydown',onKeyDownHandler)


var myBody= document.querySelector('body')
myBody.addEventListener('keydown',onKeyDownHandler)
console.log("init called")
}


// keep track of index outside of the event handler


// unattached event handler
function onKeyDownHandler(e) {
  //var key = e.keyCode
 // console.log("1: " + key);

  console.log("Event Handler with " + e.detail + " "+ code[index])
  if (parseInt(e.detail)=== parseInt(code[index])) {
      console.log(index + " match ")

      index++

    if (index === code.length-1) {
      alert("YOU DID IT!")
      console.log("Alert called")
      index = 0
    }
  } else {
    index = 0
  }
}
