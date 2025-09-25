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

const moods = ["😃", "🤯", "🤖", "🔥", "🧠", "💡", "🎉", "⚡"];
document.getElementById("emojiBtn").addEventListener("click", () => {
  const mood = moods[Math.floor(Math.random() * moods.length)];
  document.getElementById("emojiOutput").textContent = `AI says: ${mood}`;
});

const riddles = [
  "I speak in 0s and 1s, but I create worlds. What am I? (💻)",
  "The more you take out of me, the bigger I get. What am I? (🕳️ memory)",
  "I can learn from data but I’m not human. What am I? (🤖 AI)",
];

document.getElementById("riddleBtn").addEventListener("click", () => {
  document.getElementById("riddleOutput").textContent =
    riddles[Math.floor(Math.random() * riddles.length)];
});
