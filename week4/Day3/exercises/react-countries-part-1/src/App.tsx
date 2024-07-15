import { useEffect, useState } from 'react';
import './App.css'
import Category from './components/Category'
import ListCategory from './components/ListCategory';

const App = () => {
  const [category, setCategory] = useState([]);
  const [list, setList] = useState("");
  const getCategory = async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories/");
    const data = await response.json();
    setCategory(data);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div>
      <Category categories={category} onSelect={setList} />
      
      {category}
    </div>
  );



  
}

export default App



  // return (
  //   <div className='app'>
  //     <h1>Country Population</h1>

  //     <select>
  //       {[{ countryName: 'United Kingdom', countryCode: 'GBR' }].map((item) => (
  //         <option key={item.countryCode} value={item.countryCode}>
  //           {item.countryName}
  //         </option>
  //       ))}
  //     </select>

  //     <p className='result'>LATEST: 67215293</p>
  //   </div>
  // )