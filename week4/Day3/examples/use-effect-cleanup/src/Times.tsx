import React, { useEffect, useState } from 'react'

const Times = () => {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        console.log("Mounted")
        const id =setInterval(() => {
            setTime(new Date)
        }, 1000)
        return () => {
            clearInterval(id)
            console.log("Unmounted")
        }
    },[])
  return (
      <div>
          <h3>Time is {time.toLocaleTimeString()}</h3></div>
  )
}

export default Times