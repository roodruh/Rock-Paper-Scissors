function playGame() {

    function playRound() {

        var playerChoice = prompt("Rock/Paper/Scissors: ");
        playerChoice = playerChoice.toLowerCase();

        switch(playerChoice) {
            case "rock":
                playerChoice = "r";
                break;
            case "paper":
                playerChoice = "p";
                break;
            case "scissors":
                playerChoice = "s";
                break;
        }

        var computerChoice = Math.floor(Math.random() * 3);
    
        switch(computerChoice) {
            case 0:
                computerChoice = "r";
                break;
            case 1:
                computerChoice = "p";
                break;
            case 2:
                computerChoice = "s";
                break;
        }

        if (playerChoice == "r") {
            if (computerChoice == "r") {
                console.log("We both chose Rock! Tie!");
                decision = "t";
            }
            if (computerChoice == "p") {
                console.log("Paper beats Rock! You Lose!");
                decision = "l";
            }
            if (computerChoice == "s") {
                console.log("Rock beats Scissors! You Win!");
                decision = "w";
            }
        }

        if (playerChoice == "p") {
            if (computerChoice == "r") {
                console.log("Paper beats Rock! You Win!");
                decision = "w";
            }
            if (computerChoice == "p") {
                console.log("We both chose Paper! Tie!");
                decision = "t";
            }
            if (computerChoice == "s") {
                console.log("Scissors beat Paper! You Lose!");
                decision = "l";
            }
        }

        if (playerChoice == "s") {
            if (computerChoice == "r") {
                console.log("Rock beats Scissors! You Lose!");
                decision = "l";
            }
            if (computerChoice == "p") {
                console.log("Scissors beat Paper! You Win!");
                decision = "w";
            }
            if (computerChoice == "s") {
                console.log("We both chose paper! Tie!");
                decision = "t";
            }
        }

        return decision;
    }

    var  win = 0,
        lose = 0,
         tie = 0;

    for(let i = 0; i < 5; i++) {
        playRound();
        if (decision == "w") {
            win++;
        }
        if (decision == "l") {
            lose++;
        }
        if(decision == "t") {
            tie++;
        }
    }

    if (win >= 3) {
        console.log("Congratulations! You Won the Game!");
    }
    if (lose >= 3) {
        console.log("Haha! You Lost the Game!");
    }
    if (win == 2) {
        if (tie == 1) {
            console.log("Huh! We both Tied!");
        }
        if (tie == 2 || tie == 3) {
            console.log("Congratulations! You Won the Game!");
        }
    }
    if (win == 1) {
        if (tie == 4) {
            console.log("Congratulations! You Won the Game!");
        }
        if (tie == 3) {
            console.log("Huh! We both Tied!");
        }
        else {
            console.log("Haha! You Lost the Game!");
        }
    }
}



playGame();