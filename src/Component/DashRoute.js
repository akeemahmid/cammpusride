import React, { useState } from "react";
import { FaTimes, FaBars, FaUser} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import "../css/style.css";
const DashRoute = ({User}) => {
  const [toggle, settoggle] = useState(false)

  return (
    <>
    <section className="navBarss">
        <div className="bars" onClick={()=>settoggle(!toggle)}>
      <FaBars/>
        </div>

      <div>
        <ul className={toggle? 'dashLinks' : 'other'}>
        <div className="user">
          <span className="cl1"><FaUser/> </span>
        <span>Welcome {User?.name}</span>
        </div>

          <li>
            <NavLink
              className="leenks"
              style={({ isActive }) => {
                return { color: isActive ? "#8059f2" : "gray" };
              }}
              to="history"
            >
              Ride History
            </NavLink>
          </li>

          <li>
            <NavLink
              className="leenks"
              style={({ isActive }) => {
                return { color: isActive ? "#8059f2" : "gray" };
              }}
              to="/newride"
            >
              Book a Ride
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="leenks"
              style={({ isActive }) => {
                return { color: isActive ? "#8059f2" : "gray" };
              }}
              to="/team"
            >
              Join our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              className="leenks"
              style={({ isActive }) => {
                return { color: isActive ? "#8059f2" : "gray" };
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>

          <div className="cancel" onClick={()=>settoggle(!toggle)}>
          <FaTimes />
        </div>
        </ul>
    
      </div>
    </section>
    <Outlet/>
    </>
  );
};

export default DashRoute;
