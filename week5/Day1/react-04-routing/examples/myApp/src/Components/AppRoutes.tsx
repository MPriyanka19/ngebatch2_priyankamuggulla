// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import AboutUs from '../views/AboutUs';
import Contact from '../views/Contact';
import Blogs from '../views/Blogs';
import Address from '../views/Address';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
      <Route path="/contact" element={<Contact />}>
        <Route path="/contact/:city" element={<Address />}/>
      </Route>
      <Route path="/blog" element={<Blogs />}></Route>
      <Route path="/blog/:id" element={<Blogs />}></Route>
    </Routes>
  );
}

export default AppRoutes