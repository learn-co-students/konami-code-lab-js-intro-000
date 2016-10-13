const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  document.body.addEventListener("keyDown", onKeyDownHandler, false);
}



var index = 0

// unattached event handler
function onKeyDownHandler(e) {
//const key = parseInt(e.detail || e.which)
//  const key = e.keyCode;
    const key = parseInt(e.which);

  if (key === code[index]) {
    index++

    if (index === code.length - 1) {
      window.alert("YOU DID IT!");
      //console.log("Done");
      index = 0
    }
  } else {
    index = 0
  }
}
