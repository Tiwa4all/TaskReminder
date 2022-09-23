import React from 'react'

const Button = ({onAdd, showAdd, color}) => {
  return (
    <div>
      <button style={{backgroundColor: showAdd ? 'red':'green'}} className='btn' color={showAdd ? 'red' : 'green'}
      onClick={onAdd}>{showAdd ? 'Close' : 'Add'}</button>
    </div>
  )
}

export default Button
