import React from 'react';

const Card =({word}) => {
  return  (
    <div className='card'>
     <button className="button">{word}</button>
    </div>
    )
  }
export {Card as default}