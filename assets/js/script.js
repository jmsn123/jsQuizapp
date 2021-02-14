const quizContainer = document.querySelector("#quiz");
const resultsContainer = document.querySelector("#results");
const submitButton = document.querySelector("#submit");
const prevButton = document.querySelector("#pre");
const nextButton = document.querySelector("#next");
const answerContainer = document.querySelector("#answerContainer");
var currentQuest = 0;
nextButton.addEventListener("click", function() {
    console.log("made it far");
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

function setupQuestion() {
    let answerContainer = document.createElement("div");
    var questionIndex = myQuestions[currentQuest];
    // each question create an element
    let questions = document.createElement("p");
    //  add content to that element
    questions.innerText = questionIndex.question;
    answerContainer.classList.add("user-container");
    quizContainer.append(questions);
    for (let i = 0; i < questionIndex.answers.length; i++) {
        let answer = document.createElement("button");
        answer.innerText = questionIndex.answers[i];
        answer.classList.add("correct");
        if (questionIndex.correctAnswer === i) {
            answer.dataset.correct = i;
        }
        answerContainer.append(answer);
        quizContainer.append(answerContainer);

        answer.addEventListener("click", checkAnswers);
    }
}
setupQuestion();

function checkAnswers(e) {
    var selectedAnswer = e.target.dataset;
    if (selectedAnswer.correct) {
        nextButton.classList.add("show");
        e.target.classList.add("correct");
        currentQuest++;

        setupQuestion();
    }
}

// let shuffledQuestion = 0;

// function setup(e) {
//     shuffledQuestion = myQuestions.sort(() => Math.random() - 0.5);
//     console.log(shuffledQuestion);
//     setupQues(shuffledQuestion);
//     showResults();
// }

// function setupQues(q) {
//     resetStatus();
//     let result = [];
//     var button = document.createElement("button");

//     q.forEach((question, questionIndex) => {
//         let answers = [];

//         for (choice in question.answers) {
//             answers.push(
//                 `<div class="form-check"> <input class = "form-check-input"type ="radio"name =${choice} id = "option-${choice}"> <label class = "form-check-label"for="flexRadioDefault1">
//                 ${choice} ${question.answers[choice]}
//                 </label> </div>`
//             );
//         }
//         button.innerHTML = answers;

//         result.push(
//             '<div class="row"id="questions"><div class="col-md-12"><label>' +
//             question.question +
//             "</label>" +
//             "<div class='answers'>" +
//             answers.join("") +
//             "</div></div></div>"
//         );
//     });
//     quizContainer.innerHTML = result.join("");
// }

// function resetStatus() {
//     clearSatus(document.body);
//     // this will hide our nextbutton cause we dont need it right now
//     nextButton.classList.add("hide");
// }

// function clearSatus(element) {
//     element.classList.remove("correct");
//     element.classList.remove("wrong");
// }

// function showResults() {
//     const answersContainers = quizContainer.querySelectorAll(".form-check-input");
//     let numCorrect = 0;
//     console.log(answersContainers);
//     for (let i = 0; i < myQuestions.length; i++) {
//         let answer = answersContainers[i];
//         let element = `input[name=${answer.name}]:checked`;
//         let correctAnswer = (answer.querySelector(element) || {}).value;
//         console.log(correctAnswer);
//         if (correctAnswer === myQuestions.correctAnswer) {
//             console.log(correctAnswer);
//         }
//     }
//     console.log("Containers", answersContainers);
// }

// setup();
// nextButton.addEventListener("click", setupQuestion);
// submitButton.addEventListener("click", showResults);