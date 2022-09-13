const quizDB = [
    {
        question: "Q1. Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both A and B",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q2. Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementById()",
        b: "getElementByClassName()",
        c: "Both A and B",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q3. Which of the following methods can be used to display data in some form using Javascript?",
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "Q4. When an operator’s value is NULL, the typeof returned by the unary operator is:",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        ans: "ans3"
    },
    {
        question: "Q5. Which function is used to serialize an object into a JSON string in Javascript?",
        a: "stringify()",
        b: "parse()",
        c: "convert()",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q6. Which of the following are closures in Javascript?",
        a: "Variables",
        b: "Functions",
        c: "Objects",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "Q7. Which of the following is not a Javascript framework?",
        a: "Node",
        b: "Vue",
        c: "React",
        d: "Cassandra",
        ans: "ans4"
    },
    {
        question: "Q8. What keyword is used to declare an asynchronous function in Javascript?",
        a: "async",
        b: "await",
        c: "setTimeout",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q9. How to stop an interval timer in Javascript?",
        a: "clearInterval",
        b: "clearTimer",
        c: "intervalOver",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q10. What does … operator do in JS?",
        a: "It is used to describe a datatype of undefined size",
        b: "It is used to spread iterables to individual elements",
        c: "No such operators exists",
        d: "None of the above",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submitBtn = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#show-score');

let questionCount = 0;

function loadQuestion(){
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((currAnsElem) => {
        if(currAnsElem.checked){
            answer  = currAnsElem.id;
        }

    });
    return answer
};

const deselectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

let score = 0;

submitBtn.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    // console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick = "location.reload()"> Play Again </button>
        `
        showScore.classList.remove('scoreArea');
    }

});