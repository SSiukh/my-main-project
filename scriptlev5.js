let taskComplete = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let checkType = [0, 0, 0];
Tetris();

const task1 = {
  question: "У якому році відбулося хрещення Київської Русі?",
  options: ["882 р.", "988 р", "1015 р.", "1240 р."],
  answer: 1,
  element: 0,
  task: 1,
};

const task2 = {
  question: 'Хто є автором "Енеїди"?',
  options: [
    "Іван Котляревський",
    "Тарас Шевченко",
    "Іван Франко",
    "Леся Українка",
  ],
  answer: 0,
  element: 1,
  task: 2,
};

const task3 = {
  question: 'Хто написав роман "Тіні забутих предків" ?',
  options: [
    "Іван Котляревський",
    "Михайло Коцюбинський",
    "Іван Франко",
    "Ольга Кобилянська",
  ],
  answer: 1,
  element: 2,
  task: 3,
};

const task4 = {
  question: 'Хто є автором поеми "Заповіт"?',
  options: [
    "Іван Франко",
    "Пантелеймон Куліш",
    "Леся Українка",
    "Тарас Шевченко",
  ],
  answer: 3,
  element: 3,
  task: 4,
};

const task5 = {
  question: "Який символ є центральним на гербі України?",
  options: ["Сонце", "Лев", "Тризуб", "Калина"],
  answer: 2,
  element: 4,
  task: 5,
};

const task6 = {
  question: "У якому році Україна здобула незалежність від СРСР?",
  options: ["1989 р.", "1991 р.", "1990 р.", "1992 р."],
  answer: 1,
  element: 5,
  task: 6,
};

const task7 = {
  question: 'Який український поет був автором збірки "Лісова пісня"?',
  options: ["Тарас Шевченко", "Іван Франко", "Леся Українка", "Павло Тичина"],
  answer: 2,
  element: 6,
  task: 7,
};

const task8 = {
  question: "У якому році відбулася битва під Берестечком?",
  options: ["1651 р.", "1648 р.", "1709 р.", "1667 р."],
  answer: 0,
  element: 7,
  task: 8,
};

const task9 = {
  question: "Який український гетьман підписав Переяславську угоду з Росією?",
  options: [
    "Богдан Хмельницький",
    "Іван Мазепа",
    "Петро Дорошенко",
    "Павло Скоропадський",
  ],
  answer: 0,
  element: 8,
  task: 9,
};

const task10 = {
  question: "Хто був першим князем Київської Русі?",
  options: ["Олег", "Ігор", "Святослав", "Володимир Великий"],
  answer: 0,
  element: 9,
  task: 10,
};

function StartGame() {
  document.getElementById("lev5-game-start").style.display = "none";
  var ansversBlock = document.getElementsByClassName("lev5-ansver-block");
  for (let i = 0; i < ansversBlock.length; i++) {
    ansversBlock[i].style.display = "flex";
  }
  var completeBlock = document.getElementsByClassName("lev5-complete-block");
  for (let i = 0; i < completeBlock.length; i++) {
    completeBlock[i].style.display = "flex";
  }
  Level(1);
}

function SwitchQuestion(task, text) {
  task.innerHTML = "";
  task.textContent = text;
}

function SwitchAnswer(textArray) {
  let elementsArray = [];
  let answerRow = document.getElementsByClassName("lev5-ansver-row");

  for (let i = 0; i < 4; i++) {
    elementsArray[i] = document.createElement("button");
    elementsArray[i].classList.add("lev5-ansver-block");
  }
  answerRow[0].appendChild(elementsArray[0]);
  answerRow[0].appendChild(elementsArray[1]);
  answerRow[1].appendChild(elementsArray[2]);
  answerRow[1].appendChild(elementsArray[3]);
  for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].innerHTML = "";
    elementsArray[i].textContent = textArray[i];
  }
}

function DeleteAnswer() {
  let answerRow = document.getElementsByClassName("lev5-ansver-row");
  if (answerRow.length > 0) {
    // Переконатися, що є елементи для видалення
    while (answerRow[0].firstChild) {
      answerRow[0].removeChild(answerRow[0].firstChild);
    }
    while (answerRow[1].firstChild) {
      answerRow[1].removeChild(answerRow[1].firstChild);
    }
  } else {
    console.log("no elements");
  }
}

let stopTimer;
function Timer(check, task) {
  stopTimer = false;
  const element = document.createElement("p");
  document.getElementById("lev5-main-div").appendChild(element);
  element.classList.add("lev5-timer");

  let value = 10;
  for (let i = 0; i < 11; i++) {
    setTimeout(() => {
      element.textContent = value - i;
      if (i === 10 && taskComplete[task - 1] === 0) {
        check.classList.add("lev5-uncomplete-animation");
        element.innerHTML = "";
        return 0;
      } else if (taskComplete[task - 1] === 1) {
        element.innerHTML = "";
      }
    }, i * 1000);
  }
}

function CheckAnswer(numbAnswer, checkBlock, elements, checkElements, task) {
  for (let i = 0; i < 4; i++) {
    if (i === numbAnswer) {
      elements[i].addEventListener("click", () => {
        taskComplete[task - 1] = 1;
        checkElements[checkBlock].classList.add("lev5-complete-animation");
        stopTimer = true;
        DeleteAnswer();
        Level(task + 1);
      });
    } else {
      elements[i].addEventListener("click", () => {
        taskComplete[task - 1] = 1;
        checkElements[checkBlock].classList.add("lev5-uncomplete-animation");
        stopTimer = true;
        DeleteAnswer();
        Level(task + 1);
      });
    }
  }
}

// Потрібно спробувати створювати кодного разу нові елементи(кнопки відповідей), тоді воно не буле реагувати кожного разу на одну й ту ж
function Level(taskNumb) {
  const question = document.getElementById("lev5-question-text");
  // let elementAnswer = document.getElementsByClassName("lev5-ansver-text");
  let checkElements = document.getElementsByClassName("lev5-ansver-block");
  let checkLineElements = document.getElementsByClassName(
    "lev5-complete-block"
  );

  switch (taskNumb) {
    case 1:
      Timer(checkLineElements[0], task1.task);
      SwitchQuestion(question, task1.question);
      SwitchAnswer(task1.options);
      CheckAnswer(
        task1.answer,
        task1.element,
        checkElements,
        checkLineElements,
        task1.task
      );
      break;
    case 2:
      stopTimer = false;
      Timer(checkLineElements[1], task2.task);
      SwitchQuestion(question, task2.question);
      SwitchAnswer(task2.options);
      CheckAnswer(
        task2.answer,
        task2.element,
        checkElements,
        checkLineElements,
        task2.task
      );
      break;
    case 3:
      stopTimer = false;
      Timer(checkLineElements[2], task3.task);
      SwitchQuestion(question, task3.question);
      SwitchAnswer(task3.options);
      CheckAnswer(
        task3.answer,
        task3.element,
        checkElements,
        checkLineElements,
        task3.task
      );
      break;
    case 4:
      stopTimer = false;
      Timer(checkLineElements[3], task4.task);
      SwitchQuestion(question, task4.question);
      SwitchAnswer(task4.options);
      CheckAnswer(
        task4.answer,
        task4.element,
        checkElements,
        checkLineElements,
        task4.task
      );
      break;
    case 5:
      stopTimer = false;
      Timer(checkLineElements[4], task5.task);
      SwitchQuestion(question, task5.question);
      SwitchAnswer(task5.options);
      CheckAnswer(
        task5.answer,
        task5.element,
        checkElements,
        checkLineElements,
        task5.task
      );
      break;
    case 6:
      stopTimer = false;
      Timer(checkLineElements[5], task6.task);
      SwitchQuestion(question, task6.question);
      SwitchAnswer(task6.options);
      CheckAnswer(
        task6.answer,
        task6.element,
        checkElements,
        checkLineElements,
        task6.task
      );
      break;
    case 7:
      stopTimer = false;
      Timer(checkLineElements[6], task7.task);
      SwitchQuestion(question, task7.question);
      SwitchAnswer(task7.options);
      CheckAnswer(
        task7.answer,
        task7.element,
        checkElements,
        checkLineElements,
        task7.task
      );
      break;
    case 8:
      stopTimer = false;
      Timer(checkLineElements[7], task8.task);
      SwitchQuestion(question, task8.question);
      SwitchAnswer(task8.options);
      CheckAnswer(
        task8.answer,
        task8.element,
        checkElements,
        checkLineElements,
        task8.task
      );
      break;
    case 9:
      stopTimer = false;
      Timer(checkLineElements[8], task9.task);
      SwitchQuestion(question, task9.question);
      SwitchAnswer(task9.options);
      CheckAnswer(
        task9.answer,
        task9.element,
        checkElements,
        checkLineElements,
        task9.task
      );
      break;
    case 10:
      stopTimer = false;
      Timer(checkLineElements[9], task10.task);
      SwitchQuestion(question, task10.question);
      SwitchAnswer(task10.options);
      CheckAnswer(
        task10.answer,
        task10.element,
        checkElements,
        checkLineElements,
        task10.task
      );

      break;
  }
  if (taskComplete[9] === 1) {
    Recomplete();
  }
}

function Recomplete() {
  const main = document.getElementById("lev5-main-div");
  const question = document.getElementById("lev5-question-div");
  main.removeChild(question);

  const completeBlocks = document.getElementsByClassName("lev5-complete-block");

  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      completeBlocks[i].classList.remove("lev5-complete-animation");
      completeBlocks[i].classList.remove("lev5-uncomplete-animation");
      completeBlocks[i].classList.add("lev5-complete-block-disappear");
    }
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        completeBlocks[i].classList.remove("lev5-complete-block-disappear");
        completeBlocks[i].classList.add("lev5-complete-block-transparent");
      }
    }, 3000);
  }, 2000);
  setTimeout(() => {
    main.style.height = "1800px";
    TextTyping(0);
    document.querySelector(".code-address").style.display = "flex";
    document.querySelector(".code-address").style.position = "absolute";
    document.querySelector(".code-address").style.top = "1400px";
  }, 8000);
}

function Tetris() {
  const main = document.getElementById("lev5-main-div");
  let elements = [];
  for (let i = 0; i < 18; i++) {
    elements[i] = document.createElement("div");
    elements[i].classList.add("tetris-elements");
    main.appendChild(elements[i]);
    elements[i].style.position = "absolute";
  }
  elements[0].style.top = "600px";
  elements[0].style.left = "90px";
  elements[1].style.top = "600px";
  elements[1].style.left = "140px";
  elements[2].style.top = "600px";
  elements[2].style.left = "190px";
  elements[3].style.top = "650px";
  elements[3].style.left = "90px";

  elements[4].style.top = "1100px";
  elements[4].style.left = "190px";
  elements[5].style.top = "1150px";
  elements[5].style.left = "190px";

  elements[6].style.top = "1500px";
  elements[6].style.left = "140px";
  elements[7].style.top = "1550px";
  elements[7].style.left = "90px";
  elements[8].style.top = "1550px";
  elements[8].style.left = "140px";

  elements[4].style.display = "none";
  elements[5].style.display = "none";
  elements[6].style.display = "none";
  elements[7].style.display = "none";
  elements[8].style.display = "none";

  elements[9].style.top = "355px"; //змна на 22 + then -10
  elements[9].style.right = "150px";
  elements[10].style.top = "355px";
  elements[10].style.right = "100px";
  elements[11].style.top = "405px";
  elements[11].style.right = "100px";
  elements[12].style.top = "455px";
  elements[12].style.right = "100px";

  elements[13].style.top = "1050px";
  elements[13].style.right = "200px";
  elements[14].style.top = "1100px";
  elements[14].style.right = "200px";
  elements[15].style.top = "1100px";
  elements[15].style.right = "150px";

  elements[16].style.top = "1550px";
  elements[16].style.right = "200px";
  elements[17].style.top = "1550px";
  elements[17].style.right = "150px";

  elements[13].style.display = "none";
  elements[14].style.display = "none";
  elements[15].style.display = "none";
  elements[16].style.display = "none";
  elements[17].style.display = "none";
}

// приклда зміни сторінки при скролі

const initialPos = [
  600, 600, 600, 650, 1100, 1150, 1500, 1550, 1550, 355, 355, 405, 455, 1050,
  1100, 1100, 1550, 1550,
];

let scrollPosition = 0;
window.addEventListener("scroll", () => {
  scrollPosition = window.scrollY;
  console.log(scrollPosition);

  const mainDiv = document.querySelector("#lev5-main-div");
  const firstElements = document.getElementsByClassName("tetris-elements");

  if (mainDiv.style.height === "1800px") {
    firstElements[4].style.display = "block";
    firstElements[5].style.display = "block";
    firstElements[6].style.display = "block";
    firstElements[7].style.display = "block";
    firstElements[8].style.display = "block";
    firstElements[13].style.display = "block";
    firstElements[14].style.display = "block";
    firstElements[15].style.display = "block";
    firstElements[16].style.display = "block";
    firstElements[17].style.display = "block";
  }

  if (scrollPosition > 100) {
    mainDiv.classList.add("main-div-animation-five");
    mainDiv.classList.remove("main-div-animation-five-back"); // Remove the back class if added
  } else {
    mainDiv.classList.remove("main-div-animation-five"); // Remove the forward class
  }

  //  таким чином зробити для всіх елементів, елементи що розташовуються після потрібно ініціювати пізніше або ж показати
  for (let i = 0; i < 4; i++) {
    firstElements[i].style.top = initialPos[i] + scrollPosition * 0.8 + "px";
  }

  for (let i = 9; i < 13; i++) {
    firstElements[i].style.top = initialPos[i] + scrollPosition + "px";
  }

  if (scrollPosition >= 560) {
    firstElements[4].style.top =
      initialPos[2] + 50 + scrollPosition * 0.8 + "px";
    firstElements[5].style.top =
      initialPos[2] + 100 + scrollPosition * 0.8 + "px";
    // firstElements[13].style.top = initialPos[9] + scrollPosition + "px";
  } else {
    // Залишаємо 5-й елемент на місці
    firstElements[4].style.top = initialPos[4] + "px";
    firstElements[5].style.top = initialPos[5] + "px";
    firstElements[13].style.top = initialPos[13] + "px";
  }

  if (scrollPosition >= 695) {
    firstElements[13].style.top = initialPos[9] + scrollPosition + "px";
    firstElements[14].style.top = initialPos[9] + 50 + scrollPosition + "px";
    firstElements[15].style.top = initialPos[9] + 50 + scrollPosition + "px";
  } else {
    firstElements[13].style.top = initialPos[13] + "px";
    firstElements[14].style.top = initialPos[14] + "px";
    firstElements[15].style.top = initialPos[15] + "px";
  }

  if (scrollPosition >= 1060) {
    firstElements[6].style.top =
      initialPos[2] + 50 + scrollPosition * 0.8 + "px";
    firstElements[7].style.top =
      initialPos[2] + 100 + scrollPosition * 0.8 + "px";
    firstElements[8].style.top =
      initialPos[2] + 100 + scrollPosition * 0.8 + "px";
  } else {
    // Залишаємо 5-й елемент на місці
    firstElements[6].style.top = initialPos[6] + "px";
    firstElements[7].style.top = initialPos[7] + "px";
    firstElements[8].style.top = initialPos[8] + "px";
  }

  if (scrollPosition >= 1095) {
    firstElements[16].style.top = initialPos[9] + 100 + scrollPosition + "px";
    firstElements[17].style.top = initialPos[9] + 100 + scrollPosition + "px";
  } else {
    firstElements[16].style.top = initialPos[16] + "px";
    firstElements[17].style.top = initialPos[17] + "px";
  }
});

function TextTyping(numb) {
  document.getElementById("lev5-main-div").style.justifyContent = "start";
  document.getElementById("lev5-main-div").style.paddingTop = "300px";
  let i = 0;
  const speed = 150;
  let text = [];
  text[0] = "Був радий вітати вас на бета-версії нашого путівця!";
  text[1] = "Колись це стане повноцінним проєктом, але наразі ";
  text[2] = "це продукт для портфоліо. Гортайте донизу для зв'язку;)";
  const elements = [
    document.getElementById("typing-row-0"),
    document.getElementById("typing-row-1"),
    document.getElementById("typing-row-2"),
  ];

  function typeWriter() {
    if (i < text[numb].length) {
      elements[numb].textContent += text[numb].charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      if (i === text[numb].length && numb < 2) {
        elements[numb].style.borderRight = "none";
        TextTyping(numb + 1);
        if (numb === 2) {
          TetrisContinue();
        }
      }
    }
  }

  typeWriter();
}
