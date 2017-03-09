const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// const input = document.querySelector('input')
//
// function init() {
//
//   var index = 0
//
//   input.addEventListener('keydown', function(e) {
//
//     console.log('gd');
//
//     const key = parseInt(e.detail || e.which)
//
//     if (key === code[index]) {
//       index++
//
//       if (index === code.length - 1) {
//         alert("YOU DID IT!")
//         index = 0
//       }
//     } else {
//       index = 0
//     }
//   })
// }

function init() {

  var index = 0

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail)

    if (code[index] === key) {
      index++

      if (index === code.length - 1) {
        alert('hurray!')

        index = 0
      }
    } else {
      index = 0
    }
  })
}
