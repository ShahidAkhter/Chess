const King = (pieceName,id, piecePosIs, classNameIs, keyIs) => {
    let changePosIs = changePos(pieceName,id, piecePosIs, classNameIs, keyIs)
    if (changePosIs !== 0) {
        return 0;
    }

    charId = chars.indexOf(id[0])
    numberId = Number(id[1])

    validMove = [`${chars[charId - 1]}${numberId + 1}`, `${chars[charId - 1]}${numberId}`, `${chars[charId - 1]}${numberId - 1}`,
    `${chars[charId]}${numberId + 1}`, `${chars[charId]}${numberId}`, `${chars[charId]}${numberId - 1}`,
    `${chars[charId + 1]}${numberId + 1}`, `${chars[charId + 1]}${numberId}`, `${chars[charId + 1]}${numberId - 1}`
    ]


    alwaysRunnerOnPiece(id, keyIs);
    console.log(piecesPos)
    return 0;
}
