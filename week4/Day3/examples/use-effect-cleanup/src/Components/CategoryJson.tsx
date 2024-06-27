import React, { useEffect, useState } from 'react'

const CategoryJson = () => {
  const [jewel, setJewel] = useState([])
  const [selectJewel,setSelectJewel]=useState('')
  const FetchJwelery = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery");
      const data = await response.json()
      setJewel(data);
    }
    catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    FetchJwelery();
  }, [])
  const handleSelect =(e:any)=>setSelectJewel(e.target.value)
  return (
    <div>
      <select value={selectJewel} onInput={(event)=>handleSelect(event)}>
        {jewel.map((item) => (
          <option key={item.id} value={item.title}>{item.title}</option>
        ))}
      </select>
      <p>Selected Jewelery is {selectJewel }</p>
      
    </div>
  )
}

export default CategoryJson



















// import React, { useEffect, useState } from 'react'

// const CategoryJson = () => {
//     const [electronic, setElectronic] = useState([])
//     const [selectElectronic, setselectElectronic] = useState("");
//     const getElectronic = async () => {
//         try {
//             const response = await fetch(
//               "https://fakestoreapi.com/products/category/jewelery"
//             );
//             const data = await response.json()
//             setElectronic(data);
//         } catch (e) {
//             console.log(e)
//         }
//     }
//     useEffect(() => {
//       getElectronic();
//       // return ()=> clearInterval(id)
//     }, [])
//     const handleChange =  (e:any) => setselectElectronic(e.target.value);
    
//         return (
//           <div>
//             {/* <ul>
//               {electronic.map((elec: any) => (
//                 <li key={elec.id}>{elec.title}</li>
//               ))}
//             </ul> */}
//             <select value={selectElectronic} onClick={(event)=>handleChange(event)}>
//               {/* <option value="">Select a option</option> */}
//               {electronic.map((prod) => (
//                 <option key={prod.id} value={prod.title}>
//                   {prod.title} 
//                 </option>
//               ))}
//             </select>
//             <p>Selected dropdown: {selectElectronic}</p>
//           </div>
//         );
//     } 
//     export default CategoryJson;