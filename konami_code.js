const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  var index = 0;
  // your code here
  document.body.addEventListener("keydown", function(e) {
        var key = parseInt(e.detail || e.which);
        console.log(key);
        if (key === code[index]) {
          index++;
          if (index === code.length) {
            window.alert("You did it!");
            index=0;
          }
        }
        else {
          index=0;
        }
      });
}

init();
