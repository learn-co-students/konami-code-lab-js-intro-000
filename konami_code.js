const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  var index = 0

  function keydownEventHandler(event) {
    var key = parseInt(event.which || event.which)

    if (key === code[index] ) {
      index++

      if (index === code.length - 1) {
        window.alert('You did it!')
        index = 0
      }

    } else {
      index = 0
    }

  }

  document.body.addEventListener('keydown', keydownEventHandler)
}
