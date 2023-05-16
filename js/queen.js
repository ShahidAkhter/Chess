const Queen = (pieceName, id, piecePosIs, classNameIs, keyIs) => {
    let changePosIs = changePos(pieceName, id, piecePosIs, classNameIs, keyIs)
    if (changePosIs !== 0) {
        return 0;
    }
    charId1 = id[0]
    numberId1 = id[1]

    charId = chars.indexOf(id[0])
    numberId = Number(id[1])

    validMove = [
        `${charId1}1`,
        `${charId1}2`,
        `${charId1}3`,
        `${charId1}4`,
        `${charId1}5`,
        `${charId1}6`,
        `${charId1}7`,
        `${charId1}8`,
        `a${numberId1}`,
        `b${numberId1}`,
        `c${numberId1}`,
        `d${numberId1}`,
        `e${numberId1}`,
        `f${numberId1}`,
        `g${numberId1}`,
        `h${numberId1}`,
        `${chars[charId - 8]}${numberId1 - 8}`,
        `${chars[charId - 7]}${numberId - 7}`,
        `${chars[charId - 6]}${numberId - 6}`,
        `${chars[charId - 5]}${numberId - 5}`,
        `${chars[charId - 4]}${numberId - 4}`,
        `${chars[charId - 3]}${numberId - 3}`,
        `${chars[charId - 2]}${numberId - 2}`,
        `${chars[charId - 1]}${numberId - 1}`,
        `${chars[charId]}${numberId}`,
        `${chars[charId + 1]}${numberId + 1}`,
        `${chars[charId + 2]}${numberId + 2}`,
        `${chars[charId + 3]}${numberId + 3}`,
        `${chars[charId + 4]}${numberId + 4}`,
        `${chars[charId + 5]}${numberId + 5}`,
        `${chars[charId + 6]}${numberId + 6}`,
        `${chars[charId + 7]}${numberId + 7}`,
        `${chars[charId + 8]}${numberId + 8}`,

        `${chars[charId + 8]}${numberId - 8}`,
        `${chars[charId + 7]}${numberId - 7}`,
        `${chars[charId + 6]}${numberId - 6}`,
        `${chars[charId + 5]}${numberId - 5}`,
        `${chars[charId + 4]}${numberId - 4}`,
        `${chars[charId + 3]}${numberId - 3}`,
        `${chars[charId + 2]}${numberId - 2}`,
        `${chars[charId + 1]}${numberId - 1}`,
        `${chars[charId]}${numberId}`,
        `${chars[charId - 1]}${numberId + 1}`,
        `${chars[charId - 2]}${numberId + 2}`,
        `${chars[charId - 3]}${numberId + 3}`,
        `${chars[charId - 4]}${numberId + 4}`,
        `${chars[charId - 5]}${numberId + 5}`,
        `${chars[charId - 6]}${numberId + 6}`,
        `${chars[charId - 7]}${numberId + 7}`,
        `${chars[charId - 8]}${numberId + 8}`,



    ]


    alwaysRunnerOnPiece(id, keyIs);
    return 0;
}
