import React from 'react';
import './style.css'

const Square = ({chooseSquare, val}) => {
  return (
    <div className='square' onClick={chooseSquare}>
      {val}
    </div>
  )
}

export default Square;