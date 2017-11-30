const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
function init() {
  document.addEventListener('keydown', function(e) {
  const key = parseInt(e.which || e.detail);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        window.alert('You are awesome!');
        index = 0;
        e.preventDefault();
    }
  } else {
      index = 0;
    }
  console.log(e.which);
  console.log(index);
  console.log(key);
});
}
