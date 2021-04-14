import React, { useState } from 'react';

const Square = (props) => {
  return (
    <div className="tic-square" onClick={props.onClick}>
      {props.value}
    </div>
  )
}

const styles = {
  button: {
    backgroundColor: 'white',
    outline: 'none'
  }
}
export default Square;