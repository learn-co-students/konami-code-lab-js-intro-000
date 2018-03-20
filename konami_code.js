const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
function init() {
  // Write your JavaScript code inside the init() function
  function check(e){
    console.log(e.which);
    let key = parseInt(e.which || e.detail,10);
    if(key === code[index]){
      index++;
      if(index === code.length){
        alert("Hurray!");
        index=0;
      }
    }
    else{
      index = 0;
    }
}

  document.body.addEventListener('keydown',check);
}
