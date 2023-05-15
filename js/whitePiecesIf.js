whitePiecesConditioning=(e)=>{
    if (e.classList.contains('king-white') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['King'][1]))) {
        King('King',e.id, piecesPos["White"]['King'][0], 'king-white', piecesPos['White']['King'][1])
    }
    else if (e.classList.contains('rook-white-1') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Rook_1'][1]))) {
        Rook('Rook_1',e.id, piecesPos["White"]['Rook_1'][0], 'rook-white-1', piecesPos['White']['Rook_1'][1])
    }
    else if (e.classList.contains('rook-white-2') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Rook_2'][1]))) {
        Rook('Rook_2',e.id, piecesPos["White"]['Rook_2'][0], 'rook-white-2', piecesPos['White']['Rook_2'][1])
    }
}