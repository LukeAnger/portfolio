import React, { useState } from 'react'

const Piece = ( { obj, pathFinder, clearHighlights, currentPiece, changeCurrentPiece, turn } ) => {

  let type = obj.occupied


  const handleClick = () => {
    clearHighlights()
    pathFinder(obj)
    if (turn === 1 && (type === 1 || type === 2 || type === 5 || type === 6)) {
      console.log('checky check', obj)
      changeCurrentPiece(obj)
    } else if (turn === 2 && (type === 3 || type === 4 || type === 7 || type === 8)) {
      changeCurrentPiece(obj)
    }
  }

  return (
    <>
      <div
      className={'piece piece' + obj.occupied}
      onClick={() => handleClick()}
      ></div>
    </>
  )
}

export default Piece