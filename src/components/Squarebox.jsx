import React from 'react'
import "../styles/tictack.css"
const Squarebox = (props) => {
  return (
    <div className='square' onClick={props.onClick}>
        <h5 className='box' >{props.value}</h5>
    </div>
  )
}

export default Squarebox