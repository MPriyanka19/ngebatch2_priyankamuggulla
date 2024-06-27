import React from 'react'
//create interface
interface Groceries{
    item: string[]
    onSelect: (selectGrocery: string) => void
    selected:string
}

const DisplayGroceries = (props: Groceries) => {
    const { item,onSelect,selected } = props
    
  return (
    <>
      <form className="formstyle">
        {item.map((grocery, index) => (
          <div key={index}>
            <input
              type="radio"
              name="grocery"
              value={grocery}
              onChange={(e) => onSelect(e.target.value)}
            />
            <label htmlFor={grocery}>{grocery}</label>
          </div>
        ))}
          </form>
          <p>select button is {selected }</p>
    </>
  );
}

export default DisplayGroceries