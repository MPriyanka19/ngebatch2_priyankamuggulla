import React, { useEffect, useState } from "react";
import CatalogDisplay from "./CatalogDisplay";

const Catalog = () => {
  const categories: string[] = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const [selectCategory, setselectCategory] = useState("electronics");

  const handleSelect = (selectCatagory: string) =>
    setselectCategory(selectCatagory);
  return (
    <div>
      <CatalogDisplay
        // categories={categories}
        // onselect={handleSelect}
        // selected="electronics"
        categories={categories}
        onSelect={handleSelect}
        selected={selectCategory}
      />
    </div>
  );
};

export default Catalog;
