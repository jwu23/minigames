import React, { useState, useEffect } from 'react';
import Row from './row.jsx';

const Board = () => {
  const [board, setBoard] = useState([])

  useEffect(() => {
    let newBoard = []
    for (var i = 0; i < 7; i++) {
      let column = []
      for (var j = 0; j < 6; j++) {
        column.push(null)
      }
      newBoard.push(column)
    }
    setBoard(newBoard)
  }, [])

  return (
    <div>
      {board.map((row, i) => {
        return <Row row={row} key={i}/>
      })}
    </div>
  )
}

export default Board;