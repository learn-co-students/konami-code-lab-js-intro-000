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
  var num = 0;
  function callback(e)
  {
    const key = e.key
    if(key == codes[num])
    {
      num += 1;
      if(num == codes.length)
      {
        window.alert('Hurray')
        num = 0;
      }
    }else{
      num = 0;
    }
  }

  document.body.addEventListener("keydown", callback)
}
