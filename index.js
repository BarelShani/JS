import "./styles.css";

const message = "Tic Tac Toe";

document.querySelector("#header").innerHTML = message;
const myNodelist = document.querySelectorAll("td");
document.getElementById("myBtn").addEventListener("click", resetGame);

function resetGame() {
  myNodelist.forEach((item) => {
    item.innerHTML = "";
  });
}
let nextTurn = "X";
const test = document.querySelectorAll("td");
test.forEach((item) => {
  item.addEventListener("click", (e) => {
    // e.target;
    if (item.childNodes.length == 0) {
      item.innerHTML = nextTurn;
      changeTurn();
    }
    let winInfo = win();
    if (winInfo === true) {
      alert("The winner is: " + item.innerHTML);
      resetGame();
    }
  });
});

function changeTurn() {
  if (nextTurn == "X") {
    nextTurn = "O";
  } else {
    nextTurn = "X";
  }
}

function win() {
  let _1 = document.getElementById("1").innerHTML;
  let _2 = document.getElementById("2").innerHTML;
  let _3 = document.getElementById("3").innerHTML;
  let _4 = document.getElementById("4").innerHTML;
  let _5 = document.getElementById("5").innerHTML;
  let _6 = document.getElementById("6").innerHTML;
  let _7 = document.getElementById("7").innerHTML;
  let _8 = document.getElementById("8").innerHTML;
  let _9 = document.getElementById("9").innerHTML;

  let condition_1 = _1 != "" && _1 === _2 && _3 === _1;
  let condition_2 = _4 != "" && _4 === _5 && _6 === _4;
  let condition_3 = _7 != "" && _7 === _8 && _9 === _7;
  let condition_4 = _1 != "" && _1 === _4 && _7 === _1;
  let condition_5 = _1 != "" && _1 === _5 && _6 === _1;
  let condition_6 = _1 != "" && _1 === _6 && _9 === _1;
  let condition_7 = _1 != "" && _1 === _5 && _9 === _1;
  let condition_8 = _3 != "" && _3 === _5 && _7 === _3;
  let condition_9 = _2 != "" && _2 === _5 && _8 === _2;
  let condition_10 = _3 != "" && _3 === _6 && _9 === _3;

  let conditionsArray = [
    condition_1,
    condition_2,
    condition_3,
    condition_4,
    condition_5,
    condition_6,
    condition_7,
    condition_8,
    condition_9,
    condition_10,
  ];
  let info = false;
  conditionsArray.forEach((el) => {
    if (el === true) {
      info = true;
      return;
    }
  });
  return info;
}
