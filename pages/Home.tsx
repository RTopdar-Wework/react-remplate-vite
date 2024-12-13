import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col gap-y-2'>
      
      <div className="">Home</div>


      <Link to="/about">
      <button 
      style={{
        backgroundColor: '#2563EB',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px'
      }}
      >
        About
      </button>
      </Link>

      <Link to="/contact">
      <button
      style={{
        backgroundColor: '#2563EB',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px'
      }}
      >
        Contact
      </button> 
      </Link>
    </div>
  )
}

export default Home