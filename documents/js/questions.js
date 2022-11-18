var startQuizEl = document.querySelector("#startQuiz");
const question = document.getElementById("question");
const anschoices = document.getElementsByClassName("ans-choice");

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;

let questions = [
    {
        question: "question 1?",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: 1
    },
    {
        question: "question 2?",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: 3
    },
    {
        question: "question 3?",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: 2
    },
    {
        question: "question 4?",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: 4
    }
]

startQuizEl.addEventListener("click", function() {
    document.querySelector("#startVis").style.display = "none";
    document.querySelector("#questionVis").style.display = "flex";
    questionCounter = -1;
    newQuestion ();
});

function newQuestion () {
    questionCounter++ ;
    currentQuestion = questions[questionCounter]
    question.innerText = currentQuestion.question;

    anschoices.forEach(choice => {
        const number = chocie.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
}

for (let i = 0; i < questions.length; i++) {

}