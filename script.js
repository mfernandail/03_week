const motivationalPhrases = [
  "Believe in yourself and anything is possible.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Every step brings you closer to your goal.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Discipline will eventually overcome talent.",
  "If you can dream it, you can achieve it.",
  "It doesn’t matter how slowly you go, as long as you don’t stop.",
  "Turn obstacles into opportunities.",
  "Do it scared, but do it.",
  "Today is a good day to start.",
  "Failure is not the opposite of success, it’s part of the journey.",
  "Don’t compare yourself, focus on your own progress.",
  "The effort you make today is the success of tomorrow.",
  "Every achievement begins with the decision to try.",
  "Don’t give up, the best is yet to come."
];
document.getElementById("btn").addEventListener("click", () => {
  const paragraph = document.querySelector(".p_phrase")
  const randomIndex = Math.floor(Math.random() * motivationalPhrases.length)
  const randomPhrase = motivationalPhrases[randomIndex]
  paragraph.innerHTML = randomPhrase

  paragraph.style.fontStyle = "italic"
  paragraph.style.fontSize = "1.4rem"
  console.log(randomPhrase)
})
