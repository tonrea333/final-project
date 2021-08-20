//Const query selectors for html IDs heading, startgame masterdiv, pieces, and gameboard

const boardGame = document.querySelector("#gameboard");
const chessPieces = document.querySelector("#gamepieces");
const headingChess = document.querySelector("#chessheading");
const buttonStart = document.querySelector("#StartGame");
const toprow1 = document.querySelector("#toprow")

//Function and event listner to build board and add pieces

buttonStart.addEventListener("click", startGame);

function startGame() {

    let blackAlphaRow8 = document.createElement("div");
    blackAlphaRow8.setAttribute("id", "x8");
    boardGame.appendChild(blackAlphaRow8);
    let textRow8 = document.createTextNode("8");
    blackAlphaRow8.appendChild(textRow8);

    let blackAlphaRow8a = document.createElement("div");
    blackAlphaRow8a.setAttribute("id", "a8");
    boardGame.appendChild(blackAlphaRow8a);

    let blackAlphaRow8b = document.createElement("div");
    blackAlphaRow8b.setAttribute("id", "b8");
    boardGame.appendChild(blackAlphaRow8b);

    let blackAlphaRow8c = document.createElement("div");
    blackAlphaRow8c.setAttribute("id", "c8");
    boardGame.appendChild(blackAlphaRow8c);

    let blackAlphaRow8d = document.createElement("div");
    blackAlphaRow8d.setAttribute("id", "d8");
    boardGame.appendChild(blackAlphaRow8d);

    let blackAlphaRow8e = document.createElement("div");
    blackAlphaRow8e.setAttribute("id", "e8");
    boardGame.appendChild(blackAlphaRow8e);

    let blackAlphaRow8f = document.createElement("div");
    blackAlphaRow8f.setAttribute("id", "f8");
    boardGame.appendChild(blackAlphaRow8f);

    let blackAlphaRow8g = document.createElement("div");
    blackAlphaRow8g.setAttribute("id", "g8");
    boardGame.appendChild(blackAlphaRow8g);

    let blackAlphaRow8h = document.createElement("div");
    blackAlphaRow8h.setAttribute("id", "h8");
    boardGame.appendChild(blackAlphaRow8h);

    //==================================================================
    let blackAlphaRow7 = document.createElement("div");
    blackAlphaRow7.setAttribute("id", "x7");
    boardGame.appendChild(blackAlphaRow7);
    let textRow7 = document.createTextNode("7");
    blackAlphaRow7.appendChild(textRow7);

    let blackAlphaRow7a = document.createElement("div");
    blackAlphaRow7a.setAttribute("id", "a7");
    blackAlphaRow7a.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow7a);

    let blackAlphaRow7b = document.createElement("div");
    blackAlphaRow7b.setAttribute("id", "b7");
    blackAlphaRow7b.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow7b);

    let blackAlphaRow7c = document.createElement("div");
    blackAlphaRow7c.setAttribute("id", "c7");
    blackAlphaRow7c.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow7c);

    let blackAlphaRow7d = document.createElement("div");
    blackAlphaRow7d.setAttribute("id", "d7");
    blackAlphaRow7d.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow7d);

    let blackAlphaRow7e = document.createElement("div");
    blackAlphaRow7e.setAttribute("id", "e7");
    blackAlphaRow7e.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow7e);

    let blackAlphaRow7f = document.createElement("div");
    blackAlphaRow7f.setAttribute("id", "f7");
    blackAlphaRow7f.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow7f);

    let blackAlphaRow7g = document.createElement("div");
    blackAlphaRow7g.setAttribute("id", "g7");
    blackAlphaRow7g.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow7g);

    let blackAlphaRow7h = document.createElement("div");
    blackAlphaRow7h.setAttribute("id", "h7");
    blackAlphaRow7h.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow7h);
    //==================================================================
    let blackAlphaRow6 = document.createElement("div");
    blackAlphaRow6.setAttribute("id", "x6");
    boardGame.appendChild(blackAlphaRow6);
    let textRow6 = document.createTextNode("6");
    blackAlphaRow6.appendChild(textRow6);

    let blackAlphaRow6a = document.createElement("div");
    blackAlphaRow6a.setAttribute("id", "a6");
    blackAlphaRow6a.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow6a);

    let blackAlphaRow6b = document.createElement("div");
    blackAlphaRow6b.setAttribute("id", "b6");
    blackAlphaRow6b.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow6b);

    let blackAlphaRow6c = document.createElement("div");
    blackAlphaRow6c.setAttribute("id", "c6");
    blackAlphaRow6c.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow6c);

    let blackAlphaRow6d = document.createElement("div");
    blackAlphaRow6d.setAttribute("id", "d6");
    blackAlphaRow6d.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow6d);

    let blackAlphaRow6e = document.createElement("div");
    blackAlphaRow6e.setAttribute("id", "e6");
    blackAlphaRow6e.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow6e);

    let blackAlphaRow6f = document.createElement("div");
    blackAlphaRow6f.setAttribute("id", "f6");
    blackAlphaRow6f.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow6f);

    let blackAlphaRow6g = document.createElement("div");
    blackAlphaRow6g.setAttribute("id", "g6");
    blackAlphaRow6g.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow6g);

    let blackAlphaRow6h = document.createElement("div");
    blackAlphaRow6h.setAttribute("id", "h6");
    blackAlphaRow6h.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow6h);
    //=================================================================

    //=================================================================
    let blackAlphaRow5 = document.createElement("div");
    blackAlphaRow5.setAttribute("id", "x5");
    boardGame.appendChild(blackAlphaRow5);
    let textRow5 = document.createTextNode("5");
    blackAlphaRow5.appendChild(textRow5);

    let blackAlphaRow5a = document.createElement("div");
    blackAlphaRow5a.setAttribute("id", "a5");
    boardGame.appendChild(blackAlphaRow5a);

    let blackAlphaRow5b = document.createElement("div");
    blackAlphaRow5b.setAttribute("id", "b5");
    boardGame.appendChild(blackAlphaRow5b);

    let blackAlphaRow5c = document.createElement("div");
    blackAlphaRow5c.setAttribute("id", "c5");
    boardGame.appendChild(blackAlphaRow5c);

    let blackAlphaRow5d = document.createElement("div");
    blackAlphaRow5d.setAttribute("id", "d5");
    boardGame.appendChild(blackAlphaRow5d);

    let blackAlphaRow5e = document.createElement("div");
    blackAlphaRow5e.setAttribute("id", "e5");
    boardGame.appendChild(blackAlphaRow5e);

    let blackAlphaRow5f = document.createElement("div");
    blackAlphaRow5f.setAttribute("id", "f5");
    boardGame.appendChild(blackAlphaRow5f);

    let blackAlphaRow5g = document.createElement("div");
    blackAlphaRow5g.setAttribute("id", "g5");
    boardGame.appendChild(blackAlphaRow5g);

    let blackAlphaRow5h = document.createElement("div");
    blackAlphaRow5h.setAttribute("id", "h5");
    boardGame.appendChild(blackAlphaRow5h);
    //================================================================
    let blackAlphaRow4 = document.createElement("div");
    blackAlphaRow4.setAttribute("id", "x4");
    boardGame.appendChild(blackAlphaRow4);
    let textRow4 = document.createTextNode("4");
    blackAlphaRow4.appendChild(textRow4);

    let blackAlphaRow4a = document.createElement("div");
    blackAlphaRow4a.setAttribute("id", "a4");
    boardGame.appendChild(blackAlphaRow4a);

    let blackAlphaRow4b = document.createElement("div");
    blackAlphaRow4b.setAttribute("id", "b4");
    boardGame.appendChild(blackAlphaRow4b);

    let blackAlphaRow4c = document.createElement("div");
    blackAlphaRow4c.setAttribute("id", "c4");
    boardGame.appendChild(blackAlphaRow4c);

    let blackAlphaRow4d = document.createElement("div");
    blackAlphaRow4d.setAttribute("id", "d4");
    boardGame.appendChild(blackAlphaRow4d);

    let blackAlphaRow4e = document.createElement("div");
    blackAlphaRow4e.setAttribute("id", "e4");
    boardGame.appendChild(blackAlphaRow4e);

    let blackAlphaRow4f = document.createElement("div");
    blackAlphaRow4f.setAttribute("id", "f4");
    boardGame.appendChild(blackAlphaRow4f);

    let blackAlphaRow4g = document.createElement("div");
    blackAlphaRow4g.setAttribute("id", "g4");
    boardGame.appendChild(blackAlphaRow4g);

    let blackAlphaRow4h = document.createElement("div");
    blackAlphaRow4h.setAttribute("id", "h4");
    boardGame.appendChild(blackAlphaRow4h);
    //=================================================================
    let blackAlphaRow3 = document.createElement("div");
    blackAlphaRow3.setAttribute("id", "x3");
    boardGame.appendChild(blackAlphaRow3);
    let textRow3 = document.createTextNode("3");
    blackAlphaRow3.appendChild(textRow3);

    let blackAlphaRow3a = document.createElement("div");
    blackAlphaRow3a.setAttribute("id", "a3");
    boardGame.appendChild(blackAlphaRow3a);

    let blackAlphaRow3b = document.createElement("div");
    blackAlphaRow3b.setAttribute("id", "b3");
    boardGame.appendChild(blackAlphaRow3b);

    let blackAlphaRow3c = document.createElement("div");
    blackAlphaRow3c.setAttribute("id", "c3");
    boardGame.appendChild(blackAlphaRow3c);

    let blackAlphaRow3d = document.createElement("div");
    blackAlphaRow3d.setAttribute("id", "d3");
    boardGame.appendChild(blackAlphaRow3d);

    let blackAlphaRow3e = document.createElement("div");
    blackAlphaRow3e.setAttribute("id", "e3");
    boardGame.appendChild(blackAlphaRow3e);

    let blackAlphaRow3f = document.createElement("div");
    blackAlphaRow3f.setAttribute("id", "f3");
    blackAlphaRow3f.setAttribute("draggable", "true");
    boardGame.appendChild(blackAlphaRow3f);

    let blackAlphaRow3g = document.createElement("div");
    blackAlphaRow3g.setAttribute("id", "g3");
    boardGame.appendChild(blackAlphaRow3g);

    let blackAlphaRow3h = document.createElement("div");
    blackAlphaRow3h.setAttribute("id", "h3");
    boardGame.appendChild(blackAlphaRow3h);
    //=================================================================
    let blackAlphaRow2 = document.createElement("div");
    blackAlphaRow2.setAttribute("id", "x2");
    boardGame.appendChild(blackAlphaRow2);
    let textRow2 = document.createTextNode("2");
    blackAlphaRow2.appendChild(textRow2);

    let blackAlphaRow2a = document.createElement("div");
    blackAlphaRow2a.setAttribute("id", "a2");
    boardGame.appendChild(blackAlphaRow2a);

    let blackAlphaRow2b = document.createElement("div");
    blackAlphaRow2b.setAttribute("id", "b2");
    boardGame.appendChild(blackAlphaRow2b);

    let blackAlphaRow2c = document.createElement("div");
    blackAlphaRow2c.setAttribute("id", "c2");
    boardGame.appendChild(blackAlphaRow2c);

    let blackAlphaRow2d = document.createElement("div");
    blackAlphaRow2d.setAttribute("id", "d2");
    boardGame.appendChild(blackAlphaRow2d);

    let blackAlphaRow2e = document.createElement("div");
    blackAlphaRow2e.setAttribute("id", "e2");
    boardGame.appendChild(blackAlphaRow2e);

    let blackAlphaRow2f = document.createElement("div");
    blackAlphaRow2f.setAttribute("id", "f2");
    boardGame.appendChild(blackAlphaRow2f);

    let blackAlphaRow2g = document.createElement("div");
    blackAlphaRow2g.setAttribute("id", "g2");
    boardGame.appendChild(blackAlphaRow2g);

    let blackAlphaRow2h = document.createElement("div");
    blackAlphaRow2h.setAttribute("id", "h2");
    boardGame.appendChild(blackAlphaRow2h);
    //=================================================================
    let blackAlphaRow1 = document.createElement("div");
    blackAlphaRow1.setAttribute("id", "x1");
    boardGame.appendChild(blackAlphaRow1);
    let textRow1 = document.createTextNode("1");
    blackAlphaRow1.appendChild(textRow1);

    let blackAlphaRow1a = document.createElement("div");
    blackAlphaRow1a.setAttribute("id", "a1");
    boardGame.appendChild(blackAlphaRow1a);

    let blackAlphaRow1b = document.createElement("div");
    blackAlphaRow1b.setAttribute("id", "b1");
    boardGame.appendChild(blackAlphaRow1b);

    let blackAlphaRow1c = document.createElement("div");
    blackAlphaRow1c.setAttribute("id", "c1");
    boardGame.appendChild(blackAlphaRow1c);

    let blackAlphaRow1d = document.createElement("div");
    blackAlphaRow1d.setAttribute("id", "d1");
    boardGame.appendChild(blackAlphaRow1d);

    let blackAlphaRow1e = document.createElement("div");
    blackAlphaRow1e.setAttribute("id", "e1");
    boardGame.appendChild(blackAlphaRow1e);

    let blackAlphaRow1f = document.createElement("div");
    blackAlphaRow1f.setAttribute("id", "f1");
    boardGame.appendChild(blackAlphaRow1f);

    let blackAlphaRow1g = document.createElement("div");
    blackAlphaRow1g.setAttribute("id", "g1");
    boardGame.appendChild(blackAlphaRow1g);

    let blackAlphaRow1h = document.createElement("div");
    blackAlphaRow1h.setAttribute("id", "h1");
    boardGame.appendChild(blackAlphaRow1h);
    //=================================================================
    //=================================================================

    //Alphabet row
    let blackAlphaRow1X = document.createElement("div");
    blackAlphaRow1X.setAttribute("id", "row1X");
    toprow1.appendChild(blackAlphaRow1X);

    let blackAlphaRow1A = document.createElement("div");
    blackAlphaRow1A.setAttribute("id", "row1A");
    toprow1.appendChild(blackAlphaRow1A);
    let textcol1 = document.createTextNode("A");
    blackAlphaRow1A.appendChild(textcol1);

    let blackAlphaRow1B = document.createElement("div");
    blackAlphaRow1B.setAttribute("id", "row1B");
    toprow1.appendChild(blackAlphaRow1B);
    let textcol2 = document.createTextNode("B");
    blackAlphaRow1B.appendChild(textcol2);

    let blackAlphaRow1C = document.createElement("div");
    blackAlphaRow1C.setAttribute("id", "row1C");
    toprow1.appendChild(blackAlphaRow1C);
    let textcol3 = document.createTextNode("C");
    blackAlphaRow1C.appendChild(textcol3);

    let blackAlphaRow1D = document.createElement("div");
    blackAlphaRow1D.setAttribute("id", "row1D");
    toprow1.appendChild(blackAlphaRow1D);
    let textcol4 = document.createTextNode("D");
    blackAlphaRow1D.appendChild(textcol4);

    let blackAlphaRow1E = document.createElement("div");
    blackAlphaRow1E.setAttribute("id", "row1E");
    toprow1.appendChild(blackAlphaRow1E);
    let textcol5 = document.createTextNode("E");
    blackAlphaRow1E.appendChild(textcol5);

    let blackAlphaRow1F = document.createElement("div");
    blackAlphaRow1F.setAttribute("id", "row1F");
    toprow1.appendChild(blackAlphaRow1F);
    let textcol6 = document.createTextNode("F");
    blackAlphaRow1F.appendChild(textcol6);

    let blackAlphaRow1G = document.createElement("div");
    blackAlphaRow1G.setAttribute("id", "row1G");
    toprow1.appendChild(blackAlphaRow1G);
    let textcol7 = document.createTextNode("G");
    blackAlphaRow1G.appendChild(textcol7);

    let blackAlphaRow1H = document.createElement("div");
    blackAlphaRow1H.setAttribute("id", "row1H");
    toprow1.appendChild(blackAlphaRow1H);
    let textcol8 = document.createTextNode("H");
    blackAlphaRow1H.appendChild(textcol8);




    //======================================================================
    //===================================================================


    //Source for chess pieces:
    const gamePiece = document.querySelector("#gamepieces");
    let piecesSource = document.createElement("div");
    piecesSource.setAttribute("id", "pieceSource");
    gamePiece.innerHTML = ("Chess pieces image Source: OpenClipart-Vectors from Pixabay")


    //=================================================
    //==================================================
    //Black pawn placement

    let blkPawn7Aimg = document.createElement("img");
    blkPawn7Aimg.setAttribute("class", "chesspiece");
    blkPawn7Aimg.src = "pawn-147066_1280.png";
    blackAlphaRow7a.appendChild(blkPawn7Aimg)

    let blkPawn7Bimg = document.createElement("img");
    blkPawn7Bimg.setAttribute("class", "chesspiece");
    blkPawn7Bimg.src = "pawn-147066_1280.png";
    blackAlphaRow7b.appendChild(blkPawn7Bimg);

    let blkPawn7Cimg = document.createElement("img");
    blkPawn7Cimg.setAttribute("class", "chesspiece");
    blkPawn7Cimg.src = "pawn-147066_1280.png";
    blackAlphaRow7c.appendChild(blkPawn7Cimg);

    let blkPawn7Dimg = document.createElement("img");
    blkPawn7Dimg.setAttribute("class", "chesspiece");
    blkPawn7Dimg.src = "pawn-147066_1280.png";
    blackAlphaRow7d.appendChild(blkPawn7Dimg);

    let blkPawn7Eimg = document.createElement("img");
    blkPawn7Eimg.setAttribute("class", "chesspiece");
    blkPawn7Eimg.src = "pawn-147066_1280.png";
    blackAlphaRow7e.appendChild(blkPawn7Eimg);

    let blkPawn7Fimg = document.createElement("img");
    blkPawn7Fimg.setAttribute("class", "chesspiece");
    blkPawn7Fimg.src = "pawn-147066_1280.png";
    blackAlphaRow7f.appendChild(blkPawn7Fimg);


    let blkPawn7Gimg = document.createElement("img");
    blkPawn7Gimg.setAttribute("class", "chesspiece");
    blkPawn7Gimg.src = "pawn-147066_1280.png";
    blackAlphaRow7g.appendChild(blkPawn7Gimg);

    let blkPawn7Himg = document.createElement("img");
    blkPawn7Himg.setAttribute("class", "chesspiece");
    blkPawn7Himg.src = "pawn-147066_1280.png";
    blackAlphaRow7h.appendChild(blkPawn7Himg);

    //================================================================
    //white pawn placement
    let whtPawn2Aimg = document.createElement("img");
    whtPawn2Aimg.setAttribute("class", "chesspiece");
    whtPawn2Aimg.src = "pawn-147060_1280 (1).png";
    blackAlphaRow2a.appendChild(whtPawn2Aimg);

    let whtPawn2Bimg = document.createElement("img");
    whtPawn2Bimg.setAttribute("class", "chesspiece");
    whtPawn2Bimg.src = "pawn-147060_1280 (1).png";
    blackAlphaRow2b.appendChild(whtPawn2Bimg);

    let whtPawn2Cimg = document.createElement("img");
    whtPawn2Cimg.setAttribute("class", "chesspiece");
    whtPawn2Cimg.src = "pawn-147060_1280 (1).png";
    blackAlphaRow2c.appendChild(whtPawn2Cimg);

    let whtPawn2Dimg = document.createElement("img");
    whtPawn2Dimg.setAttribute("class", "chesspiece");
    whtPawn2Dimg.src = "pawn-147060_1280 (1).png";
    blackAlphaRow2d.appendChild(whtPawn2Dimg);

    let whtPawn2Eimg = document.createElement("img");
    whtPawn2Eimg.setAttribute("class", "chesspiece");
    whtPawn2Eimg.src = "pawn-147060_1280 (1).png";
    blackAlphaRow2e.appendChild(whtPawn2Eimg);

    let whtPawn2Fimg = document.createElement("img");
    whtPawn2Fimg.setAttribute("class", "chesspiece");
    whtPawn2Fimg.src = "pawn-147060_1280 (1).png";
    blackAlphaRow2f.appendChild(whtPawn2Fimg);

    let whtPawn2Gimg = document.createElement("img");
    whtPawn2Gimg.setAttribute("class", "chesspiece");
    whtPawn2Gimg.src = "pawn-147060_1280 (1).png";
    blackAlphaRow2g.appendChild(whtPawn2Gimg);

    let whtPawn2Himg = document.createElement("img");
    whtPawn2Himg.setAttribute("class", "chesspiece");
    whtPawn2Himg.src = "pawn-147060_1280 (1).png";
    blackAlphaRow2h.appendChild(whtPawn2Himg);
    //=================================================================

    //place black first rank pieces
    let blkrook8Aimg = document.createElement("img");
    blkrook8Aimg.setAttribute("class", "chesspiece");
    blkrook8Aimg.src = "chess-151550_1280 (1).png";
    blackAlphaRow8a.appendChild(blkrook8Aimg);

    let blkknight8Bimg = document.createElement("img");
    blkknight8Bimg.setAttribute("class", "chesspiece");
    blkknight8Bimg.src = "knight-147065_1280 (1).png";
    blackAlphaRow8b.appendChild(blkknight8Bimg);

    let blkbishop8Cimg = document.createElement("img");
    blkbishop8Cimg.setAttribute("class", "chesspiece");
    blkbishop8Cimg.src = "bishop-147064_1280 (1).png";
    blackAlphaRow8c.appendChild(blkbishop8Cimg);

    let blkqueen8Dimg = document.createElement("img");
    blkqueen8Dimg.setAttribute("class", "chesspiece");
    blkqueen8Dimg.src = "chess-151548_1280.png";
    blackAlphaRow8d.appendChild(blkqueen8Dimg);

    let blkking8Eimg = document.createElement("img");
    blkking8Eimg.setAttribute("class", "chesspiece");
    blkking8Eimg.src = "chess-151549_1280.png";
    blackAlphaRow8e.appendChild(blkking8Eimg);

    let blkbishop8Fimg = document.createElement("img");
    blkbishop8Fimg.setAttribute("class", "chesspiece");
    blkbishop8Fimg.src = "bishop-147064_1280 (1).png";
    blackAlphaRow8f.appendChild(blkbishop8Fimg);

    let blkknight8Gimg = document.createElement("img");
    blkknight8Gimg.setAttribute("class", "chesspiece");
    blkknight8Gimg.src = "knight-147065_1280 (1).png";
    blackAlphaRow8g.appendChild(blkknight8Gimg);

    let blkrook8Himg = document.createElement("img");
    blkrook8Himg.setAttribute("class", "chesspiece");
    blkrook8Himg.src = "chess-151550_1280 (1).png";
    blackAlphaRow8h.appendChild(blkrook8Himg);
    //===========================================================

    //place white first rank pieces
    let whtrook1Aimg = document.createElement("img");
    whtrook1Aimg.setAttribute("class", "chesspiece");
    whtrook1Aimg.src = "tower-147058_1280 (1).png";
    blackAlphaRow1a.appendChild(whtrook1Aimg);

    let whtknight1Bimg = document.createElement("img");
    whtknight1Bimg.setAttribute("class", "chesspiece");
    whtknight1Bimg.src = "knight-33015_1280 (1).png";
    blackAlphaRow1b.appendChild(whtknight1Bimg);

    let whtbishop1Cimg = document.createElement("img");
    whtbishop1Cimg.setAttribute("class", "chesspiece");
    whtbishop1Cimg.src = "bishop-147059_1280 (1).png";
    blackAlphaRow1c.appendChild(whtbishop1Cimg);

    let whtqueen1Dimg = document.createElement("img");
    whtqueen1Dimg.setAttribute("class", "chesspiece");
    whtqueen1Dimg.src = "queen-147057_1280.png";
    blackAlphaRow1d.appendChild(whtqueen1Dimg);

    let whtking1Eimg = document.createElement("img");
    whtking1Eimg.setAttribute("class", "chesspiece");
    whtking1Eimg.src = "king-147056_1280.png";
    blackAlphaRow1e.appendChild(whtking1Eimg);

    let whtbishop1Fimg = document.createElement("img");
    whtbishop1Fimg.setAttribute("class", "chesspiece");
    whtbishop1Fimg.src = "bishop-147059_1280 (1).png";
    blackAlphaRow1f.appendChild(whtbishop1Fimg);

    let whtknight1Gimg = document.createElement("img");
    whtknight1Gimg.setAttribute("class", "chesspiece");
    whtknight1Gimg.src = "knight-33015_1280 (1).png";
    blackAlphaRow1g.appendChild(whtknight1Gimg);

    let whtrook1Himg = document.createElement("img");
    whtrook1Himg.setAttribute("class", "chesspiece");
    whtrook1Himg.src = "tower-147058_1280 (1).png";
    blackAlphaRow1h.appendChild(whtrook1Himg);





    //=========================================================
    //=========================================================
    //const BP7B = document.querySelector("#blkPawn7Bimg");
    //BP7B.addEventListener("dragstart", dragStart2);
    //BP7B.addEventListener("dragend", dragEnd2);
    //pieces queried for movement/ black pawns

    //let B7 = document.querySelector("#blkPawn7Aimg");
    //B7.addEventListener("click", onClick);
    //function onClick() {

    
    
    
    let BP7A = document.querySelector(".chesspiece");
    BP7A.addEventListener("dragstart", dragStart);
    BP7A.addEventListener("dragend", dragEnd);
function onMouseDown (event, piece) {

}

function onMouseDown (event, piece) {
    
}

function onMouseDown (event, piece) {
    
}
    for (let i = 0; i < BP7A.length; i++){
        let piece = BP7A[i];
   piece.addEventListener("mousedown", )
        console.log(piece)
    }

    //dragevent componenets for movement across each of 64 gameboard squares
    blackAlphaRow8a.addEventListener("dragover", dragOver);
    blackAlphaRow8a.addEventListener("dragenter", dragEnter);
    blackAlphaRow8a.addEventListener("dragleave", dragLeave);
    blackAlphaRow8a.addEventListener("drop", dragDrop);

    blackAlphaRow7a.addEventListener("dragover", dragOver);
    blackAlphaRow7a.addEventListener("dragenter", dragEnter);
    blackAlphaRow7a.addEventListener("dragleave", dragLeave);
    blackAlphaRow7a.addEventListener("drop", dragDrop);

    blackAlphaRow6a.addEventListener("dragover", dragOver);
    blackAlphaRow6a.addEventListener("dragenter", dragEnter);
    blackAlphaRow6a.addEventListener("dragleave", dragLeave);
    blackAlphaRow6a.addEventListener("drop", dragDrop);

    blackAlphaRow5a.addEventListener("dragover", dragOver);
    blackAlphaRow5a.addEventListener("dragenter", dragEnter);
    blackAlphaRow5a.addEventListener("dragleave", dragLeave);
    blackAlphaRow5a.addEventListener("drop", dragDrop);

    blackAlphaRow4a.addEventListener("dragover", dragOver);
    blackAlphaRow4a.addEventListener("dragenter", dragEnter);
    blackAlphaRow4a.addEventListener("dragleave", dragLeave);
    blackAlphaRow4a.addEventListener("drop", dragDrop);

    blackAlphaRow3a.addEventListener("dragover", dragOver);
    blackAlphaRow3a.addEventListener("dragenter", dragEnter);
    blackAlphaRow3a.addEventListener("dragleave", dragLeave);
    blackAlphaRow3a.addEventListener("drop", dragDrop);

    blackAlphaRow2a.addEventListener("dragover", dragOver);
    blackAlphaRow2a.addEventListener("dragenter", dragEnter);
    blackAlphaRow2a.addEventListener("dragleave", dragLeave);
    blackAlphaRow2a.addEventListener("drop", dragDrop);

    blackAlphaRow1a.addEventListener("dragover", dragOver);
    blackAlphaRow1a.addEventListener("dragenter", dragEnter);
    blackAlphaRow1a.addEventListener("dragleave", dragLeave);
    blackAlphaRow1a.addEventListener("drop", dragDrop);
    //=======================================================

    blackAlphaRow8b.addEventListener("dragover", dragOver);
    blackAlphaRow8b.addEventListener("dragenter", dragEnter);
    blackAlphaRow8b.addEventListener("dragleave", dragLeave);
    blackAlphaRow8b.addEventListener("drop", dragDrop);

    blackAlphaRow7b.addEventListener("dragover", dragOver);
    blackAlphaRow7b.addEventListener("dragenter", dragEnter);
    blackAlphaRow7b.addEventListener("dragleave", dragLeave);
    blackAlphaRow7b.addEventListener("drop", dragDrop);

    blackAlphaRow6b.addEventListener("dragover", dragOver);
    blackAlphaRow6b.addEventListener("dragenter", dragEnter);
    blackAlphaRow6b.addEventListener("dragleave", dragLeave);
    blackAlphaRow6b.addEventListener("drop", dragDrop);

    blackAlphaRow5b.addEventListener("dragover", dragOver);
    blackAlphaRow5b.addEventListener("dragenter", dragEnter);
    blackAlphaRow5b.addEventListener("dragleave", dragLeave);
    blackAlphaRow5b.addEventListener("drop", dragDrop);

    blackAlphaRow4b.addEventListener("dragover", dragOver);
    blackAlphaRow4b.addEventListener("dragenter", dragEnter);
    blackAlphaRow4b.addEventListener("dragleave", dragLeave);
    blackAlphaRow4b.addEventListener("drop", dragDrop);

    blackAlphaRow3b.addEventListener("dragover", dragOver);
    blackAlphaRow3b.addEventListener("dragenter", dragEnter);
    blackAlphaRow3b.addEventListener("dragleave", dragLeave);
    blackAlphaRow3b.addEventListener("drop", dragDrop);

    blackAlphaRow2b.addEventListener("dragover", dragOver);
    blackAlphaRow2b.addEventListener("dragenter", dragEnter);
    blackAlphaRow2b.addEventListener("dragleave", dragLeave);
    blackAlphaRow2b.addEventListener("drop", dragDrop);

    blackAlphaRow1b.addEventListener("dragover", dragOver);
    blackAlphaRow1b.addEventListener("dragenter", dragEnter);
    blackAlphaRow1b.addEventListener("dragleave", dragLeave);
    blackAlphaRow1b.addEventListener("drop", dragDrop);
    //======================================================

    blackAlphaRow8c.addEventListener("dragover", dragOver);
    blackAlphaRow8c.addEventListener("dragenter", dragEnter);
    blackAlphaRow8c.addEventListener("dragleave", dragLeave);
    blackAlphaRow8c.addEventListener("drop", dragDrop);

    blackAlphaRow7c.addEventListener("dragover", dragOver);
    blackAlphaRow7c.addEventListener("dragenter", dragEnter);
    blackAlphaRow7c.addEventListener("dragleave", dragLeave);
    blackAlphaRow7c.addEventListener("drop", dragDrop);

    blackAlphaRow6c.addEventListener("dragover", dragOver);
    blackAlphaRow6c.addEventListener("dragenter", dragEnter);
    blackAlphaRow6c.addEventListener("dragleave", dragLeave);
    blackAlphaRow6c.addEventListener("drop", dragDrop);

    blackAlphaRow5c.addEventListener("dragover", dragOver);
    blackAlphaRow5c.addEventListener("dragenter", dragEnter);
    blackAlphaRow5c.addEventListener("dragleave", dragLeave);
    blackAlphaRow5c.addEventListener("drop", dragDrop);

    blackAlphaRow4c.addEventListener("dragover", dragOver);
    blackAlphaRow4c.addEventListener("dragenter", dragEnter);
    blackAlphaRow4c.addEventListener("dragleave", dragLeave);
    blackAlphaRow4c.addEventListener("drop", dragDrop);

    blackAlphaRow3c.addEventListener("dragover", dragOver);
    blackAlphaRow3c.addEventListener("dragenter", dragEnter);
    blackAlphaRow3c.addEventListener("dragleave", dragLeave);
    blackAlphaRow3c.addEventListener("drop", dragDrop);

    blackAlphaRow2c.addEventListener("dragover", dragOver);
    blackAlphaRow2c.addEventListener("dragenter", dragEnter);
    blackAlphaRow2c.addEventListener("dragleave", dragLeave);
    blackAlphaRow2c.addEventListener("drop", dragDrop);

    blackAlphaRow1c.addEventListener("dragover", dragOver);
    blackAlphaRow1c.addEventListener("dragenter", dragEnter);
    blackAlphaRow1c.addEventListener("dragleave", dragLeave);
    blackAlphaRow1c.addEventListener("drop", dragDrop);
    //=======================================================
    blackAlphaRow8d.addEventListener("dragover", dragOver);
    blackAlphaRow8d.addEventListener("dragenter", dragEnter);
    blackAlphaRow8d.addEventListener("dragleave", dragLeave);
    blackAlphaRow8d.addEventListener("drop", dragDrop);

    blackAlphaRow7d.addEventListener("dragover", dragOver);
    blackAlphaRow7d.addEventListener("dragenter", dragEnter);
    blackAlphaRow7d.addEventListener("dragleave", dragLeave);
    blackAlphaRow7d.addEventListener("drop", dragDrop);

    blackAlphaRow6d.addEventListener("dragover", dragOver);
    blackAlphaRow6d.addEventListener("dragenter", dragEnter);
    blackAlphaRow6d.addEventListener("dragleave", dragLeave);
    blackAlphaRow6d.addEventListener("drop", dragDrop);

    blackAlphaRow5d.addEventListener("dragover", dragOver);
    blackAlphaRow5d.addEventListener("dragenter", dragEnter);
    blackAlphaRow5d.addEventListener("dragleave", dragLeave);
    blackAlphaRow5d.addEventListener("drop", dragDrop);

    blackAlphaRow4d.addEventListener("dragover", dragOver);
    blackAlphaRow4d.addEventListener("dragenter", dragEnter);
    blackAlphaRow4d.addEventListener("dragleave", dragLeave);
    blackAlphaRow4d.addEventListener("drop", dragDrop);

    blackAlphaRow3d.addEventListener("dragover", dragOver);
    blackAlphaRow3d.addEventListener("dragenter", dragEnter);
    blackAlphaRow3d.addEventListener("dragleave", dragLeave);
    blackAlphaRow3d.addEventListener("drop", dragDrop);

    blackAlphaRow2d.addEventListener("dragover", dragOver);
    blackAlphaRow2d.addEventListener("dragenter", dragEnter);
    blackAlphaRow2d.addEventListener("dragleave", dragLeave);
    blackAlphaRow2d.addEventListener("drop", dragDrop);

    blackAlphaRow1d.addEventListener("dragover", dragOver);
    blackAlphaRow1d.addEventListener("dragenter", dragEnter);
    blackAlphaRow1d.addEventListener("dragleave", dragLeave);
    blackAlphaRow1d.addEventListener("drop", dragDrop);
    //========================================================

    blackAlphaRow8e.addEventListener("dragover", dragOver);
    blackAlphaRow8e.addEventListener("dragenter", dragEnter);
    blackAlphaRow8e.addEventListener("dragleave", dragLeave);
    blackAlphaRow8e.addEventListener("drop", dragDrop);

    blackAlphaRow7e.addEventListener("dragover", dragOver);
    blackAlphaRow7e.addEventListener("dragenter", dragEnter);
    blackAlphaRow7e.addEventListener("dragleave", dragLeave);
    blackAlphaRow7e.addEventListener("drop", dragDrop);

    blackAlphaRow6e.addEventListener("dragover", dragOver);
    blackAlphaRow6e.addEventListener("dragenter", dragEnter);
    blackAlphaRow6e.addEventListener("dragleave", dragLeave);
    blackAlphaRow6e.addEventListener("drop", dragDrop);

    blackAlphaRow5e.addEventListener("dragover", dragOver);
    blackAlphaRow5e.addEventListener("dragenter", dragEnter);
    blackAlphaRow5e.addEventListener("dragleave", dragLeave);
    blackAlphaRow5e.addEventListener("drop", dragDrop);

    blackAlphaRow4e.addEventListener("dragover", dragOver);
    blackAlphaRow4e.addEventListener("dragenter", dragEnter);
    blackAlphaRow4e.addEventListener("dragleave", dragLeave);
    blackAlphaRow4e.addEventListener("drop", dragDrop);

    blackAlphaRow3e.addEventListener("dragover", dragOver);
    blackAlphaRow3e.addEventListener("dragenter", dragEnter);
    blackAlphaRow3e.addEventListener("dragleave", dragLeave);
    blackAlphaRow3e.addEventListener("drop", dragDrop);

    blackAlphaRow2e.addEventListener("dragover", dragOver);
    blackAlphaRow2e.addEventListener("dragenter", dragEnter);
    blackAlphaRow2e.addEventListener("dragleave", dragLeave);
    blackAlphaRow2e.addEventListener("drop", dragDrop);

    blackAlphaRow1e.addEventListener("dragover", dragOver);
    blackAlphaRow1e.addEventListener("dragenter", dragEnter);
    blackAlphaRow1e.addEventListener("dragleave", dragLeave);
    blackAlphaRow1e.addEventListener("drop", dragDrop);

    //========================================================

    blackAlphaRow8f.addEventListener("dragover", dragOver);
    blackAlphaRow8f.addEventListener("dragenter", dragEnter);
    blackAlphaRow8f.addEventListener("dragleave", dragLeave);
    blackAlphaRow8f.addEventListener("drop", dragDrop);

    blackAlphaRow7f.addEventListener("dragover", dragOver);
    blackAlphaRow7f.addEventListener("dragenter", dragEnter);
    blackAlphaRow7f.addEventListener("dragleave", dragLeave);
    blackAlphaRow7f.addEventListener("drop", dragDrop);

    blackAlphaRow6f.addEventListener("dragover", dragOver);
    blackAlphaRow6f.addEventListener("dragenter", dragEnter);
    blackAlphaRow6f.addEventListener("dragleave", dragLeave);
    blackAlphaRow6f.addEventListener("drop", dragDrop);

    blackAlphaRow5f.addEventListener("dragover", dragOver);
    blackAlphaRow5f.addEventListener("dragenter", dragEnter);
    blackAlphaRow5f.addEventListener("dragleave", dragLeave);
    blackAlphaRow5f.addEventListener("drop", dragDrop);

    blackAlphaRow4f.addEventListener("dragover", dragOver);
    blackAlphaRow4f.addEventListener("dragenter", dragEnter);
    blackAlphaRow4f.addEventListener("dragleave", dragLeave);
    blackAlphaRow4f.addEventListener("drop", dragDrop);

    blackAlphaRow3f.addEventListener("dragover", dragOver);
    blackAlphaRow3f.addEventListener("dragenter", dragEnter);
    blackAlphaRow3f.addEventListener("dragleave", dragLeave);
    blackAlphaRow3f.addEventListener("drop", dragDrop);

    blackAlphaRow2f.addEventListener("dragover", dragOver);
    blackAlphaRow2f.addEventListener("dragenter", dragEnter);
    blackAlphaRow2f.addEventListener("dragleave", dragLeave);
    blackAlphaRow2f.addEventListener("drop", dragDrop);

    blackAlphaRow1f.addEventListener("dragover", dragOver);
    blackAlphaRow1f.addEventListener("dragenter", dragEnter);
    blackAlphaRow1f.addEventListener("dragleave", dragLeave);
    blackAlphaRow1f.addEventListener("drop", dragDrop);
    //========================================================

    blackAlphaRow8g.addEventListener("dragover", dragOver);
    blackAlphaRow8g.addEventListener("dragenter", dragEnter);
    blackAlphaRow8g.addEventListener("dragleave", dragLeave);
    blackAlphaRow8g.addEventListener("drop", dragDrop);

    blackAlphaRow7g.addEventListener("dragover", dragOver);
    blackAlphaRow7g.addEventListener("dragenter", dragEnter);
    blackAlphaRow7g.addEventListener("dragleave", dragLeave);
    blackAlphaRow7g.addEventListener("drop", dragDrop);

    blackAlphaRow6g.addEventListener("dragover", dragOver);
    blackAlphaRow6g.addEventListener("dragenter", dragEnter);
    blackAlphaRow6g.addEventListener("dragleave", dragLeave);
    blackAlphaRow6g.addEventListener("drop", dragDrop);

    blackAlphaRow5g.addEventListener("dragover", dragOver);
    blackAlphaRow5g.addEventListener("dragenter", dragEnter);
    blackAlphaRow5g.addEventListener("dragleave", dragLeave);
    blackAlphaRow5g.addEventListener("drop", dragDrop);

    blackAlphaRow4g.addEventListener("dragover", dragOver);
    blackAlphaRow4g.addEventListener("dragenter", dragEnter);
    blackAlphaRow4g.addEventListener("dragleave", dragLeave);
    blackAlphaRow4g.addEventListener("drop", dragDrop);

    blackAlphaRow3g.addEventListener("dragover", dragOver);
    blackAlphaRow3g.addEventListener("dragenter", dragEnter);
    blackAlphaRow3g.addEventListener("dragleave", dragLeave);
    blackAlphaRow3g.addEventListener("drop", dragDrop);

    blackAlphaRow2g.addEventListener("dragover", dragOver);
    blackAlphaRow2g.addEventListener("dragenter", dragEnter);
    blackAlphaRow2g.addEventListener("dragleave", dragLeave);
    blackAlphaRow2g.addEventListener("drop", dragDrop);

    blackAlphaRow1g.addEventListener("dragover", dragOver);
    blackAlphaRow1g.addEventListener("dragenter", dragEnter);
    blackAlphaRow1g.addEventListener("dragleave", dragLeave);
    blackAlphaRow1g.addEventListener("drop", dragDrop);
    //=======================================================

    blackAlphaRow8h.addEventListener("dragover", dragOver);
    blackAlphaRow8h.addEventListener("dragenter", dragEnter);
    blackAlphaRow8h.addEventListener("dragleave", dragLeave);
    blackAlphaRow8h.addEventListener("drop", dragDrop);

    blackAlphaRow7h.addEventListener("dragover", dragOver);
    blackAlphaRow7h.addEventListener("dragenter", dragEnter);
    blackAlphaRow7h.addEventListener("dragleave", dragLeave);
    blackAlphaRow7h.addEventListener("drop", dragDrop);

    blackAlphaRow6h.addEventListener("dragover", dragOver);
    blackAlphaRow6h.addEventListener("dragenter", dragEnter);
    blackAlphaRow6h.addEventListener("dragleave", dragLeave);
    blackAlphaRow6h.addEventListener("drop", dragDrop);

    blackAlphaRow5h.addEventListener("dragover", dragOver);
    blackAlphaRow5h.addEventListener("dragenter", dragEnter);
    blackAlphaRow5h.addEventListener("dragleave", dragLeave);
    blackAlphaRow5h.addEventListener("drop", dragDrop);

    blackAlphaRow4h.addEventListener("dragover", dragOver);
    blackAlphaRow4h.addEventListener("dragenter", dragEnter);
    blackAlphaRow4h.addEventListener("dragleave", dragLeave);
    blackAlphaRow4h.addEventListener("drop", dragDrop);

    blackAlphaRow3h.addEventListener("dragover", dragOver);
    blackAlphaRow3h.addEventListener("dragenter", dragEnter);
    blackAlphaRow3h.addEventListener("dragleave", dragLeave);
    blackAlphaRow3h.addEventListener("drop", dragDrop);

    blackAlphaRow2h.addEventListener("dragover", dragOver);
    blackAlphaRow2h.addEventListener("dragenter", dragEnter);
    blackAlphaRow2h.addEventListener("dragleave", dragLeave);
    blackAlphaRow2h.addEventListener("drop", dragDrop);

    blackAlphaRow1h.addEventListener("dragover", dragOver);
    blackAlphaRow1h.addEventListener("dragenter", dragEnter);
    blackAlphaRow1h.addEventListener("dragleave", dragLeave);
    blackAlphaRow1h.addEventListener("drop", dragDrop);
    
    //functions start and end of drag event
    function dragStart() {
        console.log("start");
    }
    function dragEnd() {
        console.log("end");
    }

    function dragOver(event) {
        event.preventDefault();
        console.log("over")
    }
    function dragEnter(event) {
        event.preventDefault();
        console.log("enter")
    }
    function dragLeave() {
        console.log("Leave")
    }
    function dragDrop() {
        // this.className(blackAlphaRow7a)

        this.append()

        console.log("Drop")
    }
//}

    blackAlphaRow6b.addEventListener("dragover", dragOver2);
    blackAlphaRow6b.addEventListener("dragenter", dragEnter2);
    blackAlphaRow6b.addEventListener("dragleave", dragLeave2);
    blackAlphaRow6b.addEventListener("drop", dragDrop2);

    blackAlphaRow5b.addEventListener("dragover", dragOver2);
    blackAlphaRow5b.addEventListener("dragenter", dragEnter2);
    blackAlphaRow5b.addEventListener("dragleave", dragLeave2);
    blackAlphaRow5b.addEventListener("drop", dragDrop2);

    blackAlphaRow4b.addEventListener("dragover", dragOver2);
    blackAlphaRow4b.addEventListener("dragenter", dragEnter2);
    blackAlphaRow4b.addEventListener("dragleave", dragLeave2);
    blackAlphaRow4b.addEventListener("drop", dragDrop2);

    function dragStart2() {
        console.log("start");
    }
    function dragEnd2() {
        console.log("end");
    }

   
    function dragOver2(event) {
        event.preventDefault();
        console.log("over")
    }
    function dragEnter2(event) {
        event.preventDefault();
        console.log("enter")
    }
    function dragLeave2() {
        console.log("Leave")
    }
    function dragDrop2() {
        // this.className(blackAlphaRow7a)

        this.append(BP7B)

        console.log("Drop")
    }

    //======================================================
    //======================================================
    //BP7A.addEventListener("click", grabPiece);
    //function grabPiece(){
    //    blkPawn7Aimg.onmousedown()
    //}
    //+++++++
    //+++++++
}
//++++++++
//+++++++++














const moveInput = document.querySelector("#movetext");
const moveButton = document.querySelector("#movebutton");

moveInput.addEventListener("click", onClick);

function onClick(currentPosition, movePositon) {
    if (currentPosition && movePositon) {
    }
}







//======================================================
//======================================================
//chess clock



//let minutes = Math.floor((60 * 60* 1000) / (60 * 1000));
//console.log(minutes)


 //Add white pieces place holders.

 //let pawnWa = document.createElement("div");
 //pawnWa.setAttribute("id", "pawnWa");
 //toprow1.appendChild(pawnWa);

 //let pawnWb = document.createElement("div");
 //pawnWb.setAttribute("id", "pawnWb");
 //toprow1.appendChild(pawnWb);

 //let pawnWc = document.createElement("div");
 //pawnWc.setAttribute("id", "pawnWc");
 //toprow1.appendChild(pawnWc);

 //let pawnWd = document.createElement("div");
 //pawnWd.setAttribute("id", "pawnWd");
 //toprow1.appendChild(pawnWd);

 //let pawnWe = document.createElement("div");
 //pawnWe.setAttribute("id", "pawnWe");
 //toprow1.appendChild(pawnWe);

 //let pawnWf = document.createElement("div");
 //pawnWf.setAttribute("id", "pawnWf");
 //toprow1.appendChild(pawnWf);

 //let pawnWg = document.createElement("div");
 //pawnWg.setAttribute("id", "pawnWg");
 //toprow1.appendChild(pawnWg);

 //let pawnWh = document.createElement("div");
 //pawnWh.setAttribute("id", "pawnWh");
 //toprow1.appendChild(pawnWh);
 //=========
 //let rookieWa = document.createElement("div");
 //rookieWa.setAttribute("id", "rookieWa");
 //toprow1.appendChild(rookieWa);

 //let knightWb = document.createElement("div");
 //knightWb.setAttribute("id", "knightWb");
 //toprow1.appendChild(knightWb);

 //let bishopWc = document.createElement("div");
 //bishopWc.setAttribute("id", "bishopWc");
 //toprow1.appendChild(bishopWc);

 //let queenWd = document.createElement("div");
 //queenWd.setAttribute("id", "queenWd");
 //toprow1.appendChild(queenWd);

 //let kingWe = document.createElement("div");
 //kingWe.setAttribute("id", "kingWe");
 //toprow1.appendChild(kingWe);

 //let bishopWf = document.createElement("div");
 //bishopWf.setAttribute("id", "bishopWf");
 //toprow1.appendChild(bishopWf);

 //let knightWg = document.createElement("div");
 //knightWg.setAttribute("id", "knightWg");
 //toprow1.appendChild(knightWg);

 //let rookieWh = document.createElement("div");
 //rookieWh.setAttribute("id", "rookieWh");
 //toprow1.appendChild(rookieWh);
 //=================================================
 //add black pieces place holders

 //let pawnBa = document.createElement("div");
 //pawnBa.setAttribute("id", "pawnBa");
 //toprow1.appendChild(pawnBa);

 //let pawnBb = document.createElement("div");
 //pawnBb.setAttribute("id", "pawnBb");
 //toprow1.appendChild(pawnBb);

 //let pawnBc = document.createElement("div");
 //pawnBc.setAttribute("id", "pawnBc");
 //toprow1.appendChild(pawnBc);

 //let pawnBd = document.createElement("div");
 //pawnBd.setAttribute("id", "pawnBd");
 //toprow1.appendChild(pawnBd);

 //let pawnBe = document.createElement("div");
 //pawnBe.setAttribute("id", "pawnBe");
 //toprow1.appendChild(pawnBe);

 //let pawnBf = document.createElement("div");
 //pawnBf.setAttribute("id", "pawnBf");
 //toprow1.appendChild(pawnBf);

 //let pawnBg = document.createElement("div");
 //pawnBg.setAttribute("id", "pawnBg");
 //toprow1.appendChild(pawnBg);

 //let pawnBh = document.createElement("div");
 //pawnBh.setAttribute("id", "pawnBh");
 //toprow1.appendChild(pawnBh);
 //=========
 //let rookieBa = document.createElement("div");
 //rookieBa.setAttribute("id", "rookieBa");
 //toprow1.appendChild(rookieBa);

 //let knightBb = document.createElement("div");
 //knightBb.setAttribute("id", "knightBb");
 //toprow1.appendChild(knightBb);

 //let bishopBc = document.createElement("div");
 //bishopBc.setAttribute("id", "bishopBc");
 //toprow1.appendChild(bishopBc);

 //let queenBd = document.createElement("div");
 //queenBd.setAttribute("id", "queenBd");
 //toprow1.appendChild(queenBd);

 //let kingBe = document.createElement("div");
 //kingBe.setAttribute("id", "kingBe");
 //toprow1.appendChild(kingBe);

 //let bishopBf = document.createElement("div");
 //bishopBf.setAttribute("id", "bishopBf");
 //toprow1.appendChild(bishopBf);

 //let knightBg = document.createElement("div");
 //knightBg.setAttribute("id", "knightBg");
 //toprow1.appendChild(knightBg);

 //let rookieBh = document.createElement("div");
 //rookieBh.setAttribute("id", "rookieBh");
 //toprow1.appendChild(rookieBh);


