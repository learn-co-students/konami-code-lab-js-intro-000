
const codes = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

let index = 0;
let buffer = [];

	function init(){
		document.body.addEventListener('keydown',onKeyDownHandler);
	}
	function onKeyDownHandler(e){
			var key = e.key;
			if(key===codes[index]){
				index++;
				buffer.push(key);
				if(buffer.length===codes.length){
					alert("Hurray!");
					index = 0;
				}
			} else{
				index=0;
				buffer=[];
			}
		}
	init(); 