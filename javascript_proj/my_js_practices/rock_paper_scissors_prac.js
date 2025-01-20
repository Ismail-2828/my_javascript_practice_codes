computerMove = ''


let score = JSON.parse(localStorage.getItem('score')) || {
             win_counter : 0,
             lose_counter: 0,
             tie_counter : 0,
    };
    
function computerDecision() {
    computerChoice = Math.random()
    if (computerChoice<=1/3){
        computerMove = 'rock';
    }
    else if (computerChoice>1/3 && computerChoice<2/3) {
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissors';
    }
    return computerMove;
}

function result(myMove){
    let Result ='';
    
    if(computerMove === myMove){
        Result = 'Tie';
        score['tie_counter']++;
            }
    else if ((computerMove==='rock' && myMove ==='paper') || (computerMove==='paper' && myMove==='scissors') || (computerMove==='scissors' && myMove==='rock')){
        Result = 'Win';
        score['win_counter']++;
    }
    else {
        Result = 'Lose';
        score['lose_counter']++;
    }
localStorage.setItem('score',JSON.stringify(score));

document.querySelector('.js_result_outcome').innerHTML = `${Result}`

document.querySelector('.js_result').innerHTML = `Win:${score['win_counter']} | Lose:${score['lose_counter']} | Tie:${score['tie_counter']}`

document.querySelector('.js_player_image').innerHTML = `Player:<img class="images" src="icons/${myMove}-emoji.png"> | Computer : <img class="images" src="icons/${computerMove}-emoji.png">`

}
function resetScore(){
   score = {
             win_counter : 0,
             lose_counter: 0,
             tie_counter : 0,
    };
document.querySelector('.js_result').innerHTML = `Win:${score['win_counter']} | Lose:${score['lose_counter']} | Tie:${score['tie_counter']}`
}

document.querySelector('.js_resetButton').addEventListener('click', function(){
    resetScore();
})

function autoplay(){
    computerMove1 = computerDecision();
    result(computerMove1);
}


document.querySelector('.js_autoplay').addEventListener('click', function(){
    autoplay();
})
