// import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      {"     "}
          <Link to="/aboutus">About us</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
      <Link to="/blog">Blogs</Link>{' '}
    </nav>
  );
}

export default NavBar