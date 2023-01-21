import React from "react";
import cover from "../../Assets/cover.jpg";

/**
 * @author
 * @function Info
 **/

const Button = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      // className="link-button-item box-border sm:box-content font-semibold text-[14px] sm:text-[16px] flex items-center text-black border border-gray-300 decoration-none rounded-full justify-center box-border px-[18px] sm:px-0 my-1 py-[10px] sm:py-3 sm:ml-2 hover:bg-gray-50 hover:border-gray-400 hover:text-black sm:w-full h-[44px] flex-grow sm:h-auto mx-1 sm:mx-0"
      className="border rounded-full border-gray-300 w-full px-4 py-2 inline-block font-semibold mb-2"
    >
      <img className="mr-4" />
      {props.title}
    </a>
  );
};

export const Art_Info = (props) => {
  return (
    <div className="p-2 duration-200">
      <img
        src={cover}
        width={200}
        className="m-auto rounded-xl mb-4 shadow-md"
      />
      <Button title="Read Online" href="" />
      <Button
        title="Buy on Amazon"
        href="https://www.amazon.com/Art-Business-Online-Writing-Capturing/dp/0998203491"
      />
      <Button title="Download PDF" href="" />
      <hr className="my-2" />
      <div className="border flex rounded-full overflow-hidden">
        <input
          className="w-full h-full flex-1 py-2 px-4"
          text="email"
          placeholder="Get Latest Updates!"
        />
        <button className="bg-black text-white py-2 px-4 font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};
