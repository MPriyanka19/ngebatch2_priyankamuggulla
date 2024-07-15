import React, { useEffect, useState } from "react";

interface CategoryProps {
  onSelect: (selectCategory: string) => void;
  categories: string[];
}

const Category = (props: CategoryProps) => {
  const {onSelect, categories} = props;
  
  return (
    <div>
      <label>Select a category:</label>
      <select onChange={(event) => onSelect(event.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
