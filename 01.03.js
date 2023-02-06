console.log("hjgvhgvjhg")
const computerImg = document.querySelectorAll(".computerImg")
const playerNow = document.querySelectorAll(".palyerImg")
const button = document.querySelector("button")
const counterPoints = document.querySelectorAll("h1")


let playerSymbol = ""
let computerSymbol = ""

let playerPoints = 0
let computerPoints = 0

const updateBorder = (index) => {
    playerNow[0].style.border = "none"
    playerNow[1].style.border = "none"
    playerNow[2].style.border = "none"
    playerNow[index].style.border = "3px solid black"
}
const updateComputerSymbol = () => {
    const rnd = Math.ceil(Math.random()*3)



    if(rnd === 1) {
        computerSymbol = "rock"
        computerImg[0].style.border = "2px solid black"
    }
    if(rnd === 2) {
        computerSymbol = "paper"
        computerImg[1].style.border = "2px solid black"
    }
    if(rnd === 3) {
        computerSymbol = "scissors"
        computerImg[2].style.border = "2px solid black"
    }
}
const compareSymbol = () => {

    const pl = playerSymbol
    const comp = computerSymbol

    if(pl === "scissors") playerPoints += 1
    if(pl === "paper") playerPoints += 1
    if(pl === "rock") playerPoints += 1

    if(pl === "scissors") computerPoints += 1
    if(pl === "paper") computerPoints += 1
    if(pl === "rock") computerPoints += 1

}

playerNow[0].onclick = () => {
    playerSymbol = "rock"
    updateBorder(0)
}
playerNow[1].onclick = () => {
    playerSymbol = "paper"
    updateBorder(1)
}
playerNow[2].onclick = () => {
    playerSymbol = "scissors"
    updateBorder(2)
}

button.onclick = () => {
    if(playerSymbol) {
        updateComputerSymbol()


    }
}





