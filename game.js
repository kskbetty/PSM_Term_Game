const questions = [
    { definition: "Acceptance Criteria: Acceptable limits which are based upon a design specification, standard or test requirements.", term: "Acceptance Criteria" },
    { definition: "Accuracy: Refers to the agreement of a reading or observation obtained from an instrument or a technique with a true value. Quite often used incorrectly as precision.", term: "Accuracy" },
    // Add more questions here from the extracted terms and definitions
];

let currentQuestionIndex = 0;

function nextQuestion() {
    const gameDiv = document.getElementById('game');
    if (currentQuestionIndex >= questions.length) {
        gameDiv.innerHTML = "You've completed the game!";
        return;
    }

    const question = questions[currentQuestionIndex];
    gameDiv.innerHTML = `
        <div class="question">
            <p>${question.definition}</p>
            <input type="text" id="answer" placeholder="Enter the term">
        </div>
        <button class="button" onclick="checkAnswer()">Check Answer</button>
    `;
}

function checkAnswer() {
    const answer = document.getElementById('answer').value;
    const correctTerm = questions[currentQuestionIndex].term;
    if (answer.toLowerCase() === correctTerm.toLowerCase()) {
        alert("Correct!");
    } else {
        alert(`Incorrect. The correct term is: ${correctTerm}`);
    }
    currentQuestionIndex++;
    nextQuestion();
}

// Initialize the game
nextQuestion();
