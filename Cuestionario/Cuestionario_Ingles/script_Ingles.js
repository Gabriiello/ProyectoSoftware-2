// Seleccionar elementos del DOM
const btnEmpezar = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const btnSalir = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const btnContinuar = document.querySelector('.continue-btn');
const seccionQuiz = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const GoHomeBtn = document.querySelector('.inicio-btn');


// Elemento para mostrar el tiempo restante
let timeLeft = document.querySelector(".time-left");
let count = 181; // Valor inicial del temporizador
let countdown; // Variable para almacenar el temporizador
let questionCount = 0; // Contador de preguntas respondidas
let questionNumb = 1; // Contador de número de pregunta
let userScore = 0; // Puntaje del usuario


// Función para iniciar el cuestionario cuando se hace clic en el botón "Empezar"
btnEmpezar.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');

}

// Función para cerrar la ventana emergente de información y la sección principal
btnSalir.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

// Función para continuar con el cuestionario cuando se hace clic en el botón "Continuar"
btnContinuar.onclick = () => {
    seccionQuiz.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    timerDisplay(); // Iniciar el temporizador
    showQuestions(0); // Mostrar la primera pregunta
    questionCounter(1); // Actualizar el contador de preguntas
}

// Función para volver a intentar el cuestionario desde el principio
tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0; // Reiniciar el contador de preguntas
    questionNumb = 1; // Reiniciar el contador de número de pregunta
    userScore = 0; // Reiniciar el puntaje del usuario
    showQuestions(questionCount); // Mostrar la primera pregunta
    questionCounter(questionNumb); // Actualizar el contador de preguntas
}
GoHomeBtn.onclick = () => {
    seccionQuiz.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0; // Reiniciar el contador de preguntas
    questionNumb = 1; // Reiniciar el contador de número de pregunta
    userScore = 0; // Reiniciar el puntaje del usuario
    showQuestions(questionCount); // Mostrar la primera pregunta
    questionCounter(questionNumb); // Actualizar el contador de preguntas
}

// Función para avanzar a la siguiente pregunta
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) { // Verificar si hay más preguntas por responder
        questionCount++; // Incrementar el contador de preguntas respondidas
        showQuestions(questionCount); // Mostrar la siguiente pregunta
        questionNumb++; // Incrementar el contador de número de pregunta
        questionCounter(questionNumb); // Actualizar el contador de preguntas

        nextBtn.classList.remove('active');
        clearInterval(countdown); // Limpiar el temporizador actual
        count = 181; // Reiniciar el valor del temporizador a 11 segundos
        timerDisplay(); // Iniciar el temporizador nuevamente para la siguiente pregunta
    } else {
        showResultBox(); // Mostrar los resultados finales del cuestionario
    }
}

// Función para mostrar la siguiente pregunta y reiniciar el temporizador cuando el tiempo se agote
function displayNext() {
    if (questionCount < questions.length - 1) { // Verificar si hay más preguntas por responder
        questionCount++; // Incrementar el contador de preguntas respondidas
        showQuestions(questionCount); // Mostrar la siguiente pregunta
        questionNumb++; // Incrementar el contador de número de pregunta
        questionCounter(questionNumb); // Actualizar el contador de preguntas

        nextBtn.classList.remove('active');
        clearInterval(countdown); // Limpiar el temporizador actual
        count = 181; // Reiniciar el valor del temporizador a 11 segundos
        timerDisplay(); // Iniciar el temporizador nuevamente
    } else {
        showResultBox(); // Mostrar los resultados finales del cuestionario
        clearInterval(countdown); // Limpiar el temporizador cuando se termina el cuestionario
    }
}

// Función para mostrar las preguntas y opciones en la interfaz
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    const imgQuestionText = document.querySelector('.image-question-text');
    const tituloPregunta = document.querySelector('.question-title');
    const parrafoPregunta = document.querySelector('.question-parrafo');

    parrafoPregunta.textContent = `${questions[index].questionParrafo}`;

    if (questions[index].questionParrafo) {
        parrafoPregunta.textContent = `${questions[index].questionParrafo}`;
        parrafoPregunta.style.display ='block';
    } else {

        parrafoPregunta.style.display = 'none';


    }

    // Mostrar la fuente de la pregunta si está disponible
    if (questions[index].title) {

        tituloPregunta.textContent = `${questions[index].title}`;
        tituloPregunta.style.display ='block';
    } else {
        tituloPregunta.style.display = 'none'; // Ocultar el contenedor de la fuente si no hay fuente disponible
    }
    
    if (questions[index].image) {
        imgQuestionText.style.display = 'block'; // Mostrar el contenedor de la imagen
        const imageElement = document.createElement("img");
        imageElement.src = questions[index].image;
        imgQuestionText.innerHTML = ''; // Vaciar el contenido anterior (por si hay más imágenes)
        imgQuestionText.appendChild(imageElement); // Agregar la imagen al contenedor
    } else {
        imgQuestionText.style.display = 'none'; // Ocultar el contenedor de la imagen
        questionText.textContent = questions[index].question; // Mostrar el texto de la pregunta si no hay imagen
    }

    questionText.textContent = `${questions[index].question}`;
    const options = questions[index].options;
    let optionTag = '';
    
    for (let i = 0; i < options.length; i++) {
        optionTag += `<div class="option" onclick="optionSelected(this)"><span>${options[i]}</span></div>`;
    }
    
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)'); // Asignar el evento onclick a cada opción
    }

}

// Función para manejar la selección de una opción
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].correct;
    let allOptions = optionList.children.length;

    // Verificar si la respuesta es correcta o incorrecta y actualizar el puntaje del usuario
    if (userAnswer == correctAnswer) {
        answer.classList.add('correcto');
        userScore += 1;
    } else {
        answer.classList.add('incorrecto');
        // Mostrar la opción correcta con una clase de "correcto" y la opción seleccionada con una clase de "incorrecto"
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correcto');
            }
        }
    }

    // Desactivar todas las opciones para evitar que el usuario cambie su respuesta después de seleccionar una opción
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    clearInterval(countdown); // Pausar el temporizador cuando se selecciona una opción
}

// Función para mostrar el contador de preguntas (ej. "Pregunta 1 de 5")
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `Pregunta ${index} de ${questions.length}`;
}

// Función para mostrar la caja de resultados con el puntaje del usuario y la barra de progreso circular
function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Tu puntuación es de ${userScore} de ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = 0;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        if (progressStartValue <= progressEndValue) {
            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#87cefa ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) ${progressStartValue * 3.6}deg)`;
            progressStartValue++;
        } else {
            clearInterval(progress);
        }
    }, speed);
}

// Función para mostrar y actualizar el temporizador
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count === 0) {
            clearInterval(countdown);
            displayNext(); // Cuando se agote el tiempo, mostrar la siguiente pregunta y reiniciar el temporizador
        }
    }, 1000);
};
