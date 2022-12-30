let startGame = document.querySelector("#btn");
let timeL = document.querySelector("#timer");
let timeLeft = 15;
let body = document.body
let qdiv = document.createElement("div")
let qh = document.createElement("h1")
let listEl = document.createElement("ul")
let b1 = document.createElement('button');
let b2 = document.createElement('button');
let b3 = document.createElement('button');
let b4 = document.createElement('button');
let timeInterval;
let score = {
    initials: "",
    timeScore: 0,
    questionsRight: 0
}
function showHighScore () {
    let zScore = localStorage.getItem("points");
let zName = localStorage.getItem("name")
document.querySelector("#points").textContent = score.timeScore;
document.querySelector("#name").textContent = score.initials
}
function addTime() {
    timeLeft = timeLeft + 25
}
function subtractTime() {
    timeLeft = timeLeft - 5
}
function addScore() {
    score.timeScore = timeLeft,
        score.questionsRight += 1
}
function buildQuestions() {
    body.appendChild(qdiv);
    qdiv.appendChild(qh);
    qdiv.appendChild(listEl);
    listEl.appendChild(b1);
    listEl.appendChild(b2);
    listEl.appendChild(b3);
    listEl.appendChild(b4);
}
function savePoints() {
    localStorage.setItem("points", score.timeScore)
    localStorage.setItem("questionsRight", score.questionsRight)
}
function setScore() {
    JSON.parse(localStorage.getItem("points"))
    document.querySelector("#points").textContent = score.timeScore;
    let name1 = window.prompt("What is your name?")
    document.querySelector("#name").textContent = name1
    localStorage.setItem("name", name1)
}
startGame.addEventListener("click", startTime)

function startTime() {
    console.log("started");
    let timeInterval = setInterval(function () {
        timeLeft--;
        timeL.textContent = timeLeft + " seconds left";

        if (timeLeft < 0) {
            // Stops execution of action at set interval
            clearInterval(timeInterval);
            // Calls function to create and append image
            sendMessage();
            setScore();
        }
    }, 1000);
}
function sendMessage() {
    timeL.textContent = "Game Over"

}
startGame.addEventListener("click", showQuestions)

function showQuestions(event) {
    console.log(score);
    event.stopPropagation();
    console.log(event);
    console.log("questions started");
    let correctAnswer = b1;
    let incorrectAnswer1 = b2;
    let incorrectAnswer2 = b3;
    let incorrectAnswer3 = b4;
    buildQuestions()
    qh.textContent = "First Question"
    b1.textContent = "Pizza"
    b2.textContent = "Burgers"
    b3.textContent = "Steak"
    b4.textContent = "Fish"
    correctAnswer.addEventListener("click", secondQuestion);
    incorrectAnswer1.addEventListener("click", subtractTime);
    incorrectAnswer2.addEventListener("click", subtractTime);
    incorrectAnswer3.addEventListener("click", subtractTime);
    return
}

function secondQuestion(event) {
    addScore();
    savePoints()
    event.stopPropagation();
    addTime();
    console.log("2nd question started");
    let q2correctAnswer = b2;
    let q2incorrectAnswer1 = b1;
    let q2incorrectAnswer2 = b3;
    let q2incorrectAnswer3 = b4;
    buildQuestions()
    qh.textContent = "second Question"
    b1.textContent = "snake"
    b2.textContent = "bear"
    b3.textContent = "dog"
    b4.textContent = "bird"
    q2correctAnswer.addEventListener("click", thirdQuestion);
    q2incorrectAnswer1.addEventListener("click", subtractTime);
    q2incorrectAnswer2.addEventListener("click", subtractTime);
    q2incorrectAnswer3.addEventListener("click", subtractTime);
    return
}
function thirdQuestion(event) {
    addScore()
    savePoints()
    console.log(score);
    event.stopPropagation();
    addTime();
    console.log("3rd question started");
    buildQuestions()
    let correctAnswer = b3;
    qh.textContent = "Third Question"
    b1.textContent = "pop"
    b2.textContent = "water"
    b3.textContent = "milk"
    b4.textContent = "juice"
    correctAnswer.addEventListener("click", forthQuestion);
    return
}

function forthQuestion(event) {
    addScore()
    savePoints()
    console.log(score);
    event.stopPropagation();
    addTime();
    console.log("4th question started");
    buildQuestions()
    let correctAnswer = b4;
    qh.textContent = "last Question"
    b1.textContent = "pop"
    b2.textContent = "water"
    b3.textContent = "milk"
    b4.textContent = "juice"
    correctAnswer.addEventListener("click", addTime);
    return

}


/*
start screen with title, text and start button (display high scores if possible)

---Question boxes-----

question text
ordered list (4 opptions)
answer button that moves on if the anxwer is correct and sends a message/ reduces time if incorect


------end of test-------
high score list
entry to put in initials with score
options to quit or try again

if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
    listEl.appendChild(li1);
    li1.appendChild(b1);
    listEl.appendChild(li2);
    li1.appendChild(b2);
    listEl.appendChild(li3);
    li1.appendChild(b3);
    listEl.appendChild(li4);
    li1.appendChild(b4);
    qh.textContent = "First Question"
    b1.textContent = "Pizza"
    b2.textContent = "Burgers"
    b3.textContent = "Steak"
    b4.textContent = "Fish"

    let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
body.appendChild(qdiv);
    qdiv.appendChild(qh);
    qdiv.appendChild(listEl);
    listEl.appendChild(b1);
    listEl.appendChild(b2);
    listEl.appendChild(b3);
    listEl.appendChild(b4);
    */