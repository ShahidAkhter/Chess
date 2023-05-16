blackPiecesConditioning=(e)=>{
    if (e.classList.contains('king-black') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['King'][1]))) {
        King('King',e.id, piecesPos["Black"]['King'][0], 'king-black', piecesPos['Black']['King'][1])
    }
    else if (e.classList.contains('queen-black') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['Queen'][1]))) {
        Queen('Queen',e.id, piecesPos["Black"]['Queen'][0], 'queen-black', piecesPos['Black']['Queen'][1])
    }
    else if (e.classList.contains('bishop-black-1') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['Bishop_1'][1]))) {
        Bishop('Bishop_1',e.id, piecesPos["Black"]['Bishop_1'][0], 'bishop-black-1', piecesPos['Black']['Bishop_1'][1])
    }
    else if (e.classList.contains('bishop-black-2') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['Bishop_2'][1]))) {
        Bishop('Bishop_2',e.id, piecesPos["Black"]['Bishop_2'][0], 'bishop-black-2', piecesPos['Black']['Bishop_2'][1])
    }
    else if (e.classList.contains('knight-black-1') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['Knight_1'][1]))) {
        Knight('Knight_1',e.id, piecesPos["Black"]['Knight_1'][0], 'knight-black-1', piecesPos['Black']['Knight_1'][1])
    }
    else if (e.classList.contains('knight-black-2') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['Knight_2'][1]))) {
        Knight('Knight_2',e.id, piecesPos["Black"]['Knight_2'][0], 'knight-black-2', piecesPos['Black']['Knight_2'][1])
    }
    else if (e.classList.contains('rook-black-1') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['Rook_1'][1]))) {
        Rook('Rook_1',e.id, piecesPos["Black"]['Rook_1'][0], 'rook-black-1', piecesPos['Black']['Rook_1'][1])
    }
    else if (e.classList.contains('rook-black-2') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['Rook_2'][1]))) {
        Rook('Rook_2',e.id, piecesPos["Black"]['Rook_2'][0], 'rook-black-2', piecesPos['Black']['Rook_2'][1])
    }

}