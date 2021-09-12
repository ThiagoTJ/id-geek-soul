
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
    questoes:"Objetivo da sustentabilidade:",
    opc1:"Sustentar a tecnologia",
    opc2:"Poluir o meio ambiente",
    opc3:"Preservar a natureza",
    opc4:"Limpar as ruas",
    ans:"Preservar a natureza",
},
    {
    questoes:"É um resíduo poluente:",
    opc1:"Folhas secas",
    opc2:"Poça de lama",
    opc3:"Latas de lixo",
    opc4:"Latinhas de alumínio",
    ans:"Latinhas de alumínio",
},
    {
    questoes:"Promove qualidade de vida:",
    opc1:"Sustentabilidade",
    opc2:"Produção em massa",
    opc3:"Efeito estufa",
    opc4:"Uso de agrotóxicos",
    ans:"Sustentabilidade",
},
    {
    questoes:"Significado de ASG:",
    opc1:"Ambiental, Saudável, Governo",
    opc2:"Amigável, Social, Gerenciável",
    opc3:"Amigável, Sociável, Governo",
    opc4:"Ambiental, Social, Governança",
    ans:"Ambiental, Social, Governança",
},
    {
    questoes:"Define práticas sustentáveis:",
    opc1:"ONU",
    opc2:"INMETRO",
    opc3:"ASG",
    opc4:"IBAMA",
    ans:"ASG",
},
{
    questoes:"Descarta-se metal na lata:",
    opc1:"Vermelha",
    opc2:"Roxa",
    opc3:"Amarela",
    opc4:"Preta",
    ans:"Amarela",
},
    {
    questoes:"Faz parte da gestão ambiental:",
    opc1:"Aumentar o consumo",
    opc2:"Disponibilizar mais energia",
    opc3:"Emitir gás carbônico",
    opc4:"Racionar o uso da água",
    ans:"Racionar o uso da água",
},
    {
    questoes:"Forma de reaproveitar lixo:",
    opc1:"Reciclagem",
    opc2:"Plotagem",
    opc3:"Metragem",
    opc4:"Embalagem",
    ans:"Reciclagem",
},
    {
    questoes:"Não é material reciclável:",
    opc1:"Garrafa plástica",
    opc2:"Bituca de cigarro",
    opc3:"Papelão",
    opc4:"Garrafa de vidro",
    ans:"Bituca de cigarro",
},
    {
    questoes:"Descarta-se plástico na lata",
    opc1:"Vermelha",
    opc2:"Roxa",
    opc3:"Amarela",
    opc4:"Preta",
    ans:"Vermelha",
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
