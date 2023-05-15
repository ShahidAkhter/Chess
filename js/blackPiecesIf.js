blackPiecesConditioning=(e)=>{
    if (e.classList.contains('king-black') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['King'][1]))) {
        King('King',e.id, piecesPos["Black"]['King'][0], 'king-black', piecesPos['Black']['King'][1])
    }
    else if (e.classList.contains('rook-black-1') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['Rook_1'][1]))) {
        Rook('Rook_1',e.id, piecesPos["Black"]['Rook_1'][0], 'rook-black-1', piecesPos['Black']['Rook_1'][1])
    }
    else if (e.classList.contains('rook-black-2') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['Black']['Rook_2'][1]))) {
        Rook('Rook_2',e.id, piecesPos["Black"]['Rook_2'][0], 'rook-black-2', piecesPos['Black']['Rook_2'][1])
    }
}