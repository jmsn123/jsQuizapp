const quizContainer = document.querySelector("#quizContainer");
const resultsContainer = document.querySelector("#results");
const submitButton = document.querySelector("#submit");
const prevButton = document.querySelector("#pre");
const nextButton = document.querySelector("#next");
const answers = document.querySelector(".answers");
var currentQuest = 0;
let startdiv = document.querySelector(".start")
let question = document.getElementById("question")
let answerContainer = document.getElementById("quizContainer");
let score = 0;
var questionContainer = document.getElementById("question");
var startButton = document.getElementById("start");
const scores = document.querySelector(".scores");
const time = document.querySelector("#timer");
const results = document.getElementById("results");
startButton.addEventListener("click", start);
let t;
nextButton.addEventListener("click", function() {
    if (currentQuest === myQuestions.length) {
        end();
        console.log("here")
        clearElement([question, answers])
        return;

    }
    clearElement([question, answers])
    setupQuestion();
    setupAnswers();
});

const myQuestions = [{
        question: "Who invented JavaScript?",
        answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
        correctAnswer: 2,
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: ["Node.js", "TypeScript", "npm"],
        correctAnswer: 2,
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: ["Angular", "jQuery", "ESLint"],
        correctAnswer: 2,
    },
];

// function timer() {
//     let count = 60;
//     count--;
//     console.log("strated timer")
//     const interval = setInterval(() => {
//         time.innerHTML = count
//         console.log()
//         if (count <= 0) {
//             count = 0;
//             clearInterval(interval)
//             end()
//         }
//     }, 1000);

// }

let count = 60;

let timerr = () => {
    count--;
    time.textContent = count
    if (count === 0) {
        end()
    }
}

function start() {
    console.log("we here ")
    t = setInterval(timerr, 1000)
    score = 0;
    currentQuest = 0;
    setupQuestion();
    setupAnswers();
    removeClasses(startdiv, 1);
    removeClasses(scores, 0);
    removeClasses(resultsContainer, 0);
}
var questionIndex = myQuestions[currentQuest];

function clearElement(elem) {
    elem.map(item => {
        item.innerHTML = ""
    })
}

function setupQuestion() {
    console.log(currentQuest === myQuestions.length)
    if (currentQuest === myQuestions.length) {
        end();
        return;

    }
    results.textContent = score;
    clearElement([quizContainer])
    question.textContent = myQuestions[currentQuest].question;
    quizContainer.classList.remove("hide");
    question.classList.remove("hide");
    question.classList.add("show");
    quizContainer.classList.add("show");
    quizContainer.append(question);
}

function setupAnswers() {
    for (let i = 0; i < myQuestions[currentQuest].answers.length; i++) {
        let answer = document.createElement("button");
        // console.log(questionIndex.answers);
        answer.innerText = myQuestions[currentQuest].answers[i];
        const cls = ["btn", "btn-success", "btn-lg"]
        answer.classList.add(...cls);
        if (myQuestions[currentQuest].correctAnswer === i) {
            answer.dataset.correct = i;
        }
        answers.append(answer);
        quizContainer.append(answers)
        answer.addEventListener("click", checkAnswers);
    }
    currentQuest++;
}
// setupQuestion();

function removeClasses(elm, sw) {
    if (sw) {
        elm.classList.remove("show");
        elm.classList.add("hide");
    } else {
        elm.classList.remove("hide");
        elm.classList.add("show");
    }
}



function checkAnswers(e) {
    var selectedAnswer = e.target.dataset;
    if (selectedAnswer.correct) {
        answers.remove();
        nextButton.classList.add("show");
        e.target.classList.add("correct");
        score += 5;
        clearElement([question, answers])
        if (currentQuest === myQuestions.length) {
            end();
            return;
        }
        setupQuestion()
        setupAnswers()
    } else {
        count -= 5
        answers.remove();
        nextButton.classList.add("show");
        e.target.classList.add("correct");
        clearElement([question, answers])
        if (currentQuest === myQuestions.length) {
            end();
            return;
        }
        setupQuestion()
        setupAnswers()
    }
}

function end() {
    count = 0;
    clearInterval(t)
    removeClasses(nextButton, 1);
    console.log("end")
    results.textContent = score;
    removeClasses(startButton, 0);
    score = 0;
}