
import React from 'react'
import { NavLink } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <>
    <div className='container-fluid nav_bg'>
        <div className='row' >        
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
     <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">PlacementS</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">LOGIN</NavLink>
        </li>

    </ul>
      
    </div>
  </div>
</nav> 
      </div>
        </div>
    </>
  )
}

export default Navbar;