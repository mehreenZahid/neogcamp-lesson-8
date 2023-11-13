const quizForm = document.querySelector(".quiz-form")
const submitAnsBtn = document.querySelector("#submit-ans-btn")
const outputElm = document.querySelector("#output-quiz")

const correctAnswers = ["90°","Right angled"]

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score+1
        }
        index = index+1
    }
    //console.log(score)
    outputElm.innerText = "Your score is " + score;
}

submitAnsBtn.addEventListener("click",calculateScore)