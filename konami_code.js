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

const compare = (arr1, arr2) => {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true
}

function init() {
  // your code here
  let arr = [];
  document.body.addEventListener("keydown", (e) => {
    arr.push(e.key);

    console.log(arr)

    if (compare(codes, arr)){
      alert("Hurray!");
      arr = [];
    } else if (arr.length >= 10){
      arr = [];
    }
  })
}

// init();
