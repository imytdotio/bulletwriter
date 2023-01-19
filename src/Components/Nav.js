import React, { useState } from "react";
import menuIcon from "../Assets/menu.svg";
import logo from "../Assets/logo.png";

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
    <div className="border-b h-16 py-4 px-8 flex flex-row">
      <img src={logo} />
      <div className="flex-1"></div>
      <button className="header-menu-button w-[40px] h-[40px] my-0 mx-1 mr-3.5 rounded-full border border-full text-[18px] border-gray-300 bg-white flex justify-center align-items-center">
        <img src={menuIcon} width={15}></img>
      </button>
      <Menu />
    </div>
  );
};
