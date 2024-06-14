const questions = [
  {
    question: "¿Qué árbol produce la nuez más grande del mundo?",
    options: ["Castaño de Indias", "Nogal", "Baobab", "Coco"],
    answer: "Baobab"
  },
  {
    question: "¿Qué árbol es famoso por su madera roja y aromática utilizada en la fabricación de muebles y artículos de lujo?",
    options: ["Cedro", "Caoba", "Teca", "Roble"],
    answer: "Caoba"
  },
  {
    question: "¿Cuál es la especie de árbol más grande del mundo?",
    options: ["Secuoya gigante", "Baobab", "Eucalipto", "Roble"],
    answer: "Secuoya gigante"
  },
  {
    question: "¿Qué árbol es conocido por su corteza que parece papel y se puede escribir sobre ella?",
    options: ["Abedul blanco", "Abedul negro", "Arce canela", "Cajeput"],
    answer: "Abedul blanco"
  },
  {
    question: "¿Cuál es el árbol nacional de Canadá?",
    options: ["Pino", "Abedul", "Arce", "Abeto"],
    answer: "Arce"
  }
  
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");
const questionContainer = document.getElementById("question-container");
const feedbackImage = document.getElementById("feedback-image");
const restartButton = document.getElementById("restart-button");
const introductionContainer = document.getElementById("introduction-container");
const startButton = document.getElementById("start-button");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(optionElement);
  });

  questionContainer.classList.remove("fadeOut");
  questionContainer.classList.add("fadeIn");
  feedbackImage.style.display = "none"; 
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
    resultElement.textContent = "¡Respuesta correcta!";
    feedbackImage.src = "./img/plantado.png"; 
  } else {
    resultElement.textContent = "Respuesta incorrecta.";
    feedbackImage.src = "./img/monticulo.png"; 
  }

  feedbackImage.style.display = "block"; 
  nextButton.style.display = "inline";
  optionsElement.removeEventListener("click", checkAnswer);

  // Disable all options
  document.querySelectorAll(".option").forEach(option => {
    option.style.pointerEvents = "none";
  });

nextButton.style.display = "block";
}

function displayNextQuestion() {
  currentQuestionIndex++;
  resultElement.textContent = "";
  feedbackImage.style.display = "none"; 
  nextButton.style.display = "none";
  if (currentQuestionIndex < questions.length) {
    questionContainer.classList.remove("fadeIn");
    questionContainer.classList.add("fadeOut");
    setTimeout(displayQuestion, 1000); 
  } else {
    endGame();
  }
}


function endGame() {
  questionElement.textContent = `¡Juego terminado! Has plantado ${score} árboles.`;
  optionsElement.innerHTML = "";
  nextButton.style.display = "none";

 
 resultElement.innerHTML = "";

 
 if (score === questions.length) {
   
   for (let i = 0; i < 5; i++) {
     const imgClone = document.createElement("img");
     imgClone.src = "./img/plantado.png"; 
     imgClone.style.display = "inline-block"; 
     imgClone.style.width = "150px"; 
     imgClone.style.height = "150px"; 
     resultElement.appendChild(imgClone);
   }
 } else if (score == questions.length - 1) {
  for (let i = 0; i < 4; i++) {
    const imgClone = document.createElement("img");
    imgClone.src = "./img/plantado.png"; 
    imgClone.style.display = "inline-block"; 
    imgClone.style.width = "150px"; 
    imgClone.style.height = "150px";  
    resultElement.appendChild(imgClone);
  }
 } else if (score == questions.length - 2) {
  for (let i = 0; i < 3; i++) {
    const imgClone = document.createElement("img");
    imgClone.src = "./img/plantado.png"; 
    imgClone.style.display = "inline-block"; 
    imgClone.style.width = "150px"; 
    imgClone.style.height = "150px"; 
    resultElement.appendChild(imgClone);
  }
 } else if (score == questions.length - 3) {
  for (let i = 0; i < 2; i++) {
    const imgClone = document.createElement("img");
    imgClone.src = "./img/plantado.png"; 
    imgClone.style.display = "inline-block"; 
    imgClone.style.width = "150px"; 
    imgClone.style.height = "150px"; 
    resultElement.appendChild(imgClone);
  }
  } else if (score == questions.length - 4) {
  for (let i = 0; i < 1; i++) {
    const imgClone = document.createElement("img");
    imgClone.src = "./img/plantado.png"; 
    imgClone.style.display = "inline-block"; 
    imgClone.style.width = "150px"; 
    imgClone.style.height = "150px"; 
    resultElement.appendChild(imgClone);
  }
  } else {
    const imgClone = document.createElement("img");
    imgClone.src = "./img/monticulo.png"; 
    imgClone.style.display = "inline-block"; 
    imgClone.style.width = "150px"; 
    imgClone.style.height = "150px"; 
    resultElement.appendChild(imgClone);
 }

 restartButton.style.display = "inline";

  
}

document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("start-button");
  const introductionContainer = document.getElementById("introduction-container");
  const questionContainer = document.getElementById("question-container");

  startButton.addEventListener("click", function() {
    introductionContainer.style.display = "none";
    questionContainer.style.display = "block";
    startGame();
  });
});

function startGame() {
  introductionContainer.style.display = 'none';
  questionContainer.style.display = 'block';
  displayQuestion();
  
}


displayQuestion();
nextButton.addEventListener("click", displayNextQuestion);


document.getElementById("restart-button").addEventListener("click", function() {
  location.reload();
});



  