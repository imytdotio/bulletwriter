import React from "react";
import { Link } from "react-router-dom";
import cover from "../Assets/cover.jpg";
import { Book } from "./Book";
import { MyCollection } from "../Components/MyCollection";
import { ContinueWork } from "../Components/ContinueWork";
/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <div>
      {/* Your Collection */}
      {/* With progress bar on each book */}
      <ContinueWork />
      <MyCollection />
    </div>
  );
};
