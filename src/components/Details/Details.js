import React from 'react'
import './Details.css';

const Details = ({ top, below, Order, ptext }) => {
  return (
    <div className='container'>
      <div className="grid-template">
        <div className="header">
          <p> {top}</p>
          <h1> {below}</h1>
          <br />
          <button>{Order}</button>
        </div>
        <div className="para">
          <p className="ptext">
            {ptext}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details