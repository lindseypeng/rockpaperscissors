console.log("Hello, World!")

function computerPlay() {
    const game = ["rock","paper","scissors"];

    const random = Math.floor(Math.random() * game.length);
    return(game[random]);
  }

function playRound(playerSelection,computerSelection) {
    // your code here!
    playerSelection=playerSelection.toLowerCase();

    switch (true){
      //same score
      case playerSelection == computerSelection:
        return(0)
      
      case playerSelection == 'rock':
        if (computerSelection == 'scissors'){
          return(1)
        } else {
          return(-1)
        }
      
      case playerSelection =="paper":
        if (computerSelection == "rock"){
          return(1)
        } else {
          return(-1)
          }
        
      
      case playerSelection == "scissors":
        if (computerSelection == 'paper'){
          return(1)
        } else {
          return(-1)
        }
    }

  }

function game(){

  let scoreboard = 0;

  for (let i=0; i<5; i++){
    const playerSelection = window.prompt("enter rock, paper, or scissors", "rock");
    //need to add catch here if user entered the wrong strings
    
    const computerSelection = computerPlay();
    let result = playRound(playerSelection,computerSelection);
    
    switch(true){
      case result == 0:
        console.log(`Both players selected ${playerSelection}. It is a tie!`);
        break;
      
      case result == 1:
        console.log(`Your ${playerSelection} win over ${computerSelection}`);
        break;
      
      case result == -1:
        console.log(`Your ${playerSelection} lost to ${computerSelection}`);
        break;
    }

    scoreboard=scoreboard+result;
    console.log(`your score now is ${scoreboard}`)


    }
  if (scoreboard>0){
    console.log(`You final score is ${scoreboard}, you won against Computer!`);
  } else if (scoreboard == 0){
    console.log(`You final score is ${scoreboard},Tie?! that is more impressive than winning`);
  } else{
    console.log(`You final score is ${scoreboard},Can't believe you lost..`);
  }
}

game();