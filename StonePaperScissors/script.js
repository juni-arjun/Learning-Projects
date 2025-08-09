let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userMsgPara = document.querySelector("#user-score");
let compMsgPara = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

const drawGame = () => {
    msg.innerText = "Game was draw! Play Again!!";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userMsgPara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compMsgPara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "scissors"? true: false;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "rock"? true: false;
        }
        else {
            userWin = compChoice === "paper"? true: false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});