import React from 'react'

const Card = ({ word, id, handleClick }) => {
  return (
    <div className='card'>
      <button className='button' onClick={() => handleClick(id)}>{word}</button>
    </div>
  )
}
export { Card as default }
