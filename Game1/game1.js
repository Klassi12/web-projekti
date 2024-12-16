const questions = generateQuestions(10);
let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    document.getElementById("welcome-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    showQuestion();
}

function generateQuestions(numQuestions) {
    const operations = ["+", "-", "*"];
    const questions = [];
    for (let i = 0; i < numQuestions; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let correctAnswer;

        if (operation === "+") {
            correctAnswer = num1 + num2;
        } else if (operation === "-") {
            correctAnswer = num1 - num2;
        } else if (operation === "*") {
            correctAnswer = num1 * num2;
        }

        questions.push({
            question: `${num1} ${operation} ${num2}`,
            correctAnswer,
            options: generateOptions(correctAnswer),
        });
    }
    return questions;
}

function generateOptions(correctAnswer) {
    const options = new Set([correctAnswer]);
    while (options.size < 4) {
        const randomOption = correctAnswer + Math.floor(Math.random() * 10) - 5;
        options.add(randomOption);
    }
    return Array.from(options).sort(() => Math.random() - 0.5);
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    const questionDiv = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    const feedbackDiv = document.getElementById("feedback");

    questionDiv.textContent = `Kysymys ${currentQuestionIndex + 1}: ${question.question}`;
    optionsDiv.innerHTML = "";

    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn", "btn-primary");
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });

    feedbackDiv.textContent = "";
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const feedbackDiv = document.getElementById("feedback");

    if (selectedOption === question.correctAnswer) {
        feedbackDiv.textContent = "Oikein!";
        feedbackDiv.className = "text-success";
        score++;
    } else {
        feedbackDiv.textContent = "Väärin!";
        feedbackDiv.className = "text-danger";
    }

    currentQuestionIndex++;
    setTimeout(showQuestion, 1000);
}

function showResults() {
    const gameContainer = document.getElementById("game-container");
    localStorage.setItem('peli1', score);
    gameContainer.innerHTML = `
        <h2>Peli päättyi!</h2>
        <p>Sinun pistemääräsi: ${score}/${questions.length}</p>
        <button class="btn btn-success" onclick="location.reload()">Aloita uudelleen</button>
    `;
}