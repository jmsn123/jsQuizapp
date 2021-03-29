const socresList = document.querySelector("#userScore")
const clearScores = document.querySelector("#clear")


let taste = JSON.stringify(localStorage.getItem("scores")) || []
console.log(JSON.parse(taste))

function buildScores() {

}