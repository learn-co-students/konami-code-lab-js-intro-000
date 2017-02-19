const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {

  function eval(e) {
    //console.log(`The value of index is ${index}`)
    //console.log(`The value passed was ${(e.detail || e.which)}`)
    const number = parseInt(e.detail || e.which)
    if (number === code[index]) {
        index++
        if (index === code.length) {
          //console.log('Success!')
          alert("Success!")
          index = 0
        }
    }
    else {
      //console.error('Try again')
      //alert('Wrong Code')
      index = 0
    }
  }

  document.body.addEventListener('keydown', eval)

}

/*
  window.addEventListener('keydown', function(e) {
  var number = parseInt(e.detail || e.which)
  if (code.indexOf(number) >= 0) {
    console.log(number)
    if (number === code[index]) {
        index++
    }
    if (index === code.length) {
      console.log("Success!")
      index = 0
    }
  }
  else {
    console.error("Try again")
    index = 0
  }
  })
*/
