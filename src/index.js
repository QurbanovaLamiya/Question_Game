let questionBank = [
  {
      question: 'Inside which Html Element do we put the JS?',
      option: ['javascript', 'script', 'js', 'jQuery'],
      answer: 'script'
  },
  {
      question: 'How do you write "Hello World" in an alert box?',
      option: ['msg("Hello World");', 'prompt("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");'],
      answer: 'alert("Hello World");'
  },
  {
      question: 'How do you create a function in JavaScript?',
      option: ['function myFunction()', 'function = myFunction()', 'make.function.myFunction()', 'function:myFunction()'],
      answer: 'function myFunction()'
  },
  {
      question: 'How do you write an IF statement in JavaScript?',
      option: ["if (i === 5)", "if i = 5 then", "if i === 5 then", "if (i = 5)"],
      answer: 'if (i === 5)'
  },
  {
      question: 'What Characters Contains an Array?',
      option: ['< >,', '{ }', '[ ]', '# #'],
      answer: '[ ]'
  }
]
let quizContainer = document.getElementById('quiz-container');
let question = document.getElementById('question');
let scorecard = document.getElementById('scorecard');
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let next = document.querySelector('.next');
let points = document.getElementById('score');
let span = document.querySelectorAll('span');
let i = 0;
let score = 0;


function displayQuestion() {
  for (let a = 0; a < span.length; a++) {
      span[a].style.background = 'none';
  }
  question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];
  stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}


function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
      score = score + 1;
      document.getElementById(e.id).style.background = 'green';
  } else {
      document.getElementById(e.id).style.background = 'red';
  }
  setTimeout(nextQuestion, 300);
}


function nextQuestion() {
  if (i < questionBank.length - 1) {
      i = i + 1;
      displayQuestion();
  }
  else {
      points.innerHTML = score + '/' + questionBank.length;
      quizContainer.style.display = 'none';
      scoreboard.style.display = 'block';
  }
}


next.addEventListener('click', nextQuestion);


function backToQuiz() {
  location.reload();
}


function checkAnswer() {
  let answerBank = document.getElementById('answerBank');
  let answers = document.getElementById('answers');
  answerBank.style.display = 'block';
  scoreboard.style.display = 'none';
  for (let a = 0; a < questionBank.length; a++) {
      let list = document.createElement('li');
      list.innerHTML = questionBank[a].answer;
      answers.appendChild(list);
  }
}


displayQuestion();