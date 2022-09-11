const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput==='rock' ||userInput==='paper' || userInput==='scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('sorry, enter a valid choice');
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  case 2: 
    return 'scissors';
    break;
}
};

const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === 'bomb'){
      return 'You won by nuking the game!!!';
    }
  if(userChoice === computerChoice){
    return 'The game is a tie.';
  }
  if(userChoice ==='rock'){
    if(computerChoice ==='paper'){
      return 'AI won';
    }
    else{
      return 'You won';
    }
  }
  if(userChoice ==='paper'){
    if(computerChoice ==='scissors'){
      return 'AI won';
    }
    else{
      return 'You won';
    }
  }
  if(userChoice ==='scissors'){
    if(computerChoice ==='rock'){
      return 'AI won';
    }
    else{
      return 'You won';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You made a ${userChoice} choice!`);
  console.log(`AI made a ${computerChoice} choice!`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

