const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init(event) {
  i=0
  document.body.addEventListener('keydown', function (event){
    key = parseInt(event.detail || event.which)
    console.log(event.which)
    if (key==code[i]) {
      i=i+1
      console.log(i)
      if (i==10) {
        alert("Congrats shithead")
      }
    }
  })
}
