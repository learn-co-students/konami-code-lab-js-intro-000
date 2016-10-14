
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  document.addEventListener("keydown", onKeyDownHandler,false);
}



var index = 0

// unattached event handler
function onKeyDownHandler(e) {
//const key = parseInt(e.detail || e.which)
//  const key = e.keyCode;
    var key = 0;
    key = e.keyCode;

  if (key === code[index]) {
    index++;
window.alert("YOU DID IT!");
    if (index === code.length) {
      window.alert("YOU DID IT!");
      //console.log("Done");
      index = 0
    }
  } else {
    index = 0
  }
}
