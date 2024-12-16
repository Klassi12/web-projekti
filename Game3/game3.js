
const questions = [
    { equation: "1 + 3 = 5", isCorrect: false },
    { equation: "5 + 6 = 12", isCorrect: false },
    { equation: "7 + 6 = 13", isCorrect: true },
    { equation: "9 + 10 = 21", isCorrect: false },
    { equation: "13 + 16 = 29", isCorrect: true },
    { equation: "2 - 1 = 0", isCorrect: false },
    { equation: "7 - 5 = 3", isCorrect: false },
    { equation: "22 - 14 = 8 ", isCorrect: true },
    { equation: "5 + 7 - 3  = 9", isCorrect: true },
    { equation: "22 + 7 - 14 = 15", isCorrect: true }
]
let score = 0;
let currentQuestion = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionElement.innerText = question.equation;
        questionElement.dataset.correct = question.isCorrect;
    } else {
        document.getElementById("game").innerHTML = `<h2>Peli ohi! Tuloksesi: ${score} / ${questions.length}</h2>`;

        showResults();
    }
}
function checkAnswer(isTrue) {
    const questionElement = document.getElementById("question");
    const isCorrect = questionElement.dataset.correct === "true";
    if (isTrue === isCorrect) {
        score++;
    }
    currentQuestion++;
    showQuestion();
}

function showResults() {
    localStorage.setItem('peli3', score); // Tallennetaan pisteet
}

function startGame() {
    const startButton = document.getElementById("start-button");
    if (startButton) startButton.style.display = "none"; 
    const gameContainer = document.getElementById("game-container");
    if (gameContainer) gameContainer.style.display = "block"; 
    showQuestion();
}


window.onload = function() {
    const gameContainer = document.getElementById("game-container");
    if (gameContainer) gameContainer.style.display = "none"; 
};


