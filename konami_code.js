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

  document.body.addEventListener("keydown", keyHandler);

  var myCodes =   [
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

var myIndex = 0;

  function keyHandler(event) {
  const key = event.key;
  if(myCodes[myIndex] === key) {
  myIndex++;

  if(myCodes.length === myIndex) {
  window.alert("Hurray");
  myIndex = 0;
 }

} else {
 myIndex = 0;
  }
 }
}
