function mostrarTabuleiro() {
    let tab = document.querySelector("iframe#Tabuleiro")
    tab.setAttribute("src", "https://chess.org")

    console.log("Apareci!!!")
}

function pararTabuleiro() {
    let tab = document.querySelector("iframe#Tabuleiro")
    tab.setAttribute("src", "")

    console.log("Sumi!!!")
}
