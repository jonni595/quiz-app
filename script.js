const quizData = [
  {
    question: "Everything in JavaScript is either a...",
    a: "Primitive or object",
    b: "Function or object",
    c: "Trick question! only objects",
    d: "Number or object",
    correct: "a",
  },
  {
    question: "Who was the creator of Javascript?",
    a: "Evan You",
    b: "Brendan Eich",
    c: "Steve Jobs",
    d: "Mark Zuckerberg",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
]

const quiz = document.getElementById('quiz')
const answerLis = document.querySelectorAll('.answer')
const questionTitle = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionTitle.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerLis.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer

  answerLis.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })

  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }

      currentQuiz++

      (currentQuiz < quizData.length)
      ? loadQuiz()
      : quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>
      `
  }
})