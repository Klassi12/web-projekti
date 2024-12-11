// MUUTTUJAT
let correctAnswer = 0;
let score = 0;
let questionCount = 0;
const totalQuestions = 10; // 10 KYSYMYSTÄ

document.addEventListener('DOMContentLoaded', () => {

// DOM
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const checkButton = document.getElementById("checkButton");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

// FUNKTIO
function generateQuestion() {
    if (questionCount >= totalQuestions) {
        questionElement.textContent = `Peli ohi! Sait ${score}/${totalQuestions} pistettä.`;
        feedbackElement.textContent = '';
        answerInput.style.display = 'none';
        checkButton.style.display = 'none';
        return;
    }

    const num1 = Math.floor(Math.random() * 10) + 1; 
    const num2 = Math.floor(Math.random() * 10) + 1; 
    const operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    let questionFormat = Math.floor(Math.random() * 3);
    let question;

    if (operation === '+') {
        correctAnswer = num1 + num2;
        if (questionFormat === 0) {
            question = `${num1} + ${num2} = ?`; 
        } else if (questionFormat === 1) {
            question = `? + ${num2} = ${correctAnswer}`; // EKA LUKU PUUTTUU
            correctAnswer = num1;
        } else {
            question = `${num1} + ? = ${correctAnswer}`; // TOKA LUKU PUUTTUU
            correctAnswer = num2;
        }
    } else if (operation === '-') {
        correctAnswer = num1 - num2;
        if (questionFormat === 0) {
            question = `${num1} - ${num2} = ?`; 
        } else if (questionFormat === 1) {
            question = `? - ${num2} = ${correctAnswer}`; // EKA LUKU PUUTTUU
            correctAnswer = num1;
        } else {
            question = `${num1} - ? = ${correctAnswer}`; // TOKA LUKU PUUTTUU
            correctAnswer = num2;
        }
    } else if (operation === '*') {
        correctAnswer = num1 * num2;
        if (questionFormat === 0) {
            question = `${num1} × ${num2} = ?`; 
        } else if (questionFormat === 1) {
            question = `? × ${num2} = ${correctAnswer}`; // EKA LUKU PUUTTUU
        } else {
            question = `${num1} × ? = ${correctAnswer}`; // TOKA LUKU PUUTTUU
            correctAnswer = num2;
        }
    }

    
    questionElement.textContent = question;
    feedbackElement.textContent = '';
    answerInput.value = '';
}

// TARKISTUS
function checkAnswer() {
    const userAnswer = parseInt(answerInput.value, 10);

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Oikein! Hyvä!';
        feedbackElement.style.color = 'green';
        score++; 
    } else {
        feedbackElement.textContent = `Väärin. Oikea vastaus oli ${correctAnswer}.`;
        feedbackElement.style.color = 'red';
    }

    // PISTEIDEN PÄIVITYS JA SEURAAVA KYSYMYS
    scoreElement.textContent = `Pisteet: ${score}/${totalQuestions}`;
    questionCount++;
    generateQuestion();
}

checkButton.addEventListener('click', checkAnswer);

generateQuestion();
});
