import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex flex-col gap-y-2'>

      <div className="">Contact</div>



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

        <Link to="/">
        <button
        style={{
          backgroundColor: '#2563EB',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px'
        }}
        >
          Home
        </button>
        </Link>
    </div>
  )
}

export default Contact