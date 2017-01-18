const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var i = 0;
var count = 0;
function init() {
  // your code here
  const body = document.querySelector('body');
  body.addEventListener('keydown', function(e){
    //this code below is so I could see what I was typing, not necessary for actual function
    // var pgh = document.createElement('p');
    // pgh.appendChild(document.createTextNode(e.which));
    // body.appendChild(pgh);
    const key = parseInt(e.detail || e.which);
   if (key === code[i]){
     count+=1;
     if (count === (code.length-1)){
       alert("You've cracked the code!");
     }
     i+=1;
  }else{
    i = 0;
    count = 0;
  }
  })
}




// const input = document.querySelector('input')
//
// input.addEventListener('keydown', function(e) {
//   console.log(e.which)
// })
