whitePiecesConditioning=(e)=>{
    if (e.classList.contains('king-white') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['King'][1]))) {
        King('King',e.id, piecesPos["White"]['King'][0], 'king-white', piecesPos['White']['King'][1])
    }
    else if (e.classList.contains('queen-white') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Queen'][1]))) {
        Queen('Queen',e.id, piecesPos["White"]['Queen'][0], 'queen-white', piecesPos['White']['Queen'][1])
    }
    else if (e.classList.contains('bishop-white-1') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Bishop_1'][1]))) {
        Bishop('Bishop_1',e.id, piecesPos["White"]['Bishop_1'][0], 'bishop-white-1', piecesPos['White']['Bishop_1'][1])
    }
    else if (e.classList.contains('bishop-white-2') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Bishop_2'][1]))) {
        Bishop('Bishop_2',e.id, piecesPos["White"]['Bishop_2'][0], 'bishop-white-2', piecesPos['White']['Bishop_2'][1])
    }
    else if (e.classList.contains('knight-white-1') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Knight_1'][1]))) {
        Knight('Knight_1',e.id, piecesPos["White"]['Knight_1'][0], 'knight-white-1', piecesPos['White']['Knight_1'][1])
    }
    else if (e.classList.contains('knight-white-2') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Knight_2'][1]))) {
        Knight('Knight_2',e.id, piecesPos["White"]['Knight_2'][0], 'knight-white-2', piecesPos['White']['Knight_2'][1])
    }
    else if (e.classList.contains('rook-white-1') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Rook_1'][1]))) {
        Rook('Rook_1',e.id, piecesPos["White"]['Rook_1'][0], 'rook-white-1', piecesPos['White']['Rook_1'][1])
    }
    else if (e.classList.contains('rook-white-2') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Rook_2'][1]))) {
        Rook('Rook_2',e.id, piecesPos["White"]['Rook_2'][0], 'rook-white-2', piecesPos['White']['Rook_2'][1])
    }
    
    else if (e.classList.contains('pawn-white-1') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Pawn_1'][1]))) {
        Pawn('Pawn_1',e.id, piecesPos["White"]['Pawn_1'][0], 'pawn-white-1', piecesPos['White']['Pawn_1'][1])
    }
    else if (e.classList.contains('pawn-white-2') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Pawn_2'][1]))) {
        Pawn('Pawn_2',e.id, piecesPos["White"]['Pawn_2'][0], 'pawn-white-2', piecesPos['White']['Pawn_2'][1])
    }
    else if (e.classList.contains('pawn-white-3') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Pawn_3'][1]))) {
        Pawn('Pawn_3',e.id, piecesPos["White"]['Pawn_3'][0], 'pawn-white-3', piecesPos['White']['Pawn_3'][1])
    }
    else if (e.classList.contains('pawn-white-4') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Pawn_4'][1]))) {
        Pawn('Pawn_4',e.id, piecesPos["White"]['Pawn_4'][0], 'pawn-white-4', piecesPos['White']['Pawn_4'][1])
    }
    else if (e.classList.contains('pawn-white-5') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Pawn_5'][1]))) {
        Pawn('Pawn_5',e.id, piecesPos["White"]['Pawn_5'][0], 'pawn-white-5', piecesPos['White']['Pawn_5'][1])
    }
    else if (e.classList.contains('pawn-white-6') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Pawn_6'][1]))) {
        Pawn('Pawn_6',e.id, piecesPos["White"]['Pawn_6'][0], 'pawn-white-6', piecesPos['White']['Pawn_6'][1])
    }
    else if (e.classList.contains('pawn-white-7') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Pawn_7'][1]))) {
        Pawn('Pawn_7',e.id, piecesPos["White"]['Pawn_7'][0], 'pawn-white-7', piecesPos['White']['Pawn_7'][1])
    }
    else if (e.classList.contains('pawn-white-8') || (e.classList.contains('bgOnClick') && e.classList.contains(piecesPos['White']['Pawn_8'][1]))) {
        Pawn('Pawn_8',e.id, piecesPos["White"]['Pawn_8'][0], 'pawn-white-8', piecesPos['White']['Pawn_8'][1])
    }

}