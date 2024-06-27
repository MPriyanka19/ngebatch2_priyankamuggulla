import React from 'react'

interface CatalogDisplayProps{
    categories: string[]
    onSelect: (selectedCategory: string) => void
    selected :string
}

export default function CatalogDisplay(props: CatalogDisplayProps) {
    const { categories, onSelect, selected } = props;
   

    
  return (
      <div>
          <div className='cl'>Clothing</div>
          <select value={selected } onChange={(e) => onSelect(e.target.value)}>
              {categories.map((category, index) => <option key={index} value={category}> {category}</option>)}
          </select>
          <p>selected Category is :{ selected}</p>
    </div>
  )
}
