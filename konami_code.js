const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var tracker = 0
function init() {
  document.body.addEventListener('keydown', function(e) {
    console.log(e.which)
    if (code[tracker] === parseInt(e.which || e.detail)) {
      if (tracker == code.length - 1) {
        alert('You did it!')
      }
      tracker++
    }
    else {
      tracker = 0
    }
  })
}
