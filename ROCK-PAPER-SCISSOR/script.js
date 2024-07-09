
function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = ' ';

    //scissor part of the code
    if(playerMove==='scissor'){
        if(computerMove === 'rock'){
            result='you lose.';
        }else if(computerMove === 'paper'){
            result='you win.';
        }else if(computerMove === 'scissor'){
            result='tie.';
        }
    }
    // paper part of the code
    else if(playerMove==='paper'){
        if(computerMove === 'rock'){
        result='you win.';
    }else if(computerMove === 'paper'){
        result='tie.';
    }else if(computerMove === 'scissor'){
        result='you lose.';
    }
    }
    // rock part of the code
    else if(playerMove=='rock'){
        if(computerMove === 'rock'){
        result='tie';
    }else if(computerMove === 'paper'){
        result='you lose.';
    }else if(computerMove === 'scissor'){
        result='you win.';
    }
    }

   
    alert(`You Picked ${playerMove} . Computer Picked ${computerMove}.So You ${result}`);
  }



  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = " "; //empty string

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissor";
    }

    return computerMove;
  }