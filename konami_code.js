const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var keys = []
function init() {
  // your code here
  //const body = document.getElementsByTagName('body')
//debugger
  //body.addEventListener('keydown', function(){keyDownHandler(event)})
  document.body.addEventListener('keydown', keyDownHandler)
}

  function keyDownHandler(event){
    console.warn("caught keydown with " + event.detail || event.which + ".")
    keys.push(parseInt(event.detail || event.which))
    console.log("keys array: " + keys);
    //e.detail || e.which
    var test = code.slice(0,keys.length)
    if(test.join()===keys.join()){
      if (test.length === code.length){
        alert('You know the code!')
      }
    }else{
      keys=[]
    }
  }
