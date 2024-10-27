const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const characterName = document.querySelector('.character-name');
const characterImg = document.querySelector('.character-img');
let marty = 0
let doc = 0
let biff = 0
let einstein = 0
startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
    }

exitBtn.onclick = () => {
        popupInfo.classList.remove('active');
        main.classList.remove('active');
    }

continueBtn.onclick = () => {
    quizSection.classList.add('active')
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
}

let questionCount = 0;
let questionNumb = 1;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);
    }
    else {
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option')
    for (let i = 0; i < option.length; i++)
    {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer)
{
    let userAnswer = answer.textContent;
    if (userAnswer[0] === 'A'){
        marty++;
    } else if (userAnswer[0] === 'B'){
        doc++;
    } else if (userAnswer[0] === 'C'){
        biff++;
    }
    else {
        einstein++;
    }
    console.log(marty, doc, biff, einstein);
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);
    }
    else {
        console.log('Question Completed');
        showResultBox()
    }
}

function questionCounter(index)
{
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function showResultBox()
{
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    if (marty > doc && marty > biff && marty > einstein) {
        characterName.textContent = "Marty McFly!";
        characterImg.src = "marty.jpg";
    } else if (doc > marty && doc > biff && doc > einstein) {
        characterName.textContent = "Doc Brown!";
        characterImg.src = "doc.jpg";
    } else if (biff > marty && biff > doc && biff > einstein) {
        characterName.textContent = "Biff Tannen!";
        characterImg.src = "biff.jpg";
    } else {
        characterName.textContent = "Einstein!";
        characterImg.src = "einstein.jpg";
    }
}