// When the user click submit, console.log should say "hello"

var player= document.getElementById("submit");

player.onclick = function () {
    var result= getValue()
    console.log(result);
};
// Get value
function getValue () {
    var input= document.getElementById("number");
    return input.value 
    
}


// function printValue(html){

// }
//should generate a random number between 0 and 100
// 