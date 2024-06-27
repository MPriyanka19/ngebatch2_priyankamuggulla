import React, { useRef } from 'react'

export default function UncontrolledComponemts () {
    const first = useRef<HTMLInputElement|null>(null)
    const handleClick = () => {
        console.log(first.current?.value)
    }
  return (
    <div>
      <input type="text" ref={first} onInput={handleClick}></input>
      <p>{first?.current?.value}</p>
    </div>
  );
}

 
