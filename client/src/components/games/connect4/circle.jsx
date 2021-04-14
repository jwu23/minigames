import React from 'react';

const Circle = (props) => {
  let color = 'white';
  if (props.val === 1) {
    color = 'red'
  } else if (props.val === 2) {
    color = 'yellow'
  }
  return (
    <div className={`connect-circle ${color}`}>
      {props.columnNum}
    </div>
  )
}

export default Circle;