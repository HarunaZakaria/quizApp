const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElements = document.getElementById("question");
const answerButtonsElements = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

function selectAswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body.correct);
    Array.from(answerButtonsElements.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex +1 ){
        nextButton.classList.remove("hide");
    } else{
        startButton.innerText = "restart";
        startButton.classList.remove("hide");
    }
    if(selectedButton.dataset = correct){
        quizScore++;
    }
    document.getElementById("right-answers").innerText = quizScore;
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    } else{
        element.classList.add("wrong");

    }
}

function clearStatusClass(element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
}


const questions = [
    {
        question : "Which of this is a javascript framework?",
        answer : [
            { text: "Python", correct: false },
            { text: "Django", correct: false },
            { text: "React", correct: true },
            { text: "Eclipse", correct: false }
        ],
    },
    {
        question : "Who is the Education minister in Ghana?",
        answer : [
            { text: "Hamza", correct: false },
            { text: "Haruna", correct: true },
            { text: "Muaz", correct: false }
        ],
    },
    {
        question : "What is 4*4?",
        answer : [
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "16", correct: true },
        ],
    },
]




