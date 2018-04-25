const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;


function init() {
  // Write your JavaScript code inside the init() function
  // document.body.addEventListener('keydown', codeDetect)
  const body = document.querySelector('body');
  body.addEventListener('keydown', codeDetect);
}

function codeDetect(event) {
  let key = parseInt(event.key || event.which || event.detail || event.location);

  index = key === code[index] ? ++index : 0;

  if (index === code.length) {
    alert('Yay!');
    index = 0;
  }

  // if (key === code[index]) {
  //   index++;
  //
  //   if (index === code.length) {
  //     alert('Yay!');
  //     index = 0;
  //   }
  //
  // }
  //
  //   else {
  //     index = 0;
  //   }

}
