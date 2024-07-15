// import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
    const cities = ["Chennai", "Hyderbad", "Mumbai", "Pune"];
  return (
    <div>
      <div>
        {cities.map((city) => (
          <Link key={city} to={`/contact/${city}`}>
            {city}
          </Link>
        ))}
      </div>
      <Outlet />
      
    </div>
  );
    
}

export default Contact