function playRound(playerSelection){
    /* 1 equals player win, 0 equals computer win, 2 equals draw*/
    computerSelection = computerPlay()
    if (playerSelection == "paper" && computerSelection == "rock"){
        return [1, "You choice: paper, computer's choice: rock. Paper beats rock, you win this round"]
    }

    if (playerSelection == "paper" && computerSelection == "scissors"){
        return [0, "You choice: paper, computer's choice: scissors. Scissors beats paper, you lose this round"]
    }

    if (playerSelection == "rock" && computerSelection == "scissors"){
        return [1, "You choice: rock, computer's choice: scissors. Rock beats scissors, you win this round"]
    }

    if (playerSelection == "rock" && computerSelection == "paper"){
        return[0, "You choice: rock, computer's choice: paper. Paper beats rock, you lose this round"]
    }

    if (playerSelection == "scissors" && computerSelection == "paper"){
        return [1, "You choice: scissors, computer's choice: paper. Scissors beats paper, you win this round"]
    }

    if (playerSelection == "scissors" && computerSelection == "rock"){
        return [0, "You choice: scissors, computer's choice: rock. Rock beats scissors, you lose this round"]
    }

    if (playerSelection == computerSelection){
        return [2, "Draw! Keep Playing!"]
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
    const currentRound = document.querySelector("#current-round")
    const total = document.querySelector("#total")
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            currentRound.innerHTML = ""
            let roundResult = playRound(button.id)
            let notoficationText = document.createElement('p');
            notoficationText.textContent = roundResult[1]
            currentRound.appendChild(notoficationText)
        });
    });

}

main()