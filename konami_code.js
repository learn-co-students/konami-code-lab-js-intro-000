const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var user = []
document.body.addEventListener('keydown', init, false)
function init(e) {
    user.push(e.keyCode)
    for(var i = 0; i<user.length; i++){
        if(code[i] !== user[i]){
            user = [];
        }
    }
    if(code.length === user.length){
        alert('YOU DID IT');
    }
}
