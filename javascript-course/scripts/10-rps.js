let score = JSON.parse(localStorage.getItem
        ('score')) || {  /*|| default operator*/
          wins: 0,
          losses: 0,
          ties: 0
        }

        updateScoreElement();

        /*if score is null, !score is true*/
      /*if (!score) { 
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        }
      }*/

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        document.querySelector('.js-moves')
          .innerHTML = null;

        document.querySelector('.js-result')
          .innerHTML = 'Score Reset.'
        /*
        alert(`Score reset.
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
        */
        updateScoreElement()
      }

      function playGame(playerMove) {
        const computerMove = pickComputerMove()

        let result = ''

        if (playerMove === computerMove) {
          result = 'Tie.';
        } else if (playerMove === 'rock') {
          if (computerMove === 'scissors') {
            result = 'You win.';
          }
          if (computerMove === 'paper') {
            result = 'You lose.';
          }
        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          }
          if (computerMove === 'scissors') {
            result = 'You lose.';
          }
        } else if (playerMove === 'scissors') {
          if (computerMove === 'paper') {
            result = 'You win.';
          }
          if (computerMove === 'rock') {
            result = 'You lose.';
          }
        }

        if (result === 'Tie.') {
          score.ties += 1
        } else if (result === 'You win.') {
          score.wins += 1
        } else if (result === 'You lose.') {
          score.losses += 1
        }

        /*local storage only takes strings*/
        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();

        updateResultElement(result);
        updateMovesElement(playerMove, computerMove);

        /*
        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
        */
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }
      function updateResultElement(result) {
        document.querySelector('.js-result')
          .innerHTML = result;
      }
      function updateMovesElement(playerMove, computerMove) {
        document.querySelector('.js-moves')
          .innerHTML = `
            You <img src="icons/${playerMove}-emoji.png" class="move-icon"> <img src="icons/${computerMove}-emoji.png" class="move-icon"> Computer
          `
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'rock'
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper'
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
          computerMove = 'scissors'
        }
        return computerMove
      }