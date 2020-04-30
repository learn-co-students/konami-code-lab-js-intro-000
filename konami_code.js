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
let index = 0

function init()
{
  // your code here
  document.body.addEventListener("keydown", (event) => {

    const key = event.key;
    if (key == codes[index])
    {
      index++;
      if (index == codes.length)
      {
        alert(`W0W!!! U R L33T H4K3R!!! 1MPR3551V3!!!(Hurray)`)
        index = 0;
      }
    }
    else
    {
      console.log(`nope`)
      index = 0;
    }
  })
}
