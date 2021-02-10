const quizContainer = document.querySelector("#quiz");
const resultsContainer = document.querySelector("#results");
const submitButton = document.querySelector("#submit");
const prevButton = document.querySelector("#pre");
const nextButton = document.querySelector("#next");
const myQuestions = [{
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
        },
        correctAnswer: "c",
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm",
        },
        correctAnswer: "c",
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint",
        },
        correctAnswer: "d",
    },
];
let shuffledQuestion = 0;

function setup(e) {
    shuffledQuestion = myQuestions.sort(() => Math.random() - 0.5);
    console.log(shuffledQuestion);
    setupQues(shuffledQuestion);
}

function setupQues(q) {
    resetState();
    let result = [];
    q.forEach((question, questionIndex) => {
        let answers = [];

        for (choice in question.answers) {
            answers.push(
                `<div class="form-check"> <input class = "form-check-input"type = "radio"name = "flexRadioDefault"id = "flexRadioDefault1"> <label class = "form-check-label"for="flexRadioDefault1">
                ${choice} ${question.answers[choice]} 
                </label> </div>`
            );
        }
        var button = document.createElement("button");
        button.innerHTML = answers;

        result.push(
            '<div class="row"id="questions"><div class="col-md-12"><label>' +
            question.question +
            "</label>" +
            "<div class='answers'>" +
            answers.join("") +
            "</div></div></div>"
        );
    });
    quizContainer.innerHTML = result.join("");
}

function resetStatus() {
    clearSatus(document.body);
}

function clearSatus(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function showResults(e) {
    const answersContainer = null;
}

setup();

submitButton.addEventListener("click", showResults);