import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ navName, linkto }) {
  return (
    <li>
      <NavLink
        to={linkto}
        className={ ({isActive})=> `${isActive ? " bg-teal-700 dark:bg-slate-600" :" "} text-white hover:bg-teal-700 dark:hover:bg-slate-600 rounded-md px-3 py-2 text-sm font-medium`}
      >
        {navName}
      </NavLink>
    </li>
  );
}

export default Nav;
