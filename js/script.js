let gameBoard = document.getElementById('game-board');
const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let selectedPiece = false;
// let kingPos = "e8"
let newChars = [];
let newNumber = [];
let turn='White';

const board = (character, number, charNum) => {
    gameBoard.innerHTML += `<div class="squares" id="${character}${number}"></div>`
    // console.log('hello')
    if ((charNum + number) % 2 === 0) {
        document.getElementById(`${character}${number}`).classList.add(`squares-background-1`)
    } else {
        document.getElementById(`${character}${number}`).classList.add(`squares-background-2`)
    }
}

const boardDesign = () => {
    gameBoard.innerHTML = ""
    for (let i = 8; i > 0; i--) {
        for (let j = 0; j < chars.length; j++) {
            board(chars[j], i, j + 1)
        }

    }

    let allSquares = document.querySelectorAll('.squares');
    // King Initial Positioning
    document.getElementById(piecesPos["Black"]['King'][0]).classList.add('king-black')
    document.getElementById(piecesPos["White"]['King'][0]).classList.add('king-white')

    document.getElementById(piecesPos["Black"]['Queen'][0]).classList.add('queen-black')
    document.getElementById(piecesPos["White"]['Queen'][0]).classList.add('queen-white')

    // Rook Initial Positioning
    document.getElementById(piecesPos["White"]['Rook_1'][0]).classList.add('rook-white-1')
    document.getElementById(piecesPos["White"]['Rook_2'][0]).classList.add('rook-white-2')

    document.getElementById(piecesPos["Black"]['Rook_1'][0]).classList.add('rook-black-1')
    document.getElementById(piecesPos["Black"]['Rook_2'][0]).classList.add('rook-black-2')

    // Bishop Initial Positioning
    document.getElementById(piecesPos["White"]['Bishop_1'][0]).classList.add('bishop-white-1')
    document.getElementById(piecesPos["White"]['Bishop_2'][0]).classList.add('bishop-white-2')

    document.getElementById(piecesPos["Black"]['Bishop_1'][0]).classList.add('bishop-black-1')
    document.getElementById(piecesPos["Black"]['Bishop_2'][0]).classList.add('bishop-black-2')

    Array.from(allSquares).forEach(element => {
        gameLogic(element)
    });
}







const gameLogic = (element) => {
    element.addEventListener('click', () => {
        let e = document.getElementById(element.id)
        if (turn=="White") {   
            whitePiecesConditioning(e)
        }
        if (turn=='Black') {
            blackPiecesConditioning(e)
        }
    })
}

boardDesign();

