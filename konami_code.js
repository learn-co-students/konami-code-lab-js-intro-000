const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init(e) {
  if(parseInt(e.which || e.detail) === code[index]) {
    index++;
    if(index === code.length) {
      index = 0;
      window.alert("congratulations!");
    }
  } else {
    index = 0;
  }
}

/*
//define a function that checks whether user's inputs match the konami_code
function init(e) {
  //add user's input to the inputArr
  inputsArr.push(parseInt(e.which || e.detail));

  //check elements of inputArr one by one
  //and if not match konami_code, reset inputArr and get out of this function
  for(var i = 0; i < inputsArr.length; i++) {
    if(inputsArr[i] !== code[i]) {
      inputsArr = [];
      return;
    }
  }

  //if all elements of inputArr match konami_code, then check the length
  //if both length are the same, it means inputArr equals konami_code
  if(inputsArr.length === code.length) {
    window.alert("congratulations!");
  }
}
*/

//invoke init function when any key pressed
document.body.addEventListener("keydown", init);

document.body.addEventListener("keydown", function(e){
  console.log(e.which);
  console.log(index);
});

//below is to check whether the eventlister works

// document.body.addEventListener("keydown", function(e){
//   console.log(e.which);
//   console.log(inputsArr);
// });
