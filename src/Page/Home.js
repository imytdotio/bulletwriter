import React from "react";
import { Link } from "react-router-dom";

import { Book } from "./Book";
/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <div>
      <Link to='/books/22-laws-of-digital-writing'>Laws</Link>
    </div>
  );
};
