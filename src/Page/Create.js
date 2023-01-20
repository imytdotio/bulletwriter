import React from "react";

/**
 * @author
 * @function Create
 **/

export const Create = (props) => {
  return (
    <div className="mx-auto my-8 w-full max-w-[1400px] p-4">
      <div className="flex flex-col md:flex-row m-auto px-4 py-8 gap-4 w-full max-w-[1100px]">
        <div className="md:w-2/12 w-full mx-auto ">
          <h3>Table of Content</h3>
          <ul className="text-left my-4">
            <li className="truncate">1. The Fundamentals</li>
            <li className="truncate">2: The 1st Law, Make It Obvious</li>
            <li className="truncate">3: The 2nd Law: Make It Attractive</li>
            <li className="truncate">4: The 3rd Law: Make It Easy</li>
            <li className="truncate">5: The 4th Law: Make It Satisfying</li>
            <li className="truncate">6: Advanced Techniques, How to Go from Being Merely Good to Truly Great</li>
          </ul>
        </div>
        <div className="md:w-6/12 w-full mx-auto">
          <h3>Content</h3>
          <textarea className="w-full h-96 box-border rounded-md border my-4"></textarea>
        </div>
        <div className="md:w-4/12 w-full mx-auto">
          <h3>Ideas</h3>
          <textarea className="w-full h-96 box-border rounded-md border my-4"></textarea>
        </div>
      </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md md:w-fit w-full">Save</button>
    </div>
  );
};
