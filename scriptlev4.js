const mazeData = [
  [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 3, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 2, 3, 0, 0, 1, 0, 2, 3, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
];
let playerPosition = { x: 9, y: 7 };
let TaskComplete = [0, 0, 0];
let Task3FirstComplete = 0;

function RenderMaze() {
  for (let row = 0; row < mazeData.length; row++) {
    for (let col = 0; col < mazeData[row].length; col++) {
      if (mazeData[row][col] === 1) {
        document
          .getElementById(`maze-${row}-${col}`)
          .classList.add("maze-wall");
      } else if (mazeData[row][col] === 2) {
        document
          .getElementById(`maze-${row}-${col}`)
          .classList.add("maze-gold");
      } else if (mazeData[row][col] === 0) {
        document
          .getElementById(`maze-${row}-${col}`)
          .classList.add("maze-road");
      } else {
        document
          .getElementById(`maze-${row}-${col}`)
          .classList.add("maze-door");
      }
      if (playerPosition.x === row && playerPosition.y === col) {
        document
          .getElementById(`maze-${row}-${col}`)
          .classList.add("maze-player");
      } else {
        document
          .getElementById(`maze-${row}-${col}`)
          .classList.remove("maze-player");
      }
    }
  }
}

function MovePlayer(event) {
  const { x, y } = playerPosition;
  let newX = x;
  let newY = y;

  switch (event.key) {
    case "ArrowUp":
      newX -= 1;
      break;
    case "ArrowDown":
      newX += 1;
      break;
    case "ArrowLeft":
      newY -= 1;
      break;
    case "ArrowRight":
      newY += 1;
      break;
  }
  if (
    (newX >= 0 &&
      newX < mazeData.length &&
      newY >= 0 &&
      newY < mazeData[0].length &&
      mazeData[newX][newY] === 0) ||
    mazeData[newX][newY] === 2
  ) {
    playerPosition = { x: newX, y: newY };
    RenderMaze();
    GoldenBlock();
    console.log(playerPosition);
  }
}

function SwitchTask(place, but1, but2, but3, h1, but12, but22, but32, h12) {
  if (place.contains(but1)) {
    place.removeChild(but1);
  }
  if (place.contains(but2)) {
    place.removeChild(but2);
  }
  if (place.contains(but3)) {
    place.removeChild(but3);
  }
  if (place.contains(h1)) {
    place.removeChild(h1);
  }
  if (!place.contains(h12)) {
    place.appendChild(h12);
  }
  if (!place.contains(but12)) {
    place.appendChild(but12);
  }
  if (!place.contains(but22)) {
    place.appendChild(but22);
  }
  if (!place.contains(but32)) {
    place.appendChild(but32);
  }
}

function RemoveTask(place, but1, but2, but3, h1) {
  if (place.contains(but1)) {
    place.removeChild(but1);
  }
  if (place.contains(but2)) {
    place.removeChild(but2);
  }
  if (place.contains(but3)) {
    place.removeChild(but3);
  }
  if (place.contains(h1)) {
    place.removeChild(h1);
  }
}

function RedFlash(button) {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "#db45697a";
    setTimeout(function () {
      button.style.backgroundColor = "rgba(255, 255, 255, 0.183)";
    }, 500);
  });
}

function GoldenBlock() {
  const mazeTask1 = document.getElementById("maze-task1");
  if (
    playerPosition.x === 5 &&
    playerPosition.y === 1 &&
    TaskComplete[0] === 0
  ) {
    setTimeout(function () {
      document.getElementById("maze-task1").style.display = "flex";
      let lev1H = document.createElement("h1");
      lev1H.textContent =
        "Яку проблему висвітлив Василь Стефаник у своєму найвідомішому творі?";
      lev1H.classList.add("lev4-task-h");
      document.getElementById("maze-task1").appendChild(lev1H);
      let but1 = document.createElement("button");
      let but2 = document.createElement("button");
      let but3 = document.createElement("button");
      but1.textContent = "Трагедія еміграції";
      but1.classList.add("lev4-task-button");
      but2.textContent = "Скупість шляхти";
      but2.classList.add("lev4-task-button");
      but3.textContent = "Зрада вітчизни";
      but3.classList.add("lev4-task-button");
      document.getElementById("maze-task1").appendChild(but1);
      document.getElementById("maze-task1").appendChild(but2);
      document.getElementById("maze-task1").appendChild(but3);

      // ///
      let lev1HTask2 = document.createElement("h1");
      lev1HTask2.textContent = "Чому відбулась помаранчева революція?";
      lev1HTask2.classList.add("lev4-task-h");
      let but1Task2 = document.createElement("button");
      let but2Task2 = document.createElement("button");
      let but3Task2 = document.createElement("button");
      but1Task2.textContent = "Відстоювання незалежності України";
      but1Task2.classList.add("lev4-task-button");
      but2Task2.textContent = "Незадоволення результатами виборів";
      but2Task2.classList.add("lev4-task-button");
      but3Task2.textContent = "Протест проти економічної кризи";
      but3Task2.classList.add("lev4-task-button");
      // ///

      // ///
      let lev1HTask3 = document.createElement("h1");
      lev1HTask3.textContent =
        "Хто відомий як зачинатель нової української літератури?";
      lev1HTask3.classList.add("lev4-task-h");
      let but1Task3 = document.createElement("button");
      let but2Task3 = document.createElement("button");
      let but3Task3 = document.createElement("button");
      but1Task3.textContent = "Леся Українка";
      but1Task3.classList.add("lev4-task-button");
      but2Task3.textContent = "Тарас Шевченко";
      but2Task3.classList.add("lev4-task-button");
      but3Task3.textContent = "Іван Котляревський";
      but3Task3.classList.add("lev4-task-button");
      // ///

      but1.addEventListener("click", function () {
        SwitchTask(
          mazeTask1,
          but1,
          but2,
          but3,
          lev1H,
          but1Task2,
          but2Task2,
          but3Task2,
          lev1HTask2
        );
      });
      RedFlash(but2);
      RedFlash(but3);
      but2Task2.addEventListener("click", function () {
        SwitchTask(
          mazeTask1,
          but1Task2,
          but2Task2,
          but3Task2,
          lev1HTask2,
          but1Task3,
          but2Task3,
          but3Task3,
          lev1HTask3
        );
      });
      RedFlash(but1Task2);
      RedFlash(but3Task2);
      but3Task3.addEventListener("click", function () {
        FirstMazeTask();
      });
      RedFlash(but1Task3);
      RedFlash(but2Task3);
    }, 1000);
  } else if (
    playerPosition.x === 5 &&
    playerPosition.y === 7 &&
    TaskComplete[1] === 0
  ) {
    setTimeout(function () {
      document.getElementById("maze-task2").style.display = "flex";
      const mazeTask2 = document.getElementById("maze-task2");
      let lev2H = document.createElement("h1");
      lev2H.textContent = "Не підведіть Михайла Кравчука! (15/3+7)*2 = ?";
      lev2H.classList.add("lev4-task-h");
      mazeTask2.appendChild(lev2H);
      let but1 = document.createElement("button");
      let but2 = document.createElement("button");
      let but3 = document.createElement("button");
      but1.textContent = "36";
      but1.classList.add("lev4-task-button");
      but2.textContent = "25";
      but2.classList.add("lev4-task-button");
      but3.textContent = "24";
      but3.classList.add("lev4-task-button");
      mazeTask2.appendChild(but1);
      mazeTask2.appendChild(but2);
      mazeTask2.appendChild(but3);

      // ///
      let lev2HTask2 = document.createElement("h1");
      lev2HTask2.textContent = "5x-3-x = 29; x = ?";
      lev2HTask2.classList.add("lev4-task-h");
      let but1Task2 = document.createElement("button");
      let but2Task2 = document.createElement("button");
      let but3Task2 = document.createElement("button");
      but1Task2.textContent = "10";
      but1Task2.classList.add("lev4-task-button");
      but2Task2.textContent = "8";
      but2Task2.classList.add("lev4-task-button");
      but3Task2.textContent = "6";
      but3Task2.classList.add("lev4-task-button");
      // ///

      // ///
      let lev2HTask3 = document.createElement("h1");
      lev2HTask3.textContent = "Якому значенню дорівнює третій кут?";
      lev2HTask3.classList.add("lev4-task-h");
      let imgTask3 = document.createElement("img");
      imgTask3.src = "task-img/polygon.png";
      imgTask3.style.marginTop = "10px";
      let but1Task3 = document.createElement("button");
      let but2Task3 = document.createElement("button");
      let but3Task3 = document.createElement("button");
      but1Task3.textContent = "45";
      but1Task3.classList.add("lev4-task-button");
      but2Task3.textContent = "91";
      but2Task3.classList.add("lev4-task-button");
      but3Task3.textContent = "50";
      but3Task3.classList.add("lev4-task-button");
      // ///

      but3.addEventListener("click", function () {
        SwitchTask(
          mazeTask2,
          but1,
          but2,
          but3,
          lev2H,
          but1Task2,
          but2Task2,
          but3Task2,
          lev2HTask2
        );
      });
      RedFlash(but1);
      RedFlash(but2);

      but2Task2.addEventListener("click", function () {
        mazeTask2.appendChild(imgTask3);
        SwitchTask(
          mazeTask2,
          but1Task2,
          but2Task2,
          but3Task2,
          lev2HTask2,
          but1Task3,
          but2Task3,
          but3Task3,
          lev2HTask3
        );
      });
      RedFlash(but1Task2);
      RedFlash(but3Task2);
      but2Task3.addEventListener("click", function () {
        RemoveTask(mazeTask2, but1Task3, but2Task3, but3Task3, lev2HTask3);
        mazeTask2.removeChild(imgTask3);
        SecondMazeTask();
      });
      RedFlash(but1Task3);
      RedFlash(but3Task3);
    }, 1000);
  } else if (
    playerPosition.x === 1 &&
    playerPosition.y === 3 &&
    TaskComplete[2] === 0
  ) {
    setTimeout(function () {
      let maze = document.getElementById("maze-task3");
      if (Task3FirstComplete === 0) {
        document.getElementById("maze-task3").style.display = "flex";
        let textForFirst = document.createElement("h1");
        textForFirst.textContent =
          "Тепер Ви мусите повернутись до попереднього рівня та розв'язати його знову, там ховається важлива дата!";
        textForFirst.classList.add("lev4-task-h");
        maze.appendChild(textForFirst);
        let buttonForFirst = document.createElement("button");
        buttonForFirst.textContent = "Продовжити";
        buttonForFirst.classList.add("lev4-task-button");
        maze.appendChild(buttonForFirst);
        buttonForFirst.addEventListener("click", function () {
          TaskComplete[1] = 0;
          maze.style.display = "none";
          maze.removeChild(textForFirst);
          maze.removeChild(buttonForFirst);
          document.getElementById("maze-5-7").style.backgroundColor = "#FFE55D";
          Task3FirstComplete = 1;
        });
      } else {
        maze.style.display = "flex";
        let H = document.createElement("h1");
        H.textContent = "То яка ж дата захована в попередньому завданні?";
        H.classList.add("lev4-task-h");
        let but1 = document.createElement("button");
        let but2 = document.createElement("button");
        let but3 = document.createElement("button");
        but1.textContent = "День незалежності України";
        but1.classList.add("lev4-task-button");
        but2.textContent = "День конституції України";
        but2.classList.add("lev4-task-button");
        but3.textContent = "Будапештський меморандум";
        but3.classList.add("lev4-task-button");
        maze.appendChild(H);
        maze.appendChild(but1);
        maze.appendChild(but2);
        maze.appendChild(but3);

        but1.addEventListener("click", function () {
          ThirdMazeTask();
        });
      }
    }, 1000);
  } else if (playerPosition.x === 0 && playerPosition.y === 3) {
    setTimeout(function () {
      const gameArea = document.getElementById("level4-game-area");
      gameArea.innerHTML = "";
      const H1 = document.createElement("h1");
      H1.textContent = "Вітаю із завершенням завдання!";
      H1.classList.add("lev4-task-h");
      const but = document.createElement("button");
      but.textContent = "Наступний рівень";
      but.classList.add("lev4-task-button");
      gameArea.appendChild(H1);
      gameArea.appendChild(but);
      gameArea.style.flexDirection = "column";
      but.addEventListener("click", function () {
        window.location.assign("level5.html");
      });
    }, 1000);
  } else {
    const maze1 = document.getElementById("maze-task1");
    const maze2 = document.getElementById("maze-task2");
    const maze3 = document.getElementById("maze-task3");
    document.getElementById("maze-task1").style.display = "none";
    document.getElementById("maze-task2").style.display = "none";
    document.getElementById("maze-task3").style.display = "none";
    maze1.innerHTML = "";
    maze2.innerHTML = "";
    maze3.innerHTML = "";
  }
}

function FirstMazeTask() {
  TaskComplete[0] = 1;
  mazeData[5][1] = 0;
  document.getElementById("maze-5-1").style.backgroundColor = "gray";
  mazeData[4][1] = 0;
  document.getElementById("maze-4-1").style.backgroundColor = "#595959";
  mazeData[5][2] = 0;
  document.getElementById("maze-5-2").style.backgroundColor = "#595959";
  document.getElementById("maze-task1").style.display = "none";
  RenderMaze();
}
function SecondMazeTask() {
  TaskComplete[1] = 1;
  mazeData[5][7] = 0;
  document.getElementById("maze-5-7").style.backgroundColor = "gray";
  mazeData[5][8] = 0;
  document.getElementById("maze-5-8").style.backgroundColor = "#595959";
  document.getElementById("maze-task2").style.display = "none";
  RenderMaze();
}
function ThirdMazeTask() {
  TaskComplete[2] = 1;
  mazeData[1][3] = 0;
  document.getElementById("maze-1-3").style.backgroundColor = "gray";
  mazeData[0][3] = 0;
  document.getElementById("maze-0-3").style.backgroundColor =
    "rgb(179, 227, 245)";
  document.getElementById("maze-task3").style.display = "none";
  RenderMaze();
}

document.addEventListener("keydown", MovePlayer);
RenderMaze();
