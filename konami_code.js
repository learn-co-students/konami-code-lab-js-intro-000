const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // You'll want to attach an event listener to document.body
  //and check for 'keydown' events. If the user enters this special code,
  //alert() a congratulatory message.
  var index = 0

  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)

    if (key == code[index]) {
      index++

      if (index == code.length-1){
        alert('CONGRATULATIONS!')
        index = 0
      }
    }
    else {
      index = 0
    }
  })
}
