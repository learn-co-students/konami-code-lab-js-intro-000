// Konami Code: Japanese: コナミコマンド

// Key codes for Up, Up, Down, Down, Left, Right, Left, Right, B, A
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// This is the function that would be invoked by the event listener
function init() {

  // Write your JavaScript code inside the init() function

  // Keep track of index outside of the event handler
  let index = 0;

  // attach an event listener to document.body and check for 'keydown' events
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

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
