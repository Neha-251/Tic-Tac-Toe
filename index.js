const ting1 = new Audio("./music/ting1.wav")
const ting_win = new Audio("./music/ting-win.wav")

let theme = document.getElementById("theme");

let gameCont = document.getElementById("gameCont");


let flag_theme = false;

theme.addEventListener("click", ()=> {

    if(flag_theme === false){
        gameCont.style.border = "deeppink";
        gameCont.style.color  = "aquamarine";
    
        gameCont.style.backgroundColor = "rgb(23,21,68)";
        reset.style.color = "aquamarine";
        theme.style.color = "aquamarine";

        flag_theme = true;
    }

    else {
        gameCont.style.border = "rgb(23,21,68)";
        gameCont.style.color  = "rgb(23,21,68)";
    
        gameCont.style.backgroundColor = "aquamarine";
        reset.style.color = "rgb(23,21,68)";
        theme.style.color = "rgb(23,21,68)";
        flag_theme = false;

    }

})


let cont = document.querySelector(".cont");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let div4 = document.querySelector(".div4");
let div5 = document.querySelector(".div5");
let div6 = document.querySelector(".div6");
let div7 = document.querySelector(".div7");
let div8 = document.querySelector(".div8");
let div9 = document.querySelector(".div9");

let div1_text = div1.innerHTML;
console.log('div1_text', div1_text)
let div2_text = div2.innerHTML;
let div3_text = div3.innerHTML;
let div4_text = div4.innerHTML;
let div5_text = div5.innerHTML;
let div6_text = div6.innerHTML;
let div7_text = div7.innerHTML;
let div8_text = div8.innerHTML;
let div9_text = div9.innerHTML;

let reset = document.getElementById("reset");



let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let turn = "✖";

const changeTurn = () => {
    ting1.play();
    return turn === "✖" ? "0" : "✖";
}

const checkWin = (board) => {
    let reset = document.getElementById("reset");
    let congrats = document.getElementById("congrats");

    let win = document.getElementById("win");
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] !== "") {
        win.innerHTML = `${turn} Won the Game`;
        ting_win.play();
        console.log('turn', turn);
        reset.innerHTML = "Start New";
        document.getElementById("info").innerHTML = "";
        flag1 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
        flag7 = true;
        flag8 = true;
        flag9 = true;
        flag2 = true;
        congrats.style.display = "block";

    }
    else if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0] !== "") {
        win.innerHTML = `${turn} Won the Game`; console.log('turn', turn)
        ting_win.play();
        document.getElementById("info").innerHTML = "";
        reset.innerHTML = "Start New";
        flag1 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
        flag7 = true;
        flag8 = true;
        flag9 = true;
        flag2 = true;
        congrats.style.display = "block";

    }
    else if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[1][1] !== "") {
        win.innerHTML = `${turn} Won the Game`; console.log('turn', turn)
        ting_win.play();
        reset.innerHTML = "Start New";
        document.getElementById("info").innerHTML = "";
        flag1 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
        flag7 = true;
        flag8 = true;
        flag9 = true;
        flag2 = true;
        congrats.style.display = "block";
    }
    else if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[2][2] !== "") {
        win.innerHTML = `${turn} Won the Game`; console.log('turn', turn)
        ting_win.play();
        reset.innerHTML = "Start New";
        document.getElementById("info").innerHTML = "";
        flag1 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
        flag7 = true;
        flag8 = true;
        flag9 = true;
        flag2 = true;
        congrats.style.display = "block";

    }
    else if (board[0][2] === board[1][1] && board[2][0] === board[0][2] && board[1][1] !== "") {
        win.innerHTML = `${turn} Won the Game`; console.log('turn', turn)
        ting_win.play();
        reset.innerHTML = "Start New";
        document.getElementById("info").innerHTML = "";
        flag1 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
        flag7 = true;
        flag8 = true;
        flag9 = true;
        flag2 = true;
        congrats.style.display = "block";
    }
    else if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][1] !== "") {
        win.innerHTML = `${turn} Won the Game`; console.log('turn', turn)
        ting_win.play();
        reset.innerHTML = "Start New";
        document.getElementById("info").innerHTML = "";
        flag1 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
        flag7 = true;
        flag8 = true;
        flag9 = true;
        flag2 = true;
        congrats.style.display = "block";
    }
    else if (board[2][2] === board[2][1] && board[2][0] === board[2][2] && board[2][2] !== "") {
        win.innerHTML = `${turn} Won the Game`; console.log('turn', turn)
        ting_win.play();
        reset.innerHTML = "Start New";
        document.getElementById("info").innerHTML = "";
        flag1 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
        flag7 = true;
        flag8 = true;
        flag9 = true;
        flag2 = true;
        congrats.style.display = "block";
    }
    else if (board[2][2] === board[1][1] && board[0][0] === board[2][2] && board[2][2] !== "") {
        win.innerHTML = `${turn} Won the Game`; console.log('turn', turn)
        ting_win.play();
        reset.innerHTML = "Start New";
        document.getElementById("info").innerHTML = "";
        flag1 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
        flag7 = true;
        flag8 = true;
        flag9 = true;
        flag2 = true;
        congrats.style.display = "block";
    }
    else if (board[0][0] !== "" && board[1][0] !== "" && board[2][0] !== "" && board[0][1] !== "" && board[0][2] !== "" &&
        board[1][1] !== "" && board[1][2] !== "" && board[2][1] !== "" && board[2][2] !== "") {
        win.innerHTML = "This Game is a Tie";
        reset.innerHTML = "Start New";
        document.getElementById("info").innerHTML = "";
        congrats.style.display = "block";
    }

    if(congrats.style.display === "block"){
        setTimeout(()=> {
            congrats.style.display = "none";
        }, 5000)
    }


}


reset.addEventListener("click", () => {


    div1.innerHTML = "";
    div2.innerHTML = "";
    div3.innerHTML = "";
    div4.innerHTML = "";
    div5.innerHTML = "";
    div7.innerHTML = "";
    div8.innerHTML = "";
    div9.innerHTML = "";
    div6.innerHTML = "";


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            board[i][j] = "";
        }
    }
    alert("Game has been reset");

    flag1 = false;
    flag3 = false;
    flag4 = false;
    flag5 = false;
    flag6 = false;
    flag7 = false;
    flag8 = false;
    flag9 = false;
    flag2 = false;
})



let flag1 = false;

div1.addEventListener("click", () => {

    console.log('flag1', flag1)
    if (flag1 === false) {
        

        board[0][0] = turn;
        div1.innerHTML = turn;
        checkWin(board);
        reset.innerHTML = "Reset";
        turn = changeTurn();
        document.getElementById("info").innerHTML = `This Turn is For ${turn}`;
        ting1.play();
        flag1 = true;
    }

})

let flag2 = false;
div2.addEventListener("click", () => {

    if (flag2 === false) {
        board[0][1] = turn;
        div2.innerHTML = turn;
        checkWin(board);
        reset.innerHTML = "Reset";
        turn = changeTurn();
        document.getElementById("info").innerHTML = `This Turn is For ${turn}`;

        flag2 = true;
    }

})

let flag3 = false;
div3.addEventListener("click", () => {

    if (flag3 === false) {
        board[0][2] = turn;
        div3.innerHTML = turn;
        checkWin(board);
        reset.innerHTML = "Reset";
        turn = changeTurn();
        
        document.getElementById("info").innerHTML = `This Turn is For ${turn}`;
        flag3 = true;
    }

})

let flag4 = false;
div4.addEventListener("click", () => {

    if (flag4 === false) {
        board[1][0] = turn;
        div4.innerHTML = turn;
        checkWin(board);
        reset.innerHTML = "Reset";
        turn = changeTurn();
        document.getElementById("info").innerHTML = `This Turn is For ${turn}`;
        flag4 = true;
    }

})

let flag5 = false;
div5.addEventListener("click", () => {

    if (flag5 === false) {
        board[1][1] = turn;
        div5.innerHTML = turn;
        checkWin(board);
        reset.innerHTML = "Reset";
        turn = changeTurn();
        document.getElementById("info").innerHTML = `This Turn is For ${turn}`;
        flag5 = true;
    }

})

let flag6 = false;
div6.addEventListener("click", () => {

    if (flag6 === false) {
        board[1][2] = turn;
        div6.innerHTML = turn;
        checkWin(board);
        reset.innerHTML = "Reset";
        turn = changeTurn();
        document.getElementById("info").innerHTML = `This Turn is For ${turn}`;
        flag6 = true;
    }

})

let flag7 = false;
div7.addEventListener("click", () => {

    if (flag7 === false) {
        board[2][0] = turn;
        div7.innerHTML = turn;
        checkWin(board);
        reset.innerHTML = "Reset";
        turn = changeTurn();
        document.getElementById("info").innerHTML = `This Turn is For ${turn}`;
        flag7 = true;
    }

})

let flag8 = false;
div8.addEventListener("click", () => {

    if (flag8 === false) {
        board[2][1] = turn;
        div8.innerHTML = turn;
        checkWin(board);
        reset.innerHTML = "Reset";
        turn = changeTurn();
        document.getElementById("info").innerHTML = `This Turn is For ${turn}`;
        flag8 = true;
    }

})

let flag9 = false;
div9.addEventListener("click", () => {

    if (flag9 === false) {
        board[2][2] = turn;
        console.log('div9_text', div9_text)
        div9.innerHTML = turn;
        checkWin(board);
        reset.innerHTML = "Reset";
        turn = changeTurn();
        document.getElementById("info").innerHTML = `This Turn is For ${turn}`;
        flag9 = true;
    }

})



console.log(board);




