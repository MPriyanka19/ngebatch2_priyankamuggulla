import React, { useEffect, useState } from 'react'
interface ListCategoryProps{
    categoryName: any
    
}

const ListCategory = (props: ListCategoryProps) => {
    const [items, setItems] = useState([])
    const getCategoryList = async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/categories/${props.categoryName}`
          );
          const data = await response.json();
          setItems(data);
        } catch (e) {
          console.log(e);
        }
    }
    useEffect(() => {
        getCategoryList();
    }, [props.categoryName])


  return (
    <div>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <ListCategory categoryName={items}></ListCategory>
    </div>
  );
}

export default ListCategory