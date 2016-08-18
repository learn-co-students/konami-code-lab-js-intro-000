const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === alphabet[index]) {
      index++;
      if (index === alphabet.length - 1) {
        alert("YOU DID IT!");
        index = 0;
      };
    } else {
      index = 0;
    };
  });
};
