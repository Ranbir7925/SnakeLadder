//Constant
const LADDER = 1
const SNAKE = 2

//Variables
var position = 0
var diceValue = 0

function getPosition(position,diceValue,gameOption){
    switch(gameOption){
        case LADDER:
            position = position + diceValue;
            return position
        case SNAKE:
            position = position - diceValue
            return position
        default:
            return position            
    }
}


function game(){
    diceValue = Math.floor(Math.random() * 6 ) + 1
    gameOption = Math.floor(Math.random() * 3)
    position = getPosition(position,diceValue,gameOption)
}
game()
console.log(diceValue);
console.log(gameOption);
console.log(position);