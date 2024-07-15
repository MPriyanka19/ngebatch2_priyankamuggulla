import React, { useEffect, useState } from "react";

export default function Categories() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCats(data);
        console.log(typeof cats);
        console.log({ res });
        console.log({ data });
        //return res.json;
      } catch (e) {
        console.log("error", e);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {cats}
      <ul>
        {cats.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
