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


   var index=0

   document.body.addEventListener('keydown',function(e){
    const key = parseInt(e.detail || e.which);

      if (key!==code[index]) {
        return};
        index++ ;
        if (index===10) {
          alert('success')
        }
     }
   )
  }
