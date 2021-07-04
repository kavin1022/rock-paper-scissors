function createRipple(event){
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter/2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple"); 

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
    ripple.remove();
    }
    button.appendChild(circle);
}
function playRound(playerSelection){
    /* 1 equals player win, 0 equals computer win, 2 equals draw*/
    computerSelection = computerPlay()
    if (playerSelection == "paper" && computerSelection == "rock"){
        return [1, "You choice: paper, Computer's choice: rock. Paper beats rock, you win this round"];
    }

    if (playerSelection == "paper" && computerSelection == "scissors"){
        return [0, "You choice: paper, Computer's choice: scissors. Scissors beats paper, you lose this round"];
    }

    if (playerSelection == "rock" && computerSelection == "scissors"){
        return [1, "You choice: rock, Computer's choice: scissors. Rock beats scissors, you win this round"];
    }

    if (playerSelection == "rock" && computerSelection == "paper"){
        return[0, "You choice: rock, Computer's choice: paper. Paper beats rock, you lose this round"];
    }

    if (playerSelection == "scissors" && computerSelection == "paper"){
        return [1, "You choice: scissors, Computer's choice: paper. Scissors beats paper, you win this round"];
    }

    if (playerSelection == "scissors" && computerSelection == "rock"){
        return [0, "You choice: scissors, Computer's choice: rock. Rock beats scissors, you lose this round"];
    }

    if (playerSelection == computerSelection){
        return [2, "Draw! Keep Playing!"];
    }
}

function computerPlay(){
    const num = Math.floor(Math.random() * 3);
    switch(num){
        case 0: {
            return "rock";
        }
        
        case 1: {
            return "paper";
        }

        case 2: {
            return "scissors";
        }
    }
}

function sliceText(text){
    const index = text.indexOf(".");
    const decisionText = text.substring(0, index + 1);
    const resultText = text.substring(index + 2);
    if (index == -1){
        return [text];
    }
    return [decisionText, resultText]
}

function updateTextArea(roundResult){
    const currentRound = document.querySelector("#current-round");
    currentRound.innerHTML = "";
    let decisionText = document.createElement('p');
    let resultText = document.createElement('p');
    decisionResult = sliceText(roundResult[1]);
    decisionText.textContent = (decisionResult[0]);
    resultText.textContent = (decisionResult[1])
    currentRound.appendChild(decisionText);
    currentRound.appendChild(resultText);
}

function updateScoreBoard(roundResult){
    if (roundResult[0] == 0){
        let computer = document.getElementById("computer-result");
        let newScore = parseInt(computer.textContent);
        computer.innerHTML = newScore + 1;
    }
    if (roundResult[0] == 1){
        let player = document.getElementById("player-result");
        let newScore = parseInt(player.textContent);
        player.innerHTML = newScore + 1;
    }
}

function main(){
    const currentRound = document.querySelector("#current-round")
    const total = document.querySelector("#total")
    const buttons = document.querySelectorAll('button');
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let roundResult = playRound(button.id);
            updateTextArea(roundResult);
            updateScoreBoard(roundResult);
        });
    });

    const buttonsRipple = document.getElementsByTagName("button");
    for (const button of buttonsRipple) {
        button.addEventListener("click", createRipple);
    }

}

main()