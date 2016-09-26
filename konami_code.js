const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // your code here
  var codeIndex = 0 //keep track of index outside of event handler

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

      if (key === code[codeIndex]) {
        codeIndex++

        if (codeIndex === code.length - 1) {
          alert('Correct Code Entered')
          codeIndex = 0
        }
        else {
          index = 0
        }
      }
  })
}
