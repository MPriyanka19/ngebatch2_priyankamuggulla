import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [user, setUser] = useState([])
    const getData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUser(data)
        }
        catch (e) { console.log(e) }
    }
    useEffect(() => {
        /* fetch('https://jsonplaceholder.typicode.com/users')
             .then(response => response.json())
             .then(data => setUser(data))
             .catch((e)=>console.log(e)) */
        getData();
         
    }, [])
    if (user.length == 0) {
      return <div>Loading....</div>;
    }
    return (
      <>
        <div>
          <ul>
            {user.map((u: any) => (
              <li key={u.id}>{u?.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {user.map((u: any) => (
              <li key={u.id}>{u.email}</li>
            ))}
          </ul>
        </div>
      </>
    );
}

export default Fetch