const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener("keydown", e => {
    const key = e.which || e.location || e.detail;
    console.log("Key " + key);
    if (code[index] === key) {
      index++;
      console.log("Index " + index);
      if (index === code.length) {
        alert("congratulations, you have inserted the konami code");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
