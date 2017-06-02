const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
    
    var index = 0;
    document.body.addEventListener('keydown', parseCode);
    
    function parseCode(e) {
        
        const key = parseInt(e.detail || e.which);
        
        console.log("Key = " + key);
        console.log("Code = " + code[index]);
        
        if (code[index] === key) {
            
            console.log(key + "=" + code[index]);
            console.log("Index= " + index);
            index++;
            
            if (index === code.length) {
                alert("Hooray!!");
                index = 0;
            } 
        } else {
            index = 0;
        }
    }   
}
