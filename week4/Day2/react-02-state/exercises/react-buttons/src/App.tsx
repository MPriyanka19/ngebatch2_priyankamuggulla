import './App.css'
import { useState } from 'react'
import ClickerButton from './components/ClickerButton'
import ColourButton from './components/ColourButton'
import ControlledComponent from './components/ControlledComponent'
import UncontrolledComponents from './components/UncontrolledComponents'

const App = () => {
  // Our global state
  const [clicks, setClicks] = useState(0)

  // Our clicks state mutation function
  const handleCounterClick = () => {
    setClicks(clicks + 1)
  }
  const [colour, setColor] = useState("blue")
  const handleColorClick = () => {
    if (colour == "blue")
      setColor("red")
    else
      setColor("blue")
  }
  // Render the ClickerButton component and pass down state value as a prop, as well as the function to update the state
  // Render the ColourButton component - TODO: pass down state value as a prop, as well as the function to update the state
  return (
    <>
      <ClickerButton clicks={clicks} colour={colour} handleClick={handleCounterClick} />
      <ColourButton colour={colour} handleClick={handleColorClick} />
      <ControlledComponent />
      <UncontrolledComponents/>
    </>
  );
}

export default App
