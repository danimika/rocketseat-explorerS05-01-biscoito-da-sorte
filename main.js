const fortunes = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Joys are often the shadows, cast by sorrows.",
  "You will be hungry again in one hour.",
  "Jealousy doesn't open doors, it closes them!",
  "Change can hurt, but it leads a path to something better.",
  "Hard work pays off in the future, laziness pays off now.",
  "A smile is your passport into the hearts of others.",
  "Land is always on the mind of a flying bird.",
  "A fanatic is one who can't change his mind, and won't change the subject.",
  "Everyone agrees. You are the best.",
  "You cannot love life until you live the life you love.",
  "Help! I am being held prisoner in a fortune cookie factory.",
  "Do not mistake temptation for opportunity.",
]
const randomIndex = Math.floor(Math.random() * fortunes.length)

const closedCookie = document.querySelector("#cookie")
const openedCookie = document.querySelector
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

closedCookie.addEventListener('click', openFortune)
screen2.querySelector('button').addEventListener('click', handleResetFortune)




function openFortune(e) {
  screen2.querySelector('p').innerText = fortunes[randomIndex]
  toggleScreen()
}

function handleResetFortune(){
  window.location.reload(true)
}

function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}