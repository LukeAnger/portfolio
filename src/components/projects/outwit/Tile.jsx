import React, { useState } from "react";
import Piece from "./Piece.jsx";

const Tile = ({ obj, pathFinder, highlighted, clearHighlights, movePiece, currentPiece, changeCurrentPiece ,board, turn }) => {
  let name = "tile1";
  let test = false

  let highlight = highlighted.has(obj.pos) ? " highlight" : "";
  test = highlighted.has(obj.pos) ? true : false;

  if (obj.zone === 2) {
    name = "tile2";
  } else if (obj.zone === 3) {
    name = "tile3";
  }

  const clear = () => {
    clearHighlights();
    changeCurrentPiece({});
  };
  const handleClick = () => {
    if (obj.highlight) {
      movePiece(obj);
    }
    test ? clear() : null;
  };
  name = name + highlight;
  return (
    <>
      <div
      className={name + highlight}
      onClick={() => handleClick(obj)}>
      {/* <div className='testGrid' style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1.5rem)', gridTemplateRows: 'repeat(2, 1.5rem)'}}>
        <div>{ obj.edgeNW}</div>
        <div>{obj.edgeNE}</div>
        <div>{ obj.edgeSW}</div>
        <div>{ obj.edgeSE }</div> </div> */}
        {obj.occupied ? <Piece
        obj={obj}
        turn={turn}
        pathFinder={pathFinder}
        currentPiece={currentPiece}
        changeCurrentPiece={changeCurrentPiece}
        clearHighlights={clearHighlights} /> : null}
      </div>
    </>
  );
};

export default Tile;
