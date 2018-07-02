// When the user click submit, console.log should display results

var player= document.getElementById("submit");

player.onclick = function () {
    var randomNum = generateRandomNum()
    var player1= getGuessValue()
    var result = printResults(player1) 
    console.log(player1);
};

// Get value
function getGuessValue () {
    var input= document.getElementById("number");
    return input.value

}
// function printValue(html){
// }

//Generate a random number between 0 and 100 and  onsubmit button  print out the number
function generateRandomNum () {
    var randomNum = document.getElementById("demo")
    randomNum.innerHTML = Math.floor((Math.random() * 100) + 1);
}

function printResults(input) {
    var player1 = "";
    for (var i=1; i<=randomNum; i ++) {
        if (player1 <= randomNum) {
            console.log("lower")
        } 
    }
    return 
}
