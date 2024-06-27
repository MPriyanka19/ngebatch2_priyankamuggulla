import React, { useState } from "react";
import DisplayGroceries from "./DisplayGroceries";

const Groceries = () => {
  const groceries = ["chocolates", "icecream", "drinks", "chips"];
  const [grocery, setGrocery] = useState('');
  const handleRadio = (grocery: string) => setGrocery(grocery);

  return (
    <div>
      <DisplayGroceries
        item={groceries}
        onSelect={handleRadio}
        selected={grocery}
      />
    </div>
  );
};

export default Groceries;
