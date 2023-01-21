import React, { useState } from "react";
import menuIcon from "../Assets/menu.svg";
import logo from "../Assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
/**
 * @author
 * @function Nav
 **/

export const Nav = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => {
    return (
      <div className="header-menu absolute flex-col items-start justify-center raounde border bg-white p-0 text-black opacity-0 pointer-events-none outline-none overflow-x-hidden overflow-y-auto"></div>
    );
  };

  return (
    <div>
      <div className="border-b flex px-8 w-screen">
        {/* icon */}
        <Link className="p-2 mr-8" to="/">
          <img src={logo} className="h-full w-36" />
        </Link>

        {/* links */}
        <div className="flex-1 my-auto">
          {/* <NavLink to="">Art</NavLink> */}
        </div>

        {/* menu */}
        <button
          className="my-auto p-2 border rounded-full"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <FiMenu />
        </button>
      </div>
      {toggleMenu ? (
        <div className="w-full bg-blue-200 flex justify-end px-8">
          <ul className="absolute flex-col px-4 items-start text-left justify-center border rounded-md w-36 bg-white pt-2 text-black pointer-events-none outline-none overflow-x-hidden overflow-y-auto">
            <li className="pb-2">Account</li>
            <li className="pb-2">Preferences</li>
            <li className="pb-2">My Collection</li>
            <li className="pb-2"F>Notes</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
