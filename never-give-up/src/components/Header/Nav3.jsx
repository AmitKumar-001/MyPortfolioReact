import React from "react";
import { useState } from "react";

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const [menuIcon, setMenuIcon] = useState(
    "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  );
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
    <nav className=" sticky right-0 left-0 top-0">
      <div className="bg-green-800  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="./src/assets/Images/react.svg" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About2
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div as="div" className="relative ml-3">
                <div>
                  <div className="relative flex rounded-full bg-gray-800 text-sm ">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="./src/assets/Images/Amit2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {
        menuStatus ? <div
        class="sm:hidden bg-green-800 "
      >
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </a>
         
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About4
            </a>
        </div>
      </div> :
       
      <div
      class="sm:hidden invisible bg-transparent"
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          About
        </a>
       
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          Projects
          </a>
      </div>
    </div> 
      }
    </nav>
  );
}

export default Header;
