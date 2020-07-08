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
var correctSeq = [];

function init() {
  document.body.addEventListener('keydown', event => {
    correctSeq.push(event.key)

    for (let i in correctSeq){
      if (correctSeq[i] !== codes[i]){
        correctSeq = []
      }
    }

    if (correctSeq.length === codes.length){
      alert('Hurray')
      correctSeq = []
    }
    })
}
