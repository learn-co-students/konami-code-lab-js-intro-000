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
var index = 0;
document.body.addEventListener('keydown', (event)=>{
 var key = event.key;
 if(key === codes[index]){
   //console.log(e.key);
   index ++;
   if(index === codes.length){
     alert("Hurray!");
   }
 }else{
   index = 0;
 }
 });
}
