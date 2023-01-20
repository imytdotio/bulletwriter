import React from "react";
import { Art_Info } from "./Art_Info";
import { Art_Content } from "./Art_Content";

/**
 * @author
 * @function Book
 **/

export const Art_Book = (props) => {
  return (
    // <div className="bg-blue-100 m-auto h-full w-full sm:w-[1100px] max-w-auto sm:max-w-[1100px] flex flex-col items-center justify-start sm:justify-space-between py-0 px-4 sm:p-0">
    //   <div className="bg-blue-300 h-full w-full sm:min-w-[744px] max-w-auto sm:max-w-[910px] flex flex-col sm:flex-row justify-start sm:justify-space-between py-0 px-4 sm:p-0s">
    <div className="mx-auto my-8 w-full max-w-[1100px]">
      <div className="flex flex-col md:flex-row m-auto px-4 py-8 gap-4 w-full max-w-[910px]">
        <div className="md:w-2/5 w-full mx-auto">
          <Art_Info />
        </div>
        <div className="md:w-3/5 w-full mx-auto">
          <Art_Content />
        </div>
      </div>
    </div>
  );
};
