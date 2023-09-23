let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    ties: 0,
    losses: 0,
  };

  writeGeneralScores();

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";

    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You lose";
      } else if (computerMove === "paper") {
        result = "You win";
      } else {
        result = "Tie";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie";
      } else if (computerMove === "paper") {
        result = "You lose";
      } else {
        result = "You win";
      }
    } else {
      if (computerMove === "rock") {
        result = "You win";
      } else if (computerMove === "paper") {
        result = "Tie";
      } else {
        result = "You lose";
      }
    }
    function pickComputerMove() {
      let computerMove = "";
      const randomNumber = Math.random();

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
      } else {
        computerMove = "scissors";
      }

      return computerMove;
    }
    if (result === "You win") {
      score.wins += 1;
    } else if (result === "You lose") {
      score.losses += 1;
    } else if (result === "Tie") {
      score.ties += 1;
    }
    document.querySelector(".result").innerHTML = result + '.';
    document.querySelector(".moves").innerHTML = `You
    <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
    <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
    Computer`
    
    localStorage.setItem("score", JSON.stringify(score));

    /* alert(`You picked '${playerMove}'. Computer picked '${computerMove}'. Therefore, ${result}
  Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`); */
  }

  function writeGeneralScores() {
    document.querySelector(
      ".total-score"
    ).innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
  }