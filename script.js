const question = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timeEl = document.querySelector(".timer");
const submit = document.querySelector("#submit-button");
const start = document.querySelector("#start-button");

// Setting the time //

let secondsLeft = 60;

// Creating the questions for my quiz//

let questionAnswer = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["Strings",
            "Booleans",
            "Alerts",
            "Numbers",
        ],
        correctAnswer: "Alerts"
    },

    {
        question: "In a condition the if/else statement is enclosed with ___________.",
        answers: ["quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"
        ],
        correctAnswer: "parenthesis"
    },

    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: ["numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        correctAnswer: "all of the above"
    },

    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        answers: ["commas",
            "curly brackets",
            "quotes",
            "parenthesis"
        ],
        correctAnswer: "quotes"

    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        correctAnswer: "console.log"
    },
]

let index = 0;
let currentQuestion = questionAnswer[0]
question.textContent = currentQuestion.question;
button1.textContent = currentQuestion.answers[0];
button2.textContent = currentQuestion.answers[1];
button3.textContent = currentQuestion.answers[2];
button4.textContent = currentQuestion.answers[3];

//Create a function to advance to next question and to assign questions to buttons//

nextQuestion();

function nextQuestion() {
    currentQuestion = questionAnswer[index]
    question.textContent = currentQuestion.question;
    button1.textContent = currentQuestion.answers[0];
    button2.textContent = currentQuestion.answers[1];
    button3.textContent = currentQuestion.answers[2];
    button4.textContent = currentQuestion.answers[3];
}

// Create event listeners for answer selection. This includes right and wrong answer prompts //


button1.addEventListener("click", function (event) {
    event.preventDefault();
    if (button1.textContent === currentQuestion.correctAnswer) {
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
        secondsLeft -= 15;
    }
    index++;
    if (index === questionAnswer.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

button2.addEventListener("click", function (event) {
    event.preventDefault();
    if (button2.textContent === currentQuestion.correctAnswer) {
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
        secondsLeft -= 15;

    }
    index++;
    if (index === questionAnswer.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

button3.addEventListener("click", function (event) {
    event.preventDefault();
    if (button3.textContent === currentQuestion.correctAnswer) {
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
        secondsLeft -= 15;
    }
    index++;
    if (index === questionAnswer.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

button4.addEventListener("click", function (event) {
    event.preventDefault();
    if (button4.textContent === currentQuestion.correctAnswer) {
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
        secondsLeft -= 15;
    }
    index++;
    if (index === questionAnswer.length) {
        quizEnd();
    } else {
        nextQuestion();
    }

});

// Start the time (quiz) //

function quizStart() {
    timer = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Your Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timer);
            quizEnd();
        }
    }, 1000);

    nextQuestion();
}

quizStart()

// End the quiz //

function quizEnd() {
    clearInterval(timer);
    let finalScore = document.querySelector("#final");
    let highScores = document.querySelector("#highscores-div");

    highScores.style.display = "block";

    finalScore.textContent = " Your Time: " + secondsLeft;
}

// Save high scores with initial input in local storage //

function initialsSave() {
    const initials = document.querySelector("#initials");
    let initializer = initials.value.trim();
    if (initializer !== "") {
        let highScores = JSON.parse(window.localStorage.getItem("high-scores") || "[]");

        let newScore = {
            score: secondsLeft,
            initials: initializer,
        }

        highScores.push(newScore);
        window.localStorage.setItem("high-scores", JSON.stringify(highScores));

        window.location.href = "index.html";
    }
}

submit.onclick = initialsSave;

