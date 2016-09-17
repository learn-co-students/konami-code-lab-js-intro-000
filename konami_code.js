const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init(){
  const body = document.querySelector('body')
  body.addEventListener('keydown',function(e){
    const key = parseInt(e.detail || e.which)
    console.log(key)
    if (key === code[index]){
      index++
      if(index === code.length-1){
        alert("KONAMI CODE ENTERED")
        index = 0
      }
    } else{
      index = 0
    }
  })
}
