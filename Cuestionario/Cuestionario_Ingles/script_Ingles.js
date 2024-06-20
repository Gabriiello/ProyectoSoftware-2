// Seleccionar elementos del DOM
const selectors = [
    'start-btn', 'popup-info', 'exit-btn', 'main', 'continue-btn', 'quiz-section',
    'quiz-box', 'next-btn', 'option-list', 'result-box', 'tryAgain-btn', 'inicio-btn',
    'time-left', 'question-text', 'image-question-text', 'question-title', 'question-parrafo',
    'question-total', 'score-text', 'circular-progress', 'progress-value'
  ];
  const elements = selectors.reduce((acc, sel) => {
    acc[sel] = document.querySelector(`.${sel}`);
    return acc;
  }, {});
  
  let { 
    startBtn, popupInfo, exitBtn, main, continueBtn, quizSection, quizBox, nextBtn, 
    optionList, resultBox, tryAgainBtn, inicioBtn, timeLeft, questionText, 
    imageQuestionText, questionTitle, questionParrafo, questionTotal, scoreText, 
    circularProgress, progressValue 
  } = elements;
  
  let count = 181, countdown, questionCount = 0, questionNumb = 1, userScore = 0;
  
  const toggleActive = (el, action = 'add') => el.classList[action]('active');
  
  const resetQuiz = () => {
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
  };
  
  const startQuiz = () => {
    toggleActive(popupInfo);
    toggleActive(main);
  };
  
  const exitQuiz = () => {
    toggleActive(popupInfo, 'remove');
    toggleActive(main, 'remove');
  };
  
  const continueQuiz = () => {
    toggleActive(quizSection);
    toggleActive(popupInfo, 'remove');
    toggleActive(main, 'remove');
    toggleActive(quizBox);
    timerDisplay();
    showQuestions(0);
    questionCounter(1);
  };
  
  const tryAgain = () => {
    toggleActive(quizBox);
    toggleActive(nextBtn, 'remove');
    toggleActive(resultBox, 'remove');
    resetQuiz();
  };
  
  const goHome = () => {
    toggleActive(quizSection, 'remove');
    toggleActive(nextBtn, 'remove');
    toggleActive(resultBox, 'remove');
    resetQuiz();
  };
  
  const nextQuestion = () => {
    if (questionCount < questions.length - 1) {
      questionCount++;
      showQuestions(questionCount);
      questionNumb++;
      questionCounter(questionNumb);
      toggleActive(nextBtn, 'remove');
      clearInterval(countdown);
      count = 181;
      timerDisplay();
    } else {
      showResultBox();
    }
  };
  
  const showQuestions = (index) => {
    const question = questions[index];
    questionTitle.textContent = question.title || '';
    questionParrafo.textContent = question.questionParrafo || '';
    questionText.textContent = question.question;
    imageQuestionText.style.display = question.image ? 'block' : 'none';
    imageQuestionText.innerHTML = question.image ? `<img src="${question.image}" />` : '';
    questionParrafo.style.display = question.questionParrafo ? 'block' : 'none';
    questionTitle.style.display = question.title ? 'block' : 'none';
    optionList.innerHTML = question.options.map(opt => `<div class="option" onclick="optionSelected(this)"><span>${opt}</span></div>`).join('');
  };
  
  const optionSelected = (answer) => {
    const userAnswer = answer.textContent;
    const correctAnswer = questions[questionCount].correct;
    const allOptions = optionList.children.length;
  
    if (userAnswer === correctAnswer) {
      answer.classList.add('correcto');
      userScore++;
    } else {
      answer.classList.add('incorrecto');
      Array.from(optionList.children).forEach(opt => {
        if (opt.textContent === correctAnswer) opt.classList.add('correcto');
      });
    }
  
    Array.from(optionList.children).forEach(opt => opt.classList.add('disabled'));
    clearInterval(countdown);
  };
  
  const questionCounter = (index) => {
    questionTotal.textContent = `Pregunta ${index} de ${questions.length}`;
  };
  
  const showResultBox = () => {
    toggleActive(quizBox, 'remove');
    toggleActive(resultBox);
    scoreText.textContent = `Tu puntuación es de ${userScore} de ${questions.length}`;
    let progressStartValue = 0;
    let progressEndValue = (userScore / questions.length) * 100;
    const speed = 20;
    const progress = setInterval(() => {
      if (progressStartValue <= progressEndValue) {
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#87cefa ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) ${progressStartValue * 3.6}deg)`;
        progressStartValue++;
      } else {
        clearInterval(progress);
      }
    }, speed);
  };
  
  const timerDisplay = () => {
    countdown = setInterval(() => {
      count--;
      timeLeft.innerHTML = `${count}s`;
      if (count === 0) {
        clearInterval(countdown);
        nextQuestion();
      }
    }, 1000);
  };
  
  // Event Listeners
  startBtn.onclick = startQuiz;
  exitBtn.onclick = exitQuiz;
  continueBtn.onclick = continueQuiz;
  tryAgainBtn.onclick = tryAgain;
  inicioBtn.onclick = goHome;
  nextBtn.onclick = nextQuestion;
  