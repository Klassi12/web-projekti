document.addEventListener('DOMContentLoaded', () => {
    // DOM
    const startGameButton = document.getElementById("startGameButton");
    const questionElement = document.getElementById("question");
    const answerInput = document.getElementById("answer");
    const checkButton = document.getElementById("checkButton");
    const feedbackElement = document.getElementById("feedback");
    const scoreElement = document.getElementById("score");
    const gameContainer = document.getElementById("gameContainer");

    // MUUTTUJAT
    let correctAnswer = 0;
    let score = 0;
    let questionCount = 0;
    const totalQuestions = 10;

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
                question = `? + ${num2} = ${correctAnswer}`; 
                correctAnswer = num1;
            } else {
                question = `${num1} + ? = ${correctAnswer}`; 
                correctAnswer = num2;
            }
        } else if (operation === '-') {
            correctAnswer = num1 - num2;
            if (questionFormat === 0) {
                question = `${num1} - ${num2} = ?`; 
            } else if (questionFormat === 1) {
                question = `? - ${num2} = ${correctAnswer}`;
                correctAnswer = num1;
            } else {
                question = `${num1} - ? = ${correctAnswer}`; 
                correctAnswer = num2;
            }
        } else if (operation === '*') {
            correctAnswer = num1 * num2;
            if (questionFormat === 0) {
                question = `${num1} × ${num2} = ?`; 
            } else if (questionFormat === 1) {
                question = `? × ${num2} = ${correctAnswer}`;
            } else {
                question = `${num1} × ? = ${correctAnswer}`; 
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

        // PISTEIDEN PÄIVITYS
        scoreElement.textContent = `Pisteet: ${score}/${totalQuestions}`;
        questionCount++;

        
        setTimeout(() => {
            generateQuestion();
        }, 1500);
    }

    function startGame() {
        startGameButton.style.display = 'none';
        gameContainer.style.display = 'block';
        generateQuestion();
    }

    startGameButton.addEventListener('click', startGame);
    checkButton.addEventListener('click', checkAnswer);
<<<<<<< HEAD
    
});
=======
});

>>>>>>> b2710203650b1b005944c5ade410104d678fc103
