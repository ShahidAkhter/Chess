const alwaysRunnerOnPiece = (id, keyIs) => {
    validMove.forEach(element => {
        if (!selectedPiece && document.getElementById(element)) {
            document.getElementById(element).classList.add('bgOnClick')
            document.getElementById(element).classList.add(keyIs)
        } else {
            if (document.getElementById(element)) {
                document.getElementById(element).classList.remove('bgOnClick')
                document.getElementById(element).classList.remove(keyIs)
            }
        }
    });
    selectedPiece = selectedPiece ? false : true;
    // turn = turn === "Black" ? "White" : "Black";
    document.getElementById(id).classList.remove('bgOnClick');
    document.getElementById(id).classList.remove(keyIs);
    return 0;
}

const changePos = (pieceName,id, piecePosIs, classNameIs, keyIs) => {
    if (selectedPiece && document.getElementById(id).classList.contains(keyIs)) {
        validMove.forEach(element => {
            if (document.getElementById(element)) {
                document.getElementById(element).classList.remove('bgOnClick')
                document.getElementById(element).classList.remove(keyIs)
            }
        });
        document.getElementById(piecePosIs).classList.remove(classNameIs)
        piecePosIs = id;
        document.getElementById(piecePosIs).classList.add(classNameIs);
        selectedPiece = selectedPiece ? false : true;
        piecesPos[turn][pieceName][0]=piecePosIs;
        turn = turn === "Black" ? "White" : "Black";

        return piecePosIs;
    }
    return 0;
}