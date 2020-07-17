import React from 'react'

const Row = ({ spanish, english }) => {
  return (
    <div className='row'>
      <p>{spanish}</p><p>{english}</p>
    </div>
  )
}
export { Row as default }
