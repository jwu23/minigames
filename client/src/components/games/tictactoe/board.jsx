import React, { useState, useEffect } from 'react';
import Square from './square.jsx';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isPlayerX, setIsPlayerX] = useState(true)
  const [heading, setHeading] = useState('Player X goes first')

  const checkWinner = (board) => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (var i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a])
        return board[a]
      }
    }
    return null
  }

  const handleClick = (square) => {
    const tempBoard = board.slice()
    const winner = checkWinner(board);
    if (winner || tempBoard[square]) {
      return;
    }
    tempBoard[square] = isPlayerX ? 'X' : 'O'
    setBoard(tempBoard)
    setIsPlayerX(!isPlayerX)
    // setHeader()
  }

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      setHeading(`${winner} is the winner`)
    } else {
      setHeading(`Player ${isPlayerX ? 'X' : 'O'} turn`)
    }
  }, [isPlayerX])

  useEffect(() => {
    setHeading('Player X goes first')
  }, [])

  return (
    <div>
      <div className='tic-header'>{heading}</div>
      <div className='tic-row'>
        <Square value={board[0]} onClick={() => handleClick(0)}/>
        <Square value={board[1]} onClick={() => handleClick(1)}/>
        <Square value={board[2]} onClick={() => handleClick(2)}/>
      </div>
      <div className='tic-row'>
        <Square value={board[3]} onClick={() => handleClick(3)}/>
        <Square value={board[4]} onClick={() => handleClick(4)}/>
        <Square value={board[5]} onClick={() => handleClick(5)}/>
      </div>
      <div className='tic-row'>
        <Square value={board[6]} onClick={() => handleClick(6)}/>
        <Square value={board[7]} onClick={() => handleClick(7)}/>
        <Square value={board[8]} onClick={() => handleClick(8)}/>
      </div>
    </div>
  )
}

export default Board;