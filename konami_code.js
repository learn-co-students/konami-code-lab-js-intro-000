const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index=0
  const body= document.body
  body.addEventListener('keydown',function(e){
    const key = parseInt(e.detail||e.which)

    for ( var i=0;i<code.length;i++){
      if (key === code[i]){
        index++
    }
  }
    if( index === code.length ){
      alert("Found the code")
  }
}
)
}
init()
