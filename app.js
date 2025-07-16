let boxe = document.querySelectorAll(".boxes");
let resetbtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".mesg");
let valueo = true;
const boxarr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetgame = () => {
    valueo = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxe.forEach((box) => {
    box.addEventListener("click", () => {
        if (valueo)
        {
            box.innerText = "O";
            valueo = false;
        }
        else
        {
            box.innerText = "X";
            valueo = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableboxes = () => {
    for (let box of boxe) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for (let box of boxe) {
        box.disabled = false;
        box.innerText = "";
    }   
};
const checkwinner = () => {
    for (let pattern of boxarr) {
        let pos1val = boxe[pattern[0]].innerText;
        let pos2val = boxe[pattern[1]].innerText;
        let pos3val = boxe[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                msg.innerText = `WINNER IS ${pos1val}`;
                msgcontainer.classList.remove("hide");
                disableboxes();
            }
        }
    }
};
resetbtn.addEventListener("click", resetgame);
