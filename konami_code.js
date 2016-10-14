const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {

  var index = 0;

  const body = document.querySelector('body');

  body.addEventListener('keydown',

  function onKeyDownHandler(e) {

  	const key = parseInt(e.detail || e.which);
  	console.log(key);

  	if (key === code[index]){
  		index++;

  		if (index === code.length){
  			alert("YOU DID IT!");
  			index = 0;
  		}
  	}else{
  		index = 0;
  	}
  })


}

// const alphabet = ['a', 'b', 'c']
//
// // keep track of index outside of the event handler
// var index = 0
//
// // unattached event handler
// function onKeyDownHandler(e) {
//   const key = parseInt(e.detail || e.which)
//
//   if (key === alphabet[index]) {
//     index++
//
//     if (index === alphabet.length - 1) {
//       alert("YOU DID IT!")
//       index = 0
//     }
//   } else {
//     index = 0
//   }
// }

// const input = document.querySelector('input')

// input.addEventListener('keydown', function(e) {
//   if (e.which === 71) {
//     return e.preventDefault()
//   }
// })