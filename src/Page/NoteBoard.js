import React from "react";

/**
 * @author
 * @function NoteBoard
 **/

export const NoteBoard = (props) => {
  return (
    <div className="flex md:flex-row flex-col w-fit mx-auto">
      <div className="bg-orange-100 p-4 md:w-72 w-full">
        <div className="bg-orange-200 p-4"></div>
      </div>
      <div className="bg-orange-100 p-4 md:w-72 w-full">
        <div className="bg-orange-200 p-4"></div>
      </div>
      <div className="bg-orange-100 p-4 md:w-72 w-full">
        <div className="bg-orange-200 p-4"></div>
      </div>
    </div>
  );
};
