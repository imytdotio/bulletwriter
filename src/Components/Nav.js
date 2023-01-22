import React, { useState } from "react";
import menuIcon from "../Assets/menu.svg";
import logo from "../Assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
/**
 * @author
 * @function Nav
 **/
const NavItem = (props) => {
  return (
    <Link to={props.to}>
      <li className="py-2 px-4 hover:bg-gray-100">{props.title}</li>
    </Link>
  );
};
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
        <div className="w-full flex justify-end px-8 ">
          <ul className="shadow-md absolute flex-col items-start text-left justify-center border rounded-md w-36 bg-white text-black outline-none overflow-x-hidden overflow-y-auto">
            <NavItem to="/" title="My Writings" />
            <NavItem to="/" title="My Collection" />
            <NavItem to="/" title="Notes" />
            <NavItem to="/" title="Account" />
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
