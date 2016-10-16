const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0;
  function checkCode(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      console.log(key);
      if (index === code.length) {
        alert(" Well done !!! ")
        index = 0;
      }
    } else { index = 0;}
  }
  document.body.addEventListener('keydown', checkCode);
}
