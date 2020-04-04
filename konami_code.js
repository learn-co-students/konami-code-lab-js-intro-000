const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

/*function init() {
  // your code here
    var idx = 0;
    //keys_arr = []
    document.addEventListener('keydown', function(e) {
    //console.log(e.key);
    const key = e.key;

    if (key === codes[idx]) {
      idx++
      //console.log('yep')

      if (idx === codes.length) {
        console.log('reached')
        alert('Congrats! You cracked the Konami Code!!');
        idx = 0;
      }
    } else {
      idx = 0;
    }
    /*var chker = keys_arr.slice(keys_arr.length -10, keys_arr.length)
    function chkTr (ar1, ar2) {
      for (let i = 0; i < ar1.length; i++) {
        if (ar1[i] != ar2[i]) {
          return false
        } else {
          return true
        }
      }
    }
    if (chkTr(codes, chker)) {
      alert('Congrats! You cracked the Konami Code!!')
    }
})
})}*/

//this isnt my code, the help people gave me this
//since my code woulder trigger an event but not
//pass the test
function init() {
  let idx = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    idx = (codes[idx] === key) ? ++idx : 0


    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }

  });
}
