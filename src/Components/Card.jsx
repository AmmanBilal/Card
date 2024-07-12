import React from 'react'
import './Card.css'
import img1 from '../image/download.jpg'
export const Card = () => {
  return (
    <div className='card'>
       <img className='card-imge' src={img1} alt="" />
    <h2 className='card-title'>Bro Code</h2>
    <p className='card Text'>I make a React projects.            I practice react daily</p>
  </div>
  )
}

export default Card