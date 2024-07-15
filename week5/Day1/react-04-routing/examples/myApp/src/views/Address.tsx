// import React from 'react'
import { useParams } from 'react-router-dom'

export default function Address() {
    const { city } = useParams();
    return (
      
      <div>
            <p>you have selected :{city} </p>
              
    </div>
  )
}
