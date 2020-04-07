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

function init() {
    let index = 0;
    
    document.body.addEventListener("keydown", (event) => {
      const key = event.key;
      
      if (key === codes[index]) {
        index++;
 
          if (index === codes.length) {
            alert("Hurray!");
 
            index = 0;
          }
      } else {
        index = 0
        }
    }
)}

// function onKeyDownHandler(e) {
//   const key = e.key;
  
//   let index = 0;
 
 
//   } else {
//     index = 0;
//   }
// }

// const input = document.querySelector('input');
 
// input.addEventListener('keydown', function(e) {
//   console.log(e.key);
// });