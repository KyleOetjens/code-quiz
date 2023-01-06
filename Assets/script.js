let startGame = document.querySelector("#btn");
let timeL = document.querySelector("#timer");
let timeLeft = 15;
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
    initials: [],
    timeScore: [],
    questionsRight: []
}
function addTime() {
    timeLeft = timeLeft + 25
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
startGame.addEventListener("click", startTime)

function startTime() {
    timeLeft = 15;
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

startGame.addEventListener("click", showQuestions)

function showQuestions(event) {
    console.log(score);
    console.log(event);
    console.log("questions started");
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    let b3 = document.createElement('button')
    let b4 = document.createElement('button')
    buildQuestions(b1, b2, b3, b4)
    qh.textContent = "First Question"
    b1.textContent = "Pizza"
    b2.textContent = "Burgers"
    b3.textContent = "Steak"
    b4.textContent = "Fish"
    let correctAnswer = b1;
    let incorrectAnswer1 = b2;
    let incorrectAnswer2 = b3;
    let incorrectAnswer3 = b4;
    correctAnswer.addEventListener("click", secondQuestion);
    incorrectAnswer1.addEventListener("click", subtractTime);
    incorrectAnswer2.addEventListener("click", subtractTime);
    incorrectAnswer3.addEventListener("click", subtractTime);
}
function secondQuestion(event) {
    addScore();
    savePoints()
    addTime();
    console.log(score);
    console.log("2nd question started");
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    let b3 = document.createElement('button')
    let b4 = document.createElement('button')
    let q2correctAnswer = b3
    let q2incorrectAnswer1 = b1
    let q2incorrectAnswer2 = b2
    let q2incorrectAnswer3 = b4
    buildQuestions(b1, b2, b3, b4)
    qh.textContent = "second Question"
    b1.textContent = "snake"
    b2.textContent = "bear"
    b3.textContent = "dog"
    b4.textContent = "bird"
    q2correctAnswer.addEventListener("click", thirdQuestion);
    q2incorrectAnswer1.addEventListener("click", subtractTime);
    q2incorrectAnswer2.addEventListener("click", subtractTime);
    q2incorrectAnswer3.addEventListener("click", subtractTime);
}
function thirdQuestion(event) {
    addScore()
    savePoints()
    console.log(score);
    addTime();
    console.log("3rd question started");
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    let b3 = document.createElement('button')
    let b4 = document.createElement('button')
    buildQuestions(b1, b2, b3, b4)
    let correctAnswer = b3
    qh.textContent = "Third Question"
    b1.textContent = "pop"
    b2.textContent = "water"
    b3.textContent = "milk"
    b4.textContent = "juice"
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
    addScore()
    savePoints()
    console.log(score);
    addTime();
    console.log("4th question started");
    let b1 = document.createElement('button')
    let b2 = document.createElement('button')
    let b3 = document.createElement('button')
    let b4 = document.createElement('button')
    buildQuestions(b1, b2, b3, b4)
    let correctAnswer = b4;
    qh.textContent = "last Question"
    b1.textContent = "pop"
    b2.textContent = "water"
    b3.textContent = "milk"
    b4.textContent = "juice"
    let q4correctAnswer = b4
    let q4incorrectAnswer1 = b1
    let q4incorrectAnswer2 = b2
    let q4incorrectAnswer3 = b3
   // q4correctAnswer.addEventListener("click", addTime)
    //q4correctAnswer.addEventListener("click", addTime;setScore1)
    q4correctAnswer.addEventListener("click", function endGame()
    {
        addScore()
        setScore1()
    })
    q4incorrectAnswer1.addEventListener('click', subtractTime)
    q4incorrectAnswer2.addEventListener('click', subtractTime)
    q4incorrectAnswer3.addEventListener('click', subtractTime)
}
function setScore1() {
    clearInterval(timeInterval);
    let scoreList1 = document.createElement("li")
    let scoreSpan = document.createElement("span")
    document.getElementById("scoreList").appendChild(scoreList1)
    scoreList1.appendChild(scoreSpan)
    JSON.parse(localStorage.getItem("points"))
    let name1 = window.prompt("What is your name?")
    localStorage.setItem("name", name1)
    scoreSpan.innerHTML = "Name: "+name1 +" Score: "+score.timeScore;
    
}
/*
function setScore1() {
    clearInterval(timeInterval);
    let scoreList1 = document.createElement("ul")
    let scoreLi = document.createElement('li')
    let nameSpan = document.createElement("span")
    nameSpan.setAttribute("class", "nameSpan")
    let scoreSpan = document.createElement("span")
    scoreSpan.setAttribute("class", "scoreSpan")
    document.getElementById("scoreList").appendChild(scoreList1)
    scoreList1.appendChild(scoreLi)
    scoreLi.appendChild(nameSpan)
    scoreLi.appendChild(scoreSpan)
    JSON.parse(localStorage.getItem("points"))
    document.querySelector(".scoreSpan").innerHTML = "Score: "+score.timeScore;
    let name1 = window.prompt("What is your name?")
    document.querySelector(".nameSpan").innerHTML = "Name: "+name1
    localStorage.setItem("name", name1)
}*/