const Rook = (pieceName, id, piecePosIs, classNameIs, keyIs) => {
    let changePosIs = changePos(pieceName, id, piecePosIs, classNameIs, keyIs)
    if (changePosIs !== 0) {
        return 0;
    }

    charId = id[0]
    numberId =id[1]
    validMove = [`${charId}1`, `${charId}2`, `${charId}3`, `${charId}4`, `${charId}5`, `${charId}6`, `${charId}7`, `${charId}8`,
    `a${numberId}`, `b${numberId}`, `c${numberId}`, `d${numberId}`, `e${numberId}`, `f${numberId}`, `g${numberId}`, `h${numberId}`]


    alwaysRunnerOnPiece(id, keyIs);
    console.log(piecesPos)
    return 0;
}
