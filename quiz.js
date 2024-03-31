let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "Which country is traditionally credited as the origin of pasta?",
        answers: ["China", "Italy", "Greece", "Japan"],
        correct: 2
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: ["Tomato", "Pepper", "Avocado", "Onion"],
        correct: 3
    },
    {
        question: "Sushi is a cuisine associated with which country?",
        answers: ["China", "South Korea", "Japan", "Thailand"],
        correct: 3
    },
    {
        question: "Which vitamin is most abundant in citrus fruits?",
        answers: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 3
    },
    {
        question: "What type of food is Feta cheese?",
        answers: ["Soft cheese", "Hard cheese", "Processed cheese", "Blue cheese"],
        correct: 1
    },
    {
        question: "Which of the following is a traditional Indian bread?",
        answers: ["Baguette", "Ciabatta", "Naan", "Sourdough"],
        correct: 3
    },
    {
        question: "What is tofu made from?",
        answers: ["Soy milk", "Cow's milk", "Almonds", "Coconut"],
        correct: 1
    },
    {
        question: "Paella is a traditional dish from which country?",
        answers: ["Mexico", "Spain", "Italy", "Portugal"],
        correct: 2
    },
    {
        question: "Which spice is known as the 'king of spices'?",
        answers: ["Turmeric", "Cumin", "Pepper", "Saffron"],
        correct: 3
    },
    {
        question: "What is the main ingredient in a traditional French bouillabaisse?",
        answers: ["Beef", "Chicken", "Fish", "Lamb"],
        correct: 3
    }
]
const username = "admin"; 
function startQuiz() {
    const user = document.getElementById("username").value;
    const securityCode = document.getElementById("security-code").value;
    const correctAnswer = "6"; // The correct answer to the math question 2^2 + 2

    if (user.trim() === "" || securityCode.trim() === "") {
        alert("Please enter both username and security code.");
        return;
    }

    if (securityCode !== correctAnswer) {
        alert("Incorrect security code. Please try again.");
        return;
    }

    document.getElementById("login-section").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    displayQuestion();
}


function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    let choices = document.getElementById("choices");
    choices.innerHTML = "";
    question.answers.forEach((answer, index) => {
        let button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        choices.appendChild(button);
    });
    updateProgressBar();
}

function checkAnswer(index) {
    let feedback = document.getElementById("feedback");
    if (index === questions[currentQuestionIndex].correct) {
        feedback.textContent = "Correct, smooth as silk!";
        score++;
    } else {
        feedback.textContent = "Too bad! Study more.";
    }
    feedback.style.display = "block";
    setTimeout(() => {
        feedback.style.display = "none";
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            showFinalScore();
        }
    }, 1000);
}

function updateProgressBar() {
    let progress = document.getElementById("progress-bar");
    progress.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    progress.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function showFinalScore() {
    let quizSection = document.getElementById("quiz-section");
    quizSection.innerHTML = `<h1>Quiz Completed</h1><p>Your score is: ${score}/${questions.length}</p>`;
}

document.getElementById("quiz-section").style.display = "none";
