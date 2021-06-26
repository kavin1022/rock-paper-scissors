
function playRound(playerSelection, computerSelection){
    /* 1 equals player win, 0 equals computer win, 2 equals draw*/

    if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You choice: paper, computer's choice: rock")
        console.log("paper beats rock, you win this round")
        return 1
    }

    if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You choice: paper, computer's choice: scissors")
        console.log("scissors beats paper, you lose this round")
        return 0
    }

    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You choice: rock, computer's choice: scissors")
        console.log("rock beats scissors, you win this round")
        return 1
    }

    if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You choice: rock, computer's choice: paper")
        console.log("paper beats rock, you lose this round")
        return 0
    }

    if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You choice: scissors, computer's choice: paper")
        console.log("scissors beats paper, you win this round")
        return 1
    }

    if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You choice: scissors, computer's choice: rock")
        console.log("rock beats scissors, you lose this round")
        return 0
    }

    if (playerSelection == computerSelection){
        console.log("Draw! Keep Playing!")
        return 2
    }
}

function computerPlay(){
    const num = Math.floor(Math.random() * 3)
    switch(num){
        case 0: {
            return "rock"
        }
        
        case 1: {
            return "paper"
        }

        case 2: {
            return "scissors"
        }
    }
}

function main(){
    let i = 1
    let playerScore = 0
    let computerScore = 0

    while (playerScore <= 4){
        let playerSelection = prompt("What's your sign?")
        playerSelection = playerSelection.toLowerCase()
        const computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection)

        

        switch(result){
            case (0): {
                computerScore = computerScore + 1
                break
            }
            case (1): {
                playerScore = playerScore + 1
                break
            }
            case (2): continue
        }

        console.log("current score: you - " + playerScore + " computer - " + computerScore)
        console.log("")


        if (playerScore == 3){
            console.log("You Won")
            break
        }
        if (computerScore == 3){
            console.log("Computer Won")
            break
        }
    }
}

main()