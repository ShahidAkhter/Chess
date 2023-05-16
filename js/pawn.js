const Pawn = (pieceName, id, piecePosIs, classNameIs, keyIs) => {
    let changePosIs = changePos(pieceName, id, piecePosIs, classNameIs, keyIs)
    if (changePosIs !== 0) {
        return 0;
    }

    charId = chars.indexOf(id[0])
    numberId = Number(id[1])
    if (turn == "White") {
        validMove = [`${chars[charId]}${numberId + 1}`]
        if (piecePosIs==piecesPos["White"][pieceName][2]) {
            validMove.push(`${chars[charId]}${numberId + 2}`)
        }
        if (document.getElementById(`${chars[charId - 1]}${numberId + 1}`) && getComputedStyle(document.getElementById(`${chars[charId - 1]}${numberId + 1}`)).backgroundImage!="none") {
            validMove.push(`${chars[charId - 1]}${numberId + 1}`)
        }
        if (document.getElementById(`${chars[charId + 1]}${numberId + 1}`) && getComputedStyle(document.getElementById(`${chars[charId + 1]}${numberId + 1}`)).backgroundImage!="none") {
            validMove.push(`${chars[charId + 1]}${numberId + 1}`)
        }
    }
    if (turn == "Black") {
        validMove = [`${chars[charId]}${numberId - 1}`]
        if (piecePosIs==piecesPos["Black"][pieceName][2]) {
            validMove.push(`${chars[charId]}${numberId - 2}`)
        }
        if (document.getElementById(`${chars[charId - 1]}${numberId - 1}`) && getComputedStyle(document.getElementById(`${chars[charId - 1]}${numberId - 1}`)).backgroundImage!="none") {
            validMove.push(`${chars[charId - 1]}${numberId - 1}`)
        }
        if (document.getElementById(`${chars[charId + 1]}${numberId - 1}`) && getComputedStyle(document.getElementById(`${chars[charId + 1]}${numberId - 1}`)).backgroundImage!="none") {
            validMove.push(`${chars[charId + 1]}${numberId - 1}`)
        }
    }

    alwaysRunnerOnPiece(id, keyIs);
    return 0;
}
