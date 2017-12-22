const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];



function init() {
  let index = 0;
  document.body.addEventListener("keydown",function(event) {



// This is the function that would be invoked by the event listener.

  const key = parseInt(event.detail);


  if (key === code[index])
  {
    index++;


    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
});
}

init();
