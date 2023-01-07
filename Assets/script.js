let startGame = document.querySelector("#btn");
let timeL = document.querySelector("#timer");
let timeLeft = 30;
let body = document.body
let qdiv = document.createElement("div")
let qh = document.createElement("h1")
let listEl = document.createElement("ul")
let correctAnswer;
let incorrectAnswer1;
let incorrectAnswer2;
let incorrectAnswer3;
let timeInterval;
let zScore = localStorage.getItem("points");
let zName = localStorage.getItem("name")
document.querySelector("#score").innerHTML = zScore;
document.querySelector("#name").innerHTML = zName
let score = {
    timeScore: [],
    playerName: [],
    questionsRight: []
}
console.log(score);
//functions that run throughout the game
function addTime() {
    timeLeft = timeLeft + 5
}
function subtractTime() {
    timeLeft = timeLeft - 5
}
function addScore() {
    (score.timeScore = timeLeft), (score.questionsRight = score.questionsRight + 1)
}
function buildQuestions(b1, b2, b3, b4) {
    body.appendChild(qdiv)
    qdiv.appendChild(qh)
    qdiv.appendChild(listEl)
    listEl.innerHTML = ""
    listEl.appendChild(b1)
    listEl.appendChild(b2)
    listEl.appendChild(b3)
    listEl.appendChild(b4)
}
function savePoints() {
    localStorage.setItem("points", score.timeScore)
    localStorage.setItem("questionsRight", score.questionsRight)
}
//event listeners to start the quiz
startGame.addEventListener("click", startTime)
startGame.addEventListener("click", showQuestions)
//function to run the countdown
function startTime() {
    timeLeft = 30;
    timeL.textContent = timeLeft + " seconds left";
    timeInterval = setInterval(function () {
        timeLeft--;
        timeL.textContent = timeLeft + " seconds left";
        if (timeLeft < 1) {
            clearInterval(timeInterval);
            sendMessage();
            setScore1();
        }
    }, 1000);
}
function sendMessage() {
    timeL.textContent = "Game Over"
}
// group of functions for questions
function showQuestions(event) {
    console.log(score);
    console.log(score);
    console.log(event);
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    let b3 = document.createElement('button')
    let b4 = document.createElement('button')
    buildQuestions(b1, b2, b3, b4)
    qh.textContent = "First Question:  Which HTML tag links our JavaScript code?"
    b1.textContent = "<js>"
    b2.textContent = "<script>"
    b3.textContent = "<javascript>"
    b4.textContent = "<scripting>"
    let correctAnswer = b2;
    let incorrectAnswer1 = b1;
    let incorrectAnswer2 = b3;
    let incorrectAnswer3 = b4;
    correctAnswer.addEventListener("click", secondQuestion);
    incorrectAnswer1.addEventListener("click", subtractTime);
    incorrectAnswer2.addEventListener("click", subtractTime);
    incorrectAnswer3.addEventListener("click", subtractTime);
}
function secondQuestion(event) {
    console.log(score);
    addTime();
    addScore();
    savePoints()
    console.log(score);
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    let b3 = document.createElement('button')
    let b4 = document.createElement('button')
    let q2correctAnswer = b3
    let q2incorrectAnswer1 = b1
    let q2incorrectAnswer2 = b2
    let q2incorrectAnswer3 = b4
    buildQuestions(b1, b2, b3, b4)
    qh.textContent = "Second Question: What is the correct syntax to link an external script?"
    b1.textContent = `<script href="xxx.js">`
    b2.textContent = `<script name="xxx.js">`
    b3.textContent = `<script src="xxx.js">`
    b4.textContent = `<script link="xxx.js">`
    q2correctAnswer.addEventListener("click", thirdQuestion);
    q2incorrectAnswer1.addEventListener("click", subtractTime);
    q2incorrectAnswer2.addEventListener("click", subtractTime);
    q2incorrectAnswer3.addEventListener("click", subtractTime);
}
function thirdQuestion(event) {
    console.log(score);
    addTime();
    addScore();
    savePoints()
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    let b3 = document.createElement('button')
    let b4 = document.createElement('button')
    buildQuestions(b1, b2, b3, b4)
    let correctAnswer = b3
    qh.textContent = "Third Question: How do you call a function named runFunction()?"
    b1.textContent = `function = runFunction()`
    b2.textContent = `RunFunction()`
    b3.textContent = `runFunction()`
    b4.textContent = `var = runfunction()`
    let q3correctAnswer = b3
    let q3incorrectAnswer1 = b1
    let q3incorrectAnswer2 = b2
    let q3incorrectAnswer3 = b4
    correctAnswer.addEventListener("click", forthQuestion);
    q3incorrectAnswer1.addEventListener('click', subtractTime)
    q3incorrectAnswer2.addEventListener('click', subtractTime)
    q3incorrectAnswer3.addEventListener('click', subtractTime)
}
function forthQuestion(event) {
    console.log(score);
    addTime();
    addScore();
    savePoints()
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    let b3 = document.createElement('button')
    let b4 = document.createElement('button')
    buildQuestions(b1, b2, b3, b4)
    let correctAnswer = b4;
    qh.textContent = "Last Question: How does a for loop start?"
    b1.textContent = `for (i<=5; i=0; i++)`
    b2.textContent = `for (i++; i<=5; i=0`
    b3.textContent = `for (i<=5; i++)`
    b4.textContent = `for (i=0; i<=5; i++)`
    let q4correctAnswer = b4
    let q4incorrectAnswer1 = b1
    let q4incorrectAnswer2 = b2
    let q4incorrectAnswer3 = b3
    q4correctAnswer.addEventListener("click", addTime)
    q4correctAnswer.addEventListener("click", addScore)
    q4correctAnswer.addEventListener("click", setScore1)
    q4incorrectAnswer1.addEventListener('click', subtractTime)
    q4incorrectAnswer2.addEventListener('click', subtractTime)
    q4incorrectAnswer3.addEventListener('click', subtractTime)
}
//function to save name and score/ show in scoreboard at the end of the quiz
function setScore1() {
    clearInterval(timeInterval);
    let scoreList1 = document.createElement("li")
    let scoreSpan = document.createElement("span")
    document.getElementById("scoreList").appendChild(scoreList1)
    JSON.parse(localStorage.getItem("points"))
    let name1 = window.prompt("What is your name?")
    localStorage.setItem("name", name1)
    scoreList1.innerHTML = "Name: " + name1 + " Score: " + score.timeScore;
}