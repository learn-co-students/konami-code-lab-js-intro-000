const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  const body = document.querySelector('body');


  var inputtedCode = [];

  body.addEventListener( 'keydown', function( checkCode ) {
    inputtedCode.push( checkCode.detail );
    if ( inputtedCode.toString() === code.toString() ) {
      alert( 'CODE ENTERED. WORLD UNLOCKED');
    }
  })

}
