import React from "react";
import { Link } from "react-router-dom";
import cover from "../Assets/cover.jpg";
import { Book } from "./Book";
/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <div>
      {/* Your Collection */}
      {/* With progress bar on each book */}

      <div className="md:w-3/5 w-full flex flex-col p-8 md:m-auto">
        {/* <h1 className="font-bold text-2xl mb-4">My Collection</h1> */}
        <Link
          to="/books/the-art-and-business-of-online-writing"
          className="w-full flex flex-col md:flex-row border rounded-md my-4"
        >
          <div className="basis-1/4 md:border-r md:border-b-0 border-b p-2 ">
            <img src={cover} className="w-1/2 mx-auto md:w-full" />
          </div>

          {/* Right */}
          <div className="basis-3/4 text-left p-4 flex flex-col ">
            {/* Text */}
            <div className="flex-1">
              <h1 className="font-bold">
                The Art and Business of Online Writing
              </h1>
              <p>Nicolas Cole</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Progress
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  45%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </Link>

        <Link
          to="/books/the-art-and-business-of-online-writing"
          className="w-full flex flex-col md:flex-row border rounded-md my-4"
        >
          <div className="basis-1/4 md:border-r md:border-b-0 border-b p-2 ">
            <img src={cover} className="w-1/2 mx-auto md:w-full" />
          </div>

          {/* Right */}
          <div className="basis-3/4 text-left p-4 flex flex-col ">
            {/* Text */}
            <div className="flex-1">
              <h1 className="font-bold">
                The Art and Business of Online Writing
              </h1>
              <p>Nicolas Cole</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Progress
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  30%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
