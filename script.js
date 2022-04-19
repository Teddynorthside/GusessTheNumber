'use strict';

const game = function () {

    document.querySelector('.number').textContent = "?"
    document.querySelector('.message').
    textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector('body').style.backgroundColor = '#222';

    const randNum = Math.trunc(Math.random()* 101);
    let currScore = 20;
    document.querySelector('.score').textContent = currScore;
    console.log(randNum);

    function exicution () {
        const guessNum = Number(document.querySelector(".guess").value);
        if(currScore !== 0){
            if((guessNum < 0) || (guessNum > 100)) {
                document.querySelector('.message').
                textContent = "⛔🛑🚫 guess a number between 0 & 100";
                document.querySelector('.score').textContent = currScore;
                document.querySelector(".guess").value = "";
            }else {
                if(guessNum < (0.5 * randNum)) {
                    document.querySelector('.message').
                    textContent = "⏫ too low guees something higher";
                    currScore --;
                    document.querySelector('.score').textContent = currScore;
                    document.querySelector(".guess").value = "";
                }
                if(guessNum > ((0.5 * randNum) + randNum)) {
                    document.querySelector('.message').
                    textContent = "⏬ too high guees something lowerr";
                    currScore --;
                    document.querySelector('.score').textContent = currScore;
                    document.querySelector(".guess").value = "";
                }
                if(guessNum > (0.5 * randNum) && guessNum < randNum) {
                    document.querySelector('.message').
                    textContent = "🔼 guess something higher";
                    currScore --;
                    document.querySelector('.score').textContent = currScore;
                    document.querySelector(".guess").value = "";
                }
                if(guessNum < ((0.5 * randNum) + randNum) && guessNum > randNum) {
                    document.querySelector('.message').
                    textContent = "🔽 guees something lower";
                    currScore --;
                    document.querySelector('.score').textContent = currScore;
                    document.querySelector(".guess").value = "";
                }
                if(guessNum === randNum){
                    document.querySelector('.message').
                    textContent = "🎉✨ Congrats!! you have chosen the right answer";
                    if(highscore < currScore) {
                        highscore = currScore
                        document.querySelector(".highscore").textContent = highscore;
                    }
                    document.querySelector('.number').textContent = randNum;
                    document.querySelector('body').style.backgroundColor = '#60b347';
                    document.querySelector('.check').removeEventListener('click',exicution);
                }
            }
        }else {
            document.querySelector('.message').textContent = "Game Over😢"
            document.querySelector('.check').removeEventListener('click',exicution);
        }
        
        
    }

    document.querySelector(".check").
    addEventListener("click",exicution);
    


    
}
game();
document.querySelector('.again').addEventListener('click', game)
let highscore = 0;
