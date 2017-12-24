const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// function init() {
// var i = 0
//   document.body.addEventListener('keydown', function(e)) {
//
//     const key = parseInt(e.which || e.detail);
//
//     if (code[i] === key) {
//       i++;
//
//       if (i === code.length) {
//         alert('hurray!');
//         i = 0;
//       }
//     } else {
//       i = 0;
//     }
//   });
// }

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
    console.log(key);
    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
