import React,{useState} from 'react'

export default function ControlledComponent() {
    const [name, setName] = useState<string>("blue")
    const handleInput = (e:any) => {
        setName(e.target.value)
    }
  return (
      <div>
          <input type='text' value={name} onInput={(event) => handleInput(event)}></input>
          <p style={{ color: name }}>Colour is {name}</p>
          
    </div>
  )
}
