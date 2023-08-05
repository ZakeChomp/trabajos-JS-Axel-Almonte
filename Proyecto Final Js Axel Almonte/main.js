const quiz = [

    {
        question: "Cual fantasma envejece atraves de la partida?",
        answers: [
            {text: "Demonio", validation: false},
            {text: "Espiritu", validation: false},
            {text: "Thaye", validation: true},
            {text: "Oni", validation: false},
        ]
    },

    {
        question: "Cual fantasma tiene una probabilidad de poner huellas dactilares con 6 dedos?",
        answers: [
            {text: "Banshee", validation: false},
            {text: "Obake", validation: true},
            {text: "Deogen", validation: false},
            {text: "Gemelos", validation: false},
        ]
    },

    {
        question: "Fantasma con las siguientes pruebas: D.O.T.S | Orbes | Temperaturas heladas",
        answers: [
            {text: "Sombra", validation: false},
            {text: "Raiju", validation: false},
            {text: "Yurei", validation: true},
            {text: "Revenant", validation: false},
        ]
    },

    {
        question: "Pregunta Dificil: Los Pesadilla pueden prender luces?",
        answers: [
            {text: "Si", validation: false},
            {text: "No", validation: true},
        ]
    },

    {
        question: "Cuantos objetos malditos hay en el juego?",
        answers: [
            {text: "5", validation: false},
            {text: "3", validation: false},
            {text: "7", validation: true},
            {text: "4", validation: false},
        ]
    },

    {
        question: "Cual fantasma es rapido cuando te ve, pero lento cuando no te ve?",
        answers: [
            {text: "Raiju", validation: false},
            {text: "Espiritu", validation: false},
            {text: "Deogen", validation: false},
            {text: "Revenant", validation: true},
        ]
    },

    {
        question: "Fantasma con las siguientes pruebas: Huellas dactilares | EMF 5 | Escritura fantasmal",
        answers: [
            {text: "Onryo", validation: false},
            {text: "Banshee", validation: false},
            {text: "Myling", validation: true},
            {text: "Jinn", validation: false},
        ]
    },

    {
        question: "Pregunta Dificil: Los Poltergeist pueden tirar multiples objetios al mismo tiempo?",
        answers: [
            {text: "Si", validation: true},
            {text: "No", validation: false},
        ]
    },

    {
        question: "Cual fantasma te pone una maldicion la cual te baja la cordura gradualmente?",
        answers: [
            {text: "Raiju", validation: false},
            {text: "Goryo", validation: false},
            {text: "Hantu", validation: false},
            {text: "Moroi", validation: true},
        ]
    },

    {
        question: "Cual objeto maldito te concede deseos con un riesgo de tener una maldicion?",
        answers: [
            {text: "La Guija", validation: false},
            {text: "Cartas Tarot", validation: false},
            {text: "Palma de mono", validation: true},
            {text: "Espejo maldito", validation: false},
        ]
    },

    {
        question: "Cual fantasma puede gritar a tu microfono parabolico?",
        answers: [
            {text: "Thaye", validation: false},
            {text: "Mimico", validation: false},
            {text: "Banshee", validation: true},
            {text: "Demonio", validation: false},
        ]
    },

    {
        question: "Cual de estos fantasmas es el mas timido?",
        answers: [
            {text: "Sombra", validation: true},
            {text: "Hantu", validation: false},
            {text: "Espiritu", validation: false},
            {text: "Gemelos", validation: false},
        ]
    },

    {
        question: "Cual de estos fantasmas se hace mas agresivo mientras mas hablas cerca de el?",
        answers: [
            {text: "Mimico", validation: false},
            {text: "Gemelos", validation: false},
            {text: "Yokai", validation: true},
            {text: "Espiritu", validation: false},
        ]
    },

    {
        question: "Pregunta Dificil: Cuantas evidencias puede hacer parecer un Mimico?",
        answers: [
            {text: "3", validation: false},
            {text: "4", validation: true},
            {text: "5", validation: false},
            {text: "2", validation: false},
        ]
    },

    {
        question: "Cual de estos fantasmas no puede pisar en sal?",
        answers: [
            {text: "Raiju", validation: false},
            {text: "Hantu", validation: false},
            {text: "Espectro", validation: true},
            {text: "Deogen", validation: false},
        ]
    },

    {
        question: "Cual fantasmas es agresivo cuando las temperaturas son bajas?",
        answers: [
            {text: "Deogen", validation: false},
            {text: "Hantu", validation: true},
            {text: "Demonio", validation: false},
            {text: "Revenant", validation: false},
        ]
    },

    {
        question: "Fantasma con las siguientes pruebas: EMF 5 | Huellas Dactilares | D.O.T.S",
        answers: [
            {text: "Goryo", validation: false},
            {text: "Oni", validation: true},
            {text: "Espiritu", validation: true},
            {text: "Demonio", validation: false},
        ]
    },

    {
        question: "Pregunta Dificil: Los Ente aparecen en las fotos que les tiras?",
        answers: [
            {text: "Si", validation: false},
            {text: "No", validation: true},
        ]
    },

    {
        question: "A cual de estos fantasmas desaparece mas cuando caza?",
        answers: [
            {text: "Oni", validation: true},
            {text: "Ente", validation: false},
            {text: "Espectro", validation: false},
            {text: "Mimico", validation: false},
        ]
    },

    {
        question: "Pregunta Dificil: Los Yurei pueden cerrar la puerta de un tiro?",
        answers: [
            {text: "Si", validation: true},
            {text: "No", validation: false},
        ]
    }
];

const question = document.getElementById("question");
const answer = document.getElementById("answersBtn");
const next = document.getElementById("next");
const mainMenuBtn = document.getElementById("mainMenuBtn");

var currentQuestion = 0;
var score = 0;
var repeatedQuestions = [];

function startQuiz(){
    mainMenuBtn.style.display = "none";
    next.addEventListener("click", nextQuestion);
    currentQuestion = 0;
    score = 0;
    repeatedQuestions = [];
    showQuestion();
}

function showQuestion(){
    next.style.display = "none";
    index = 0;
    reset();
    currentQuestion = quiz[Math.floor(Math.random() * 20)];

    while(repeatedQuestions.includes(currentQuestion.question)){
        currentQuestion = quiz[Math.floor(Math.random() * 20)];
    }
    repeatedQuestions.push(currentQuestion.question);

    question.innerHTML = currentQuestion.question;
    currentQuestion.answers.forEach(answerBtn => {
        const button = document.createElement("button");
        button.innerHTML = currentQuestion.answers[index].text;
        index = index + 1;
        button.classList.add("btn");
        answer.appendChild(button);
        if(answerBtn.validation){
            button.dataset.validation = answerBtn.validation;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function reset(){
    while(answer.firstChild){
        answer.removeChild(answer.firstChild);
    }
}

function selectAnswer(sA){
    const selectedBtn = sA.target;
    const isCorrect = selectedBtn.dataset.validation === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answer.children).forEach(button => {
        if(button.dataset.validation === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block";
}

function nextQuestion() {
    if(repeatedQuestions.length <= 18){
        showQuestion();
    }else{
        screenScore();
    }
}

function screenScore() {
    reset();
    next.style.display = "none";
    mainMenuBtn.style.display = "block";
    if(score == 0){
        question.innerHTML = `No obtuviste ningun puntaje, tuviste todas las preguntas mal! Vuelve a la pantalla inicial para volverlo a intentar`;
    }else if (score == 1){
        question.innerHTML = `Tuviste un punto, devuelvete a la pantalla de inicio y mira el rango que haz conseguido!`;
    }else{
        question.innerHTML = `Tu puntaje es de ${score} puntos, devuelvete a la pantalla de inicio y mira el rango que haz conseguido!`;
    }
    next.addEventListener("click", startQuiz);
}

function mainMenu(){
    location.href = "index.html";
}

startQuiz();