const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {

  let b = document.body;
  let ind = 0;
  b.addEventListener('keydown', function(e) {
    e.stopPropagation();
    let myKey = parseInt(e.detail || e.which);
    if (myKey === code[ind]) {
      ind++;
      if (ind === (code.length)) {
        alert("Hurray");
        console.log('Hurray')
      }
    } else {
      ind = 0;
    }
  })
}

init()
