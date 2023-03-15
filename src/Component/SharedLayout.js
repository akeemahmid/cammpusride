import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../css/style.css";
import {FaBars, FaTimes} from 'react-icons/fa'

const SharedLayout = () => {
  const [Open, setOpen] = useState(false)


  return (
    <>
      <nav>
        <div className="logo">Our Ride</div>
        <div className="Menu" onClick={()=>setOpen(!Open
          )}>
          <FaBars/>
        </div>
        <ul  className={Open? 'SideNav Open' : 'SideNav'}>
          <li>
            <NavLink
              to="/" className='links'
              style={({ isActive }) => {
                return { color: isActive ? "#8059f2" : "gray" };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about" className='links'
              style={({ isActive }) => {
                return { color: isActive ? "#8059f2" : "gray" };
              }}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact" className='links'
              style={({ isActive }) => {
                return { color: isActive ? "#8059f2" : "gray" };
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="frequently" className='links'
              style={({ isActive }) => {
                return { color: isActive ? "#8059f2" : "gray" };
              }}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login" className='links'
              style={({ isActive }) => {
                return { color: isActive ? "#8059f2" : "gray" };
              }}
            >
              Log in
            </NavLink>
          </li>
          <div className="Fatimes" onClick={()=>setOpen(!Open)}>
            <FaTimes/>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default SharedLayout;
