
var questoesJogo=0;
var totalScore=0;
var jogoQuestoes=document.getElementById('questoesJogo');
var totalQuestions=document.getElementById('totalQuestions');
var telaInicial=document.getElementById('start');
var quizTeste=document.getElementById('quiz-teste');
var x=0;
var telaResultado=document.getElementById('telaResultado');
var tempoRestante=document.getElementById('tempoRestante');
var pontuacao=document.getElementById('pontuacao');
var questoes=document.getElementById('questoes');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var btn=document.getElementsByClassName('btn');
const btnComecar = document.getElementById('btnComecar');

var perguntasDoQuiz=[
    {
    questoes:"pergunta 1 ",
    opc1:"dfgdfdfgva",
    opc2:"xcxsdfasfa",
    opc3:"vddfgadfgadsf",
    opc4:"dfsgsdgdsgs",
    ans:"dsgsdgsgssd",
},
    {
    questoes:"pergunta 2 ????",
    opc1:"dgvsdgsdsd",
    opc2:"vxcvxsssxcx",
    opc3:"vcxvxbvdsfggfdgfds",
    opc4:"cxvsxsdgv",
    ans:"dsgvdsgsdfgsdsds",
},
    {
    questoes:" Pergunta 3 s??????????",
    opc1:"1",
    opc2:"2",
    opc3:"3",
    opc4:"4",
    ans:"5",
},
    {
    questoes:" pergunta 4 ??????????",
    opc1:"sdfasdfsds",
    opc2:"dvvxzvv",
    opc3:"svsdvsdgvsdg",
    opc4:"dsgvdssd",
    ans:"dsgdsgdsgsdg",
},
    {
    questoes:" Pergunta 5?????",
    opc1:"vxzvxzvvxzvt",
    opc2:"zvzvxzcv",
    opc3:"xvxcvxzccx",
    opc4:"szvxzvzxv",
    ans:"vxvxzxvsdsd",
},
{
    questoes:"pergunta 6 ",
    opc1:"dfgdfdfgva",
    opc2:"xcxsdfasfa",
    opc3:"vddfgadfgadsf",
    opc4:"dfsgsdgdsgs",
    ans:"dsgsdgsgssd",
},
    {
    questoes:"pergunta 7????",
    opc1:"dgvsdgsdsd",
    opc2:"vxcvxsssxcx",
    opc3:"vcxvxbvdsfggfdgfds",
    opc4:"cxvsxsdgv",
    ans:"dsgvdsgsdfgsdsds",
},
    {
    questoes:" Pergunta 8 s??????????",
    opc1:"1",
    opc2:"2",
    opc3:"3",
    opc4:"4",
    ans:"5",
},
    {
    questoes:" pergunta 9 ??????????",
    opc1:"sdfasdfsds",
    opc2:"dvvxzvv",
    opc3:"svsdvsdgvsdg",
    opc4:"dsgvdssd",
    ans:"dsgdsgdsgsdg",
},
    {
    questoes:" Pergunta 10?????",
    opc1:"vxzvxzvvxzvt",
    opc2:"zvzvxzcv",
    opc3:"xvxcvxzccx",
    opc4:"szvxzvzxv",
    ans:"vxvxzxvsdsd",
}
];
function proximoQuiz(no){
Inter(300);
jogoQuestoes.textContent=" "+(no+1);
totalQuestions.textContent=" "+perguntasDoQuiz.length;
console.log("number "+no);
questoes.textContent=perguntasDoQuiz[no].questoes;
opt1.textContent=perguntasDoQuiz[no].opc1;
opt2.textContent=perguntasDoQuiz[no].opc2;
opt3.textContent=perguntasDoQuiz[no].opc3;
opt4.textContent=perguntasDoQuiz[no].opc4;
}
// var intervaloContagem=setInterval(function(){
//     if(repeticao==1){
//         clearInterval(intervaloContagem);
//         telaInicial.style.display="none";
//         quizTeste.style.display="block";
//         proximoQuiz(questoesJogo);
//     }
//     repeticao++;
// },2000);
btnComecar.addEventListener('click', () => {
    comecar()
})
function comecar(){
    
    telaInicial.style.display="none";
    quizTeste.style.display="block";
    proximoQuiz(questoesJogo);
}


for(var i=0;i<btn.length;i++){
    btn[i].onclick=function(){
    if(this.textContent==perguntasDoQuiz[questoesJogo].ans){
        totalScore++;
        if(questoesJogo<4){
        clearInterval(bar);
        questoesJogo++;
        proximoQuiz(questoesJogo);
        console.log(totalScore);
        }else{
        telaFinal();
        }
    }
    else{
        if(questoesJogo<9){
        questoesJogo++;
        clearInterval(bar);
        proximoQuiz(questoesJogo);
        console.log(totalScore);
        }else{
            telaFinal();
        }
    }
}
}


var bar;
function telaFinal(){
    quizTeste.style.display="none";
    telaResultado.style.display="block";
    pontuacao.textContent=totalScore;
}

function Inter(set){
var statusTime=set;
tempoRestante.style.width=statusTime+"px";
bar=setInterval(function(){
if(statusTime==0){
    clearInterval(bar); 
        if(questoesJogo<9){
        questoesJogo++;
        proximoQuiz(questoesJogo);
    }
    else{
        telaFinal();
    } 
    }
    tempoRestante.style.width=statusTime+"px";
    statusTime=statusTime-30;
},1000); 
}
proximoBtn.onclick=function(){
if(questoesJogo<9){
questoesJogo++;
proximoQuiz(questoesJogo);
}
else{
    telaFinal();
}
}

const button = document.querySelector('#btnPopup');
const popup = document.querySelector('.popup-wrapper')


button.addEventListener('click', () => {
    popup.style.display= 'block'
})

popup.addEventListener('click', evente=> {
    const classNameOfClickedElement = evente.target.classList[0]
    const classNames =['popup-close', 'popup-wrapper', 'popup-link']
    const shouldClasePopup = classNames.some(className => 
        className ===classNameOfClickedElement)

    if(shouldClasePopup) {
        popup.style.display= 'none'
    }
})
