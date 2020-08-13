import React from 'react'

const Row = ({ spanish, english }) => {
  return (
    <div className='row'>
      <p className='row-text'>{spanish}</p><p className='row-text'>{english}</p>
    </div>
  )
}
export { Row as default }