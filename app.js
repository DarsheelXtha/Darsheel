
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let avaiableQuestions = [];
let avaiableOptions = [];

function setAvaiableQuestions(){
    const totalQuestion=quiz.length;
    for(let i=0; i<totalQuestion; i++){
        avaiableQuestions.push(quiz[i])
    }
}
function getNewQuestion(){
    questionNumber.innerHTML = "Question" + (questionCounter + 1)+ "of" +quiz.length;
    constquestionIndex = avaiableQuestions[Math.floor(Math.random()*avaiableQuestions.length)]
    currentQuestion =questionIndex;
    questionText.innerHTML = currentQuestion.q;
    const index1 = avaiableQuestions.indexOf(questionIndex);
    avaiableQuestions.splice(index1,1);
    const optionLen = currentQuestion.options.length
    for(let i=0; i<optionLen; i++){
        avaiableOptions.push(i)
    }
    optionContainer.innerHTML ='';
    let animationDelay = 0.15;
    for(let i=0;i<optionLen;i++){
        const optionIndex = avaiableOptions[Math.floor(Math.random()*avaiableOptions.length)];
        constindex2 = avaibleOptions.indexOf(optionIndex);
        avaiableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onClick","getResult(this)");
    }
    questionCounter++
}
function getResult(element){
   const id = parseInt(element.id);
   if(id === currentQuestion.answer){
      element.classList.add("correct");
   }
   else{
        element.classList("wrong");
        const optionLen = optionContainer.children.length;
        for(let i=0;i<optionLen;i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
            }

        }
   }
   unclickableOptions();
}
function unclickableOptions(){
    const optionLen =optionContainer.children.length;
    for(let i=0;i<optionLen;i++){
        optionContainer.children[i].classList.add("already-answered");
    }

}
function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over");
    }
    else{
        getNewQuestion();
    }
}
window.onload = function(){
    setAvaiableQuestions();
    getNewQuestion();

}