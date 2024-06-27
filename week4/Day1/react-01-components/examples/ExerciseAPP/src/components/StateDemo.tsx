import React, { useState } from 'react'

export default function StateDemo() {
  const [click, setClick] = useState<number>(0)
  const HandleClick = () => {
    setClick(click+1)
  }
  return (
    <div>
      <button type="button" onClick={HandleClick}>You have clicked {click} times </button>
      <button onClick={(()=>setClick(0))}>Reset</button>
    </div>
  )
}
