import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex flex-col gap-y-2'>
      <div className="">About</div>
      <div className="flex gap-x-5">
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
    </div>
  )
}

export default About