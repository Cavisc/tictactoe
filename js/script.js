const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const w = canvas.width;
const h = canvas.height;
const cellLength = w / 3;
const players = ["X", "O"];
let currentPlayer = players[Math.round(Math.random())];
let boardPos = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let win = false;
let tie = false;
const offSetY = canvas.offsetTop;
const offSetX = canvas.offsetLeft;

const modal = document.querySelector(".modal");
const infoCP = document.querySelector(".current-player");
infoCP.innerHTML = currentPlayer;

drawBoard(w, h);
function drawBoard(w, h) {
  ctx.fillStyle = "#f2f2f2";
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "#30343f";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.lineJoin = "bevel";

  for (let i = 1; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(10, cellLength * i);
    ctx.lineTo(w - 10, cellLength * i);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(cellLength * i, 10);
    ctx.lineTo(cellLength * i, h - 10);
    ctx.stroke();
    ctx.closePath();
  }
}

function drawX(w, h) {
  ctx.lineWidth = 8;

  ctx.beginPath();
  ctx.moveTo(w, h);
  ctx.lineTo(w + 60, h + 60);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(w, h + 60);
  ctx.lineTo(w + 60, h);
  ctx.stroke();
  ctx.closePath();
}

function drawO(w, h) {
  ctx.lineWidth = 7;

  ctx.beginPath();
  ctx.arc(w, h, 35, 0, 2 * Math.PI);
  ctx.stroke();
}

function fillBoard(x, y, CP) {
  // column 1
  if (x - offSetX > 0 && x - offSetX < cellLength) {
    // row 1
    if (y - offSetY > 0 && y - offSetY < cellLength) {
      if (boardPos[0][0] == 0) {
        if (CP == "X") {
          drawX(cellLength / 4 + 5, cellLength / 4 + 5);
          boardPos[0][0] = 1;
        } else {
          drawO(cellLength / 2, cellLength / 2);
          boardPos[0][0] = 2;
        }
        alternatePlayer();
      }
    }
    // row 2
    else if (y - offSetY > cellLength && y - offSetY < cellLength * 2) {
      if (boardPos[1][0] == 0) {
        if (CP == "X") {
          drawX(cellLength / 4 + 5, (cellLength / 4) * 5 + 5);
          boardPos[1][0] = 1;
        } else {
          drawO(cellLength / 2, (cellLength / 2) * 3);
          boardPos[1][0] = 2;
        }
        alternatePlayer();
      }
    }
    // row 3
    else if (y - offSetY > cellLength * 2 && y - offSetY < cellLength * 3) {
      if (boardPos[2][0] == 0) {
        if (CP == "X") {
          drawX(cellLength / 4 + 5, (cellLength / 4) * 9 + 5);
          boardPos[2][0] = 1;
        } else {
          drawO(cellLength / 2, (cellLength / 2) * 5);
          boardPos[2][0] = 2;
        }
        alternatePlayer();
      }
    }
  }
  // column 2
  else if (x - offSetX > cellLength && x - offSetX < cellLength * 2) {
    // row 1
    if (y - offSetY > 0 && y - offSetY < cellLength) {
      if (boardPos[0][1] == 0) {
        if (CP == "X") {
          drawX((cellLength / 4) * 5 + 5, cellLength / 4 + 5);
          boardPos[0][1] = 1;
        } else {
          drawO((cellLength / 2) * 3, cellLength / 2);
          boardPos[0][1] = 2;
        }
        alternatePlayer();
      }
    }
    // row 2
    else if (y - offSetY > cellLength && y - offSetY < cellLength * 2) {
      if (boardPos[1][1] == 0) {
        if (CP == "X") {
          drawX((cellLength / 4) * 5 + 5, (cellLength / 4) * 5 + 5);
          boardPos[1][1] = 1;
        } else {
          drawO((cellLength / 2) * 3, (cellLength / 2) * 3);
          boardPos[1][1] = 2;
        }
        alternatePlayer();
      }
    }
    // row 3
    else if (y - offSetY > cellLength * 2 && y - offSetY < cellLength * 3) {
      if (boardPos[2][1] == 0) {
        if (CP == "X") {
          drawX((cellLength / 4) * 5 + 5, (cellLength / 4) * 9 + 5);
          boardPos[2][1] = 1;
        } else {
          drawO((cellLength / 2) * 3, (cellLength / 2) * 5);
          boardPos[2][1] = 2;
        }
        alternatePlayer();
      }
    }
  }
  // column 3
  else if (x - offSetX > cellLength * 2 && x - offSetX < cellLength * 3) {
    // row 1
    if (y - offSetY > 0 && y - offSetY < cellLength) {
      if (boardPos[0][2] == 0) {
        if (CP == "X") {
          drawX((cellLength / 4) * 9 + 5, cellLength / 4 + 5);
          boardPos[0][2] = 1;
        } else {
          drawO((cellLength / 2) * 5, cellLength / 2);
          boardPos[0][2] = 2;
        }
        alternatePlayer();
      }
    }
    // row 2
    else if (y - offSetY > cellLength && y - offSetY < cellLength * 2) {
      if (boardPos[1][2] == 0) {
        if (CP == "X") {
          drawX((cellLength / 4) * 9 + 5, (cellLength / 4) * 5 + 5);
          boardPos[1][2] = 1;
        } else {
          drawO((cellLength / 2) * 5, (cellLength / 2) * 3);
          boardPos[1][2] = 2;
        }
        alternatePlayer();
      }
    }
    // row 3
    else if (y - offSetY > cellLength * 2 && y - offSetY < cellLength * 3) {
      if (boardPos[2][2] == 0) {
        if (CP == "X") {
          drawX((cellLength / 4) * 9 + 5, (cellLength / 4) * 9 + 5);
          boardPos[2][2] = 1;
        } else {
          drawO((cellLength / 2) * 5, (cellLength / 2) * 5);
          boardPos[2][2] = 2;
        }
        alternatePlayer();
      }
    }
  }
}

function alternatePlayer() {
  if (currentPlayer == players[0]) {
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
  infoCP.innerHTML = currentPlayer;
}

function verifyWin() {
  if (
    // rows
    (boardPos[0][0] == 1 && boardPos[0][1] == 1 && boardPos[0][2] == 1) ||
    (boardPos[1][0] == 1 && boardPos[1][1] == 1 && boardPos[1][2] == 1) ||
    (boardPos[2][0] == 1 && boardPos[2][1] == 1 && boardPos[2][2] == 1) ||
    // columns
    (boardPos[0][0] == 1 && boardPos[1][0] == 1 && boardPos[2][0] == 1) ||
    (boardPos[0][1] == 1 && boardPos[1][1] == 1 && boardPos[2][1] == 1) ||
    (boardPos[0][2] == 1 && boardPos[1][2] == 1 && boardPos[2][2] == 1) ||
    // diagonal
    (boardPos[0][0] == 1 && boardPos[1][1] == 1 && boardPos[2][2] == 1) ||
    (boardPos[0][2] == 1 && boardPos[1][1] == 1 && boardPos[2][0] == 1)
  ) {
    modal.innerHTML = `
    <div class="modal_content">
    <h1 class="modal_title">Player X win!</h1>
    <div class="image_winner x"></div>
    <div class="action_btns">
      <button class="btn back">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></i>
      </button>
      <button class="btn reset">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-cw"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></i>
      </button>
    </div>
  </div>
    `;
    modal.classList.add("visible");
    win = true;

    const back = document.querySelector(".back");
    const reset = document.querySelector(".reset");

    back.addEventListener("click", () => {
      modal.classList.remove("visible");
    });

    reset.addEventListener("click", () => {
      location.reload();
    });
  } else if (
    // rows
    (boardPos[0][0] == 2 && boardPos[0][1] == 2 && boardPos[0][2] == 2) ||
    (boardPos[1][0] == 2 && boardPos[1][1] == 2 && boardPos[1][2] == 2) ||
    (boardPos[2][0] == 2 && boardPos[2][1] == 2 && boardPos[2][2] == 2) ||
    // columns
    (boardPos[0][0] == 2 && boardPos[1][0] == 2 && boardPos[2][0] == 2) ||
    (boardPos[0][1] == 2 && boardPos[1][1] == 2 && boardPos[2][1] == 2) ||
    (boardPos[0][2] == 2 && boardPos[1][2] == 2 && boardPos[2][2] == 2) ||
    // diagonal
    (boardPos[0][0] == 2 && boardPos[1][1] == 2 && boardPos[2][2] == 2) ||
    (boardPos[0][2] == 2 && boardPos[1][1] == 2 && boardPos[2][0] == 2)
  ) {
    modal.innerHTML = `
    <div class="modal_content">
    <h1 class="modal_title">Player O win!</h1>
    <div class="image_winner o"></div>
    <div class="action_btns">
      <button class="btn back">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></i>
      </button>
      <button class="btn reset">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-cw"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></i>
      </button>
    </div>
  </div>
    `;
    modal.classList.add("visible");
    win = true;

    const back = document.querySelector(".back");
    const reset = document.querySelector(".reset");

    back.addEventListener("click", () => {
      modal.classList.remove("visible");
    });

    reset.addEventListener("click", () => {
      location.reload();
    });
  } else {
    let verifyCell = 0;
    for (rows of boardPos) {
      for (cell of rows) {
        if (cell != 0) verifyCell++;
      }
    }
    if (verifyCell == 9) {
      modal.innerHTML = `
    <div class="modal_content">
    <h1 class="modal_title">Tie!</h1>
    <div class="image_winner tie"></div>
    <div class="action_btns">
      <button class="btn back">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></i>
      </button>
      <button class="btn reset">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-cw"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></i>
      </button>
    </div>
  </div>
    `;
      modal.classList.add("visible");
      tie = true;

      const back = document.querySelector(".back");
      const reset = document.querySelector(".reset");

      back.addEventListener("click", () => {
        modal.classList.remove("visible");
      });

      reset.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}

function resetboard(w, h) {
  boardPos = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  win = false;
  tie = false;
  ctx.clearRect(0, 0, w, h);
  drawBoard(w, h);
}

canvas.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  if (win == false && tie == false) {
    fillBoard(x, y, currentPlayer);
  }
  verifyWin();
});
