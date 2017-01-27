var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;


document.body.addEventListener('keydown', init);

function init(event) {
  var key = parseInt(event.detail) ;
    if(key === code[index]) {
    index ++;

    if(index === code.length) {
    alert("YOU DID IT!");
    index = 0;
    }
    }
    else {
    index = 0;
    }
}