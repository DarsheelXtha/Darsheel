let qweLength = quiz.length;
document.querySelector('#instutin_Name').innerHTML=insName;
document.querySelector('.qwe-no').innerHTML = qweLength;
let qweTitel = document.querySelector('#qwe');
let qweOptions = document.querySelector("#options");
var qweNo= 0

let chekAns=(qweNo,key)=>{
console.log(qweNo, key)
if(quiz[qweNo].answer === key){
    alert("right");
}else{
    alert("w")
}

}
let reqQue=(qweNo)=>{
    qweTitel.innerHTML='';
    qweOptions.innerHTML ='';
    qweTitel.innerHTML=quiz[qweNo].q;
    quiz[qweNo].options.map((opt,key)=>{
        qweOptions.innerHTML +=`<input type="radio" name="${qweNo}" onchange='chekAns(${qweNo},${key})' value="${opt}" id='${opt}${key}'><label class="pointer" for="${opt}${key}">${opt}</label> `;
    })
}
let result = ()=>{
    alert();
}
let nextQwe=()=>{
    qweNo < qweLength-1 ? qweNo+=1: result(); ;
    reqQue(qweNo);
}
let reset=()=>{
    qweNo=0
    reqQue(qweNo);
}

reqQue(qweNo);