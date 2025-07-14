import { useState } from 'react'
import { Outlet } from 'react-router';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';


function MainLayouts() {
  

  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
      <Outlet/>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default MainLayouts;
