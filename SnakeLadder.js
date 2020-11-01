//Constant
const LADDER = 1;
const SNAKE = 2;
const MIN_POSITION = 0;
const MAX_POSITION = 100;

//Variables
var position = 0;
var diceValue = 0;
var gameOption =  0;

function getPosition(position,diceValue,gameOption){
    switch(gameOption){
        case LADDER:
            if(position+diceValue <= MAX_POSITION){
                position = position+diceValue;
                return position;
            }
            else
                return position;
        case SNAKE:
            if(position - diceValue < 0){
                position = 0;
                return position;
            }
            else{
                position = position - diceValue;
                return position;
            }
        default:
            return position;       
    }
}


function game(){
    position = MIN_POSITION;
    while(position < MAX_POSITION){
        diceValue = Math.floor(Math.random() * 6 ) + 1
        gameOption = Math.floor(Math.random() * 2) + 1
        position = getPosition(position,diceValue,gameOption)
    }
}
game()
console.log(`Current position of player is: ${position}`)