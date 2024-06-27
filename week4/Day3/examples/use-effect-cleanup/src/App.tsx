import { useEffect, useState } from "react";
import "./App.css";
import Times from "./Times";
import Fetch from "./Fetch";
import Products from "./Components/Catalog";
import Catalog from "./Components/Catalog";
import Groceries from "./Components/Groceries";
import CategoryJson from "./Components/CategoryJson";


const App = () => {
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   // create an interval on mount
  //   const timer = setInterval(() => {
  //     console.log('time is up')
  //   }, 1000)

  //   // clear interval task on unmount
  //   // uncomment clearInterval to correctly clean up the interval
  //   return () => {
  //     // clearInterval(timer)
  //   }
  // }, [value])

  return (
    <div className="app">
      <button onClick={() => setValue((curr) => (curr += "a"))}>
        update state
      </button>
      <Times />
      <Fetch />
     <CategoryJson /> 
      <div className="seperate"></div>
      <Catalog />
      <p>{value}</p>
      <div className="seperate"></div>
      <Groceries />
      {/* <Example /> */}
    </div>
  );
};

export default App;
