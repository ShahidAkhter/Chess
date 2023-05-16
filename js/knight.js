const Knight = (pieceName, id, piecePosIs, classNameIs, keyIs) => {
    let changePosIs = changePos(pieceName, id, piecePosIs, classNameIs, keyIs)
    if (changePosIs !== 0) {
        return 0;
    }

    charId = chars.indexOf(id[0])
    numberId = Number(id[1])

    validMove = [`${chars[charId+2]}${numberId-1}`,`${chars[charId+2]}${numberId+1}`,`${chars[charId-2]}${numberId-1}`,`${chars[charId-2]}${numberId+1}`,
    `${chars[charId+1]}${numberId-2}`,`${chars[charId+1]}${numberId+2}`,`${chars[charId-1]}${numberId-2}`,`${chars[charId-1]}${numberId+2}`
]


    alwaysRunnerOnPiece(id, keyIs);
    return 0;
}
