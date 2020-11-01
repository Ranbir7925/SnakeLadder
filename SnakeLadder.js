//Constant
const LADDER = 1;
const SNAKE = 2;
const MIN_POSITION = 0;
const MAX_POSITION = 100;

//Variables
var position = 0;
var diceValue = 0;
var gameOption =  0;
var rollCount = 0;

function getPosition(position,diceValue,gameOption){
    switch(gameOption){
        case LADDER:
            return ladder(position,diceValue)
        case SNAKE:
            return snake(position,diceValue)
        default:
            return position;       
    }
}

function ladder(position,diceValue){
    if(position+diceValue <= MAX_POSITION){
        position = position+diceValue;
        return position;
    }
    else
        return position;
}

function snake(position,diceValue){
    if(position - diceValue < 0){
        position = 0;
        return position;
    }
    else{
        position = position - diceValue;
        return position;
    }
}

function diceRoll(){
    diceValue = Math.floor(Math.random() * 6 ) + 1
    gameOption = Math.floor(Math.random() * 2) + 1
    return getPosition(position,diceValue,gameOption)
}
function game(){
    position = MIN_POSITION;
    while(position < MAX_POSITION){
        rollCount += 1;
        position = diceRoll();
        console.log(`No.of dice rolled ${rollCount} ---->>> Position of player is: ${position}`)
    }
}
game()