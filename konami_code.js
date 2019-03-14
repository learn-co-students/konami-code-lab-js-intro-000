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
var codeCounter = 0

function init() {
document.body.addEventListener('keydown', onKeyDownHandler)
}

  function onKeyDownHandler(e)
  {
  const key = e.key
  if (key === codes[codeCounter])
  {
    codeCounter ++
    if (codeCounter === codes.length-1)
    {
      alert("Code true")
      console.log("true")
    }
  } else
    codeCounter = 0
  }
