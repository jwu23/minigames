import React from 'react';
import Circle from './circle.jsx';

const Row = (props) => {
  return(
    <div className='connect-row'>
      {props.row.map((circle, i) => {
        return <Circle key={i} val={circle} columnNum={i}/>
      })}
    </div>
  )
}

export default Row;