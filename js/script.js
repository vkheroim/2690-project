document.body.style.transition = "background-color 0.3s";

// Background color changer (already there)
const button = document.createElement("button");
button.textContent = "Change Background Color";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
document.body.appendChild(button);

button.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// ---- Quiz Logic ----
const quizButtons = document.querySelectorAll(".quiz-btn");
const quizAnswer = document.getElementById("quiz-answer");

quizButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    quizAnswer.textContent = `Great choice! "${btn.textContent}" is one of the best parts of CS 🎉`;
  });
});

// ---- AI Random Fact Generator ----
const facts = [
  "CS powers AI, which is changing the world 🌍",
  "Coding is like magic — you can build anything ✨",
  "Computer Science lets you solve real-world problems 🧩",
  "AI and Machine Learning are the future 🚀",
  "It combines logic and creativity in unique ways 🎨🧠",
];

const factBtn = document.getElementById("fact-btn");
const factOutput = document.getElementById("fact-output");

factBtn.addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  factOutput.textContent = randomFact;
});
