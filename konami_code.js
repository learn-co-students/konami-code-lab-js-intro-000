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

let i = 0

function init() {
  // your code here
  //const input = document.querySelector('input');
 /*
  document.addEventListener('keydown', function(e) {
    console.log(e.key);
  });
*/
//document.addEventListener('keydown', onKeyDownHandler(e))
  document.body.addEventListener('keydown', function(e) {
    i++
    console.log(i)

    console.log(e.key)
    onKeyDownHandler(e);
  });

}

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;
    console.log(index)

    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
