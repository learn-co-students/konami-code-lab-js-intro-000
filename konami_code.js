const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0
  document.body.addEventListener('keydown', clickHandler)




  function clickHandler(event){
    const key = parseInt(event.detail || event.which)

    if (key === code[index]) {
      index++

        if (index === code.length -1 ) {
          window.alert('You cracked it!!')
          index = 0
        }
    } else {
      index= 0
    }
    }
  }
