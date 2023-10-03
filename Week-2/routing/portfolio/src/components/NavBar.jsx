import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar(){
  return ( <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink to="/" className="navbar-brand">Professional Portfolio</NavLink>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" aria-current="page">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/project" className="nav-link" activeClassName="active" >Project</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active" >Contact</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/skill" className="nav-link" activeClassName="active" >Skills</NavLink>
          </li>

        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>)
}

export default NavBar;