const socresList = document.querySelector("#userScore")
const clearScores = document.querySelector("#clear")


let taste = JSON.parse(localStorage.getItem("scores")) || []

clearScores.addEventListener("click", () => {
    localStorage.clear()
    taste = []
    socresList.innerHTML = ""
    buildScores()
})

function buildScores() {
    console.log()
    taste.map(item => {
        const newScore = document.createElement("li")

        newScore.textContent = item.name + " " + item.score
        socresList.append(newScore)
    })
}

buildScores()