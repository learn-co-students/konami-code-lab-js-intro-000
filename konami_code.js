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

function init()
  {
  var code = [];
  var partialKonami = [];
  var codeChecker = () =>
    {

    }
  //function to register the specific keys and check the Konami code that we will invoke every time there is an event
  var keyLog = event =>
    {
      let key = String(event.key);
      console.log(key);
      code.push(key);
      partialKonami = codes.slice(0,code.length);
      console.log(partialKonami);
      console.log(code);
      if (code[code.length - 1]!=partialKonami[code.length - 1])
        {
          code = [];
          partialKonami = [];
        }
        if (partialKonami.length === codes.length)
          {
            alert("Hurray");
          }
      }
  //listener attached to the body of the HTML that registers keys pressed
  document.body.addEventListener ("keydown", keyLog);
  }
