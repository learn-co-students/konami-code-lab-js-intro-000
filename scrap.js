const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var body = document.body
  var keySeq = []
  var keySeqValidation = []
/*  function getLength(array) {
    return array.length
  } */
  body.addEventListener('keydown', function(e) {
//    console.log(`${e.which}, ${e.detail}`)
    keySeq.push(e.which)
    keySeqValidation.push.apply(code)
//    console.log(keySeq.length)
    keySeqValidation.length = keySeq.length
    console.log(`${keySeq}, ${keySeqValidation}`)
    if (keySeq !== keySeqValidation) {
      keySeq = []
      keySeqValidation = []
    }
    else if (keySeq === code) {
      alert('Woot.')
    }
    else {
//      console.log(keySeq)
      keySeqValidation = []
    }
  })
}







const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0

  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)
    if (key === )
  })
}
