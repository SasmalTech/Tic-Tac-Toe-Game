const boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn")
let countBox = 0;

let currVal0 = true;

const winPattrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const drawMatch = () => {
    msg.innerText = `No Winner, It's a Draw!`;
    msgContainer.classList.remove("hide");
    countBox = 0;
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    countBox = 0;
};

const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const checkWinner = () => {
    for(let pattern of winPattrens) {
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos2Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disableBoxes();     
                showWinner(pos1Val);          
            }
        }
    }
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        countBox = countBox + 1;
        if (currVal0 === true) {
            box.innerText = "O";
            box.style.color = "#457B9D";
            currVal0 = false;
            
        } else {
            box.innerText = "X";
            box.style.color = "#E63946";
            currVal0 = true;
        }
        box.disabled = true;
        checkWinner();
        if (countBox === 9) {
            drawMatch();
        }
    })
});

const resetGame = () => {
    countBox = 0;
    currVal0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);