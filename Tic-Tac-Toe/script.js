let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winMsg = document.querySelector("#win-msg");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");


const winPatterns = [[0, 1, 2],
                     [3, 4, 5],
                     [6, 7, 8],
                     [0, 3, 6],
                     [1, 4, 7],
                     [2, 5, 8],
                     [0, 4, 8],
                     [2, 4, 6]                    
];

let turnO = true;
let cnt = 0;
let win = false;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.style.color = "white";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        // console.dir(box.innerHTML);
        // box.innerHTML = "<span style='color: 'white';'>Arjun</span>";
        box.disabled = true;
        win = checkWinner();
        cnt++;
        if(cnt===9 && win===false) {
            winMsg.innerText = `DRAWWW`;
            msgContainer.classList.remove("hide");
        }
    });
});



resetBtn.addEventListener("click", () => {
    cnt = 0;
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    turnO = turnO===true? false: true;
});

newGameBtn.addEventListener("click", () => {
    cnt = 0;
    msgContainer.classList.add("hide");
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    winMsg.innerText = `Congrats, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!="") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;
};