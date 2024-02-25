const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-btn');
const newBtn = document.querySelector('#new-btn');
const msgContainer = document.querySelector('.msg-container');
const msg = document.querySelector('#msg');

let turn0 = true;

const resetGame = () => {
  turn0 = true;
  boxEnable();
  msgContainer.classList.add('hide');
};
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    // console.log('clciked');

    if (turn0) {
      box.innerText = 'X';
      turn0 = false;
    } else {
      box.innerText = 'O';
      turn0 = true;
    }
    box.disabled = true;

    checkWinPatterns();
  });
});

const boxDisable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const boxEnable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
};

const showWinner = (winner) => {
  msg.innerText = `🙌🎇🎈 The Winner Is ${winner} 🙌🎇🎈`;
  msgContainer.classList.remove('hide');
};
function checkWinPatterns() {
  for (let patterns of winPatterns) {
    // console.log(patterns[0], patterns[1], patterns[2]);
    // console.log(boxes[patterns[0]], boxes[patterns[1]], boxes[patterns[2]]);
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;

    if (pos1 != '' && pos2 != '' && pos3 != '') {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log('winner', pos1);
        showWinner(pos1);
        boxDisable();
      }
    }
  }
}

resetBtn.addEventListener('click', resetGame);
newBtn.addEventListener('click', resetGame);
