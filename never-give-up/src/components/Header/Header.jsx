import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const [menuIcon, setMenuIcon] = useState(
    "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  );

  const changeTheme = () =>{
    console.log("Theme Changed");
  }
  function menu() {
    setMenuStatus(!menuStatus);
    console.log("Menu Status: " + menuStatus);
    if (menuStatus) {
      setMenuIcon("M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5");
      console.log("menuT: " + menuIcon);
    } else {
      setMenuIcon("M6 18 18 6M6 6l12 12");
      console.log("menuB: " + menuIcon);
    }
  }

  return (
    <nav className=" sticky right-0 left-0 top-0 font-extrabold">
      <div className="bg-teal-600 dark:bg-slate-800 dark:text-white mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={menu}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={menuIcon}
                ></path>
              </svg>
            </button>
          </div>

          {/* ---------------Large screen Menu------ */}
          <div className="flex flex-1 items-center justify-around sm:items-stretch">
            <Link to="/" className="relative ml-3">
                  <div className="relative flex rounded-full text-sm ">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="./src/assets/Images/Amit2.jpg"
                    />          
                  </div>
              </Link>

            <div className="hidden sm:ml-6 sm:block">
              <ul className="flex space-x-4">
                <Nav navName="About" linkto="about" />
                <Nav navName="Projects" linkto="projects" />
                <Nav navName="Skill" linkto="skill" />
                <Nav navName="Contact" linkto="contact" />
                <Nav navName="Resume" linkto="/" />
              </ul>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
              
              <div className="flex flex-shrink-0 items-center" onClick={changeTheme}>
              <ThemeBtn />
            </div>

            </div>
          </div>
        </div>
      </div>

      {menuStatus ? (
        <div className="sm:hidden bg-teal-600 text-white  dark:bg-slate-800 absolute ">
          <div className="space-y-3 pb-3 pt-2" onClick={menu}>
            <Nav navName="About" linkto="about" />
            <Nav navName="Projects" linkto="projects" />
            <Nav navName="Skill" linkto="skill" />
            <Nav navName="Contact" linkto="contact" />
            <Nav navName="Resume" linkto="/" />
          </div>
        </div>
      ) : (
        // <>False </>
        <div className="sm:hidden invisible bg-transparent absolute">
          <div className="space-y-3 px-2 pb-3 pt-2">
            <Nav navName="About" linkto="#" />
            <Nav navName="Projects" linkto="#" />
            <Nav navName="Skill" linkto="#" />
            <Nav navName="Contact" linkto="#" />
            <Nav navName="Resume" linkto="#" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
