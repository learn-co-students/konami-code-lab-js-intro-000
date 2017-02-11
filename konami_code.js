const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

    var index = 0;

    document.body.addEventListener('keydown', function(e) {

        if (index === code.length - 1) {
            alert("CHEAT EXECUTED!!");
            index = 0;
        }

        if (code[index] === parseInt(e.which) || code[index] === parseInt(e.detail)) {
            index++;
        } else {
            index = 0;
        }
    })
}











if(window.addEventListener){
  var kkeys=[],konami="38,38,40,40,37,39,37,39,66,65";
  window.addEventListener("keydown",function(e){
    kkeys.push(e.keyCode);
    if(kkeys.toString().indexOf(konami)>=0){
      alert('ALL YOUR BASE ARE BELONG TO US');
      window.location="http://www.geekandhype.com/all-your-base-are-belong-to-us/";}}
      ,true);}
