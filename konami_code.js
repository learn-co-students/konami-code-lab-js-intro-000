const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
  var index = 0;
  function onKeyDownHandler(keydown){
    const key = parseInt(keydown.detail || keydown.which);
    if(key === code[index]){
      index++;
      if(index === code.length){
        window.alert('Hurray!');
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
