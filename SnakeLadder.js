var position = 0
var diceValue = 0
function game(){
    diceValue = Math.floor(Math.random() * 6 ) + 1
}
game()
console.log(diceValue);
console.log(position);