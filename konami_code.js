const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

index = 0;


function init() {
  index = 0;
}

function listener(e){
  const key = parseInt(e.detail || e.which)

  if(key === code[index]){
    if(index === code.length - 1){
      alert("YOU DID IT!")
      init();
    return;
    }
  index++
  }else {
    init();
  }
}

document.body.addEventListener('keydown', listener)
init();
