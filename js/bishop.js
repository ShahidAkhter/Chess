const Bishop = (pieceName, id, piecePosIs, classNameIs, keyIs) => {
    let changePosIs = changePos(pieceName, id, piecePosIs, classNameIs, keyIs)
    if (changePosIs !== 0) {
        return 0;
    }

    charId = chars.indexOf(id[0])
    numberId =Number(id[1])
    validMove = [
        `${chars[charId - 8]}${numberId - 8}`,
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
        



    ];

    alwaysRunnerOnPiece(id, keyIs);
    return 0;
}
