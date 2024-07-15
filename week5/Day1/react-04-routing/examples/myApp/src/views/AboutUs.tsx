// import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        
        navigate('/home')
    }
  return (
      <div>
          <button onClick={handleClick}>Home</button>
    </div>
  )
}

export default AboutUs