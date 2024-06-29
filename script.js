"use strict";
const containerEL = document.querySelector('.container');
const btnPlayEL = document.querySelector('.btn_again');
const btnChckEL = document.querySelector('.btn_check');
const hideNumEL = document.querySelector('.hide_num');
const msgEL = document.querySelector('.message');
const inputNumEL = document.querySelector('.input_number');
const highScoreEL = document.querySelector('.high_score');
const scoreEL = document.querySelector('.score');

let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

console.log(secretNum);

btnChckEL.addEventListener('click', () => {
    const guess = Number(inputNumEL.value);

    if (guess) {
        if (guess != secretNum) {
            if (score > 1) {
                score--;
                scoreEL.textContent = score;

                msgEL.textContent = guess > secretNum ? "Too high" : "Too low";
                scoreEL.textContent = 0;
            }
            else {
                displayMessage("You've lossed the game :(");
                containerEL.style.backgroundColor = "#fff";
                scoreEL.textContent = 0;
            }
        }
        else {
            hideNumEL.textContent = secretNum;
            hideNumEL.style.width = "50%";
            hideNumEL.style.transition = "all 0.5s ease-in";
            containerEL.style.backgroundColor = "#eed8d3";
            displayMessage("Congratulations you've won the game :)");
            highScoreEL.textContent=score;
        }
    }
    else {
        displayMessage("Please enter the number : ");
    }
});

const displayMessage=function(message){
    msgEL.textContent=message;
}

btnPlayEL.addEventListener('click' , ()=>
{
    score=20;
    secretNum=Math.floor(Math.random()*20)+1;
    scoreEL.textContent=score;
    hideNumEL.textContent="?";
    hideNumEL.style.width="25%";
    hideNumEL.style.transition="all 0.5s ease-in";
    inputNumEL.value="";
    containerEL.style.backgroundColor="#ddd";
    displayMessage("Start Guessing🤔")
})