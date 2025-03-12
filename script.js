let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomInd = Math.floor(Math.random() * 3);
  return options[randomInd];
  //rock,paper,scissors
}

const drawGame = () => {
  // console.log("Game was draw.")
  msg.innerText = "Draw. Play again."
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    // console.log("You win!");
    userScore++;
    userScoreCount.innerText = userScore;
    msg.innerText = `You win! your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    // console.log("You lose");
    compScore++;
    compScoreCount.innerText = compScore;
    msg.innerText = `You lose. ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";

  }
}

const playGame = (userChoice) => {
  // console.log(`User choice = ${userChoice}`);
  //Generate Computer choice 
  const comChoice = genCompChoice();
  // console.log(`Comp choice = ${comChoice}`);

  if (userChoice === comChoice) {
    //Draw
    drawGame();
  }
  else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = comChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
      //rock, scissors
      userWin = comChoice === "scissors" ? false : true;
    }
    else {
      //rock,paper
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, comChoice);
  }
}

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked", userChoice);
    playGame(userChoice);
  })
})