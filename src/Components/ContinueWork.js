import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function ContinueWork
 **/

export const ContinueWork = (props) => {
  return (
    <div className="p-8 md:w-3/5 w-full md:m-auto">
      <Link to="/create">
        <h3 className="mb-2 text-left">
          Continue Writing <strong>Ways to be productive</strong>...
        </h3>
        <div className="w-full md:flex-row border rounded-md p-4 text-left">
          <p className="text-gray-700">
            To do this, make a to-do list for the day and prioritize the items
            on it based on their level of importance. You can also use a
            calendar or planner to schedule specific times for working on
            different tasks...
          </p>
        </div>
      </Link>
    </div>
  );
};
