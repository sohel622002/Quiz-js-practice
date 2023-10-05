const questionsAnswerData = [
  {
    id: 1,
    q: "What is the largest animal?",
    ans1: "Shark",
    ans2: "Whale",
    ans3: "Giraf",
    ans4: "Elephant",
    ans: "Shark",
  },
  {
    id: 2,
    q: "What is the largest mammel?",
    ans1: "Human",
    ans2: "Whale",
    ans3: "Giraf",
    ans4: "Elephant",
    ans: "Human",
  },
  {
    id: 3,
    q: "What is the largest bird?",
    ans1: "Seagirl",
    ans2: "Whale",
    ans3: "Giraf",
    ans4: "Elephant",
    ans: "Elephant",
  },
  {
    id: 4,
    q: "What is the largest City?",
    ans1: "Ahmedabad",
    ans2: "Whale",
    ans3: "Giraf",
    ans4: "Elephant",
    ans: "Whale",
  },
];

let totalQuestions = questionsAnswerData.length;
let startIndex = 0;
let score = 0;

const container = document.querySelector(".container");

window.addEventListener(
  "DOMContentLoaded",
  updateQuestion(questionsAnswerData[startIndex])
  );

function updateQuestion(question) {
  let answerClicked = false;

  container.innerHTML = `<h1 class="heading">Simple Quiz</h1>
    <div class="question-container">
      <h1>
          <span id="q-number">
              ${question.id}.
              </span>
          <span id="question">
          ${question.q}
          </span>
      </h1>
      <div class="answers">
      <div class="answer" id="ans1">${question.ans1}</div>
      <div class="answer" id="ans2">${question.ans2}</div>
      <div class="answer" id="ans3">${question.ans3}</div>
      <div class="answer" id="ans4">${question.ans4}</div>
      </div>
      <button class="next-btn" id="nextbtn">
      ${startIndex + 1 === totalQuestions ? "Show Result" : "Next"}
      </button>
      <p class="question-detail" id="q-data">
      <span id="complete-question">${startIndex + 1}</span>
      of <span id="total-question">${totalQuestions}
           </span> question
           </p>
           </div>`;

  const answers = document.querySelectorAll(".answer");
  const nextbtn = document.getElementById("nextbtn");

  function hilightGreen(element) {
    element.style.backgroundColor = "green";
    element.style.color = "White";
  }
  function hilightRed(element) {
    element.style.backgroundColor = "red";
    element.style.color = "White";
  }
  function hilightRightone() {
    const ans = question.ans;
    for (let i = 1; i < 5; i++) {
      let answer = "ans" + i;
      if (question[answer] == ans) {
        hilightGreen(answers[i - 1]);
      }
    }
  }

  function ansClickListner(e) {
    e.preventDefault();

    answerClicked = true

    if(answerClicked){
      nextbtn.addEventListener("click", changeQuestion);
      answerClicked = false
    }
    if (e.target.innerText == question.ans) {
      score++;
      hilightGreen(e.target);
    } else {
      hilightRed(e.target);
      hilightRightone();
    }
    
    answers.forEach((ans) => {
      ans.removeEventListener("click", ansClickListner);
    });
  }

  answers.forEach((ans) => {
    ans.addEventListener("click", ansClickListner);
  });

  function changeQuestion() {
    startIndex++;
    if (startIndex + 1 <= totalQuestions) {
      updateQuestion(questionsAnswerData[startIndex]);
    } else {
      console.log("completed");
    }
  }
}
