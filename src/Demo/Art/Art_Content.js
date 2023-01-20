import React from "react";
import { Art_Chapter_1 } from "./Art_Chapter_1";
import { Art_Chapter_2 } from "./Art_Chapter_2";
import { Art_Chapter_3 } from "./Art_Chapter_3";
import { Art_Description } from "./Art_Description";

/**
 * @author
 * @function Content
 **/

export const Art_Content = (props) => {
  return (
    <div className="">
      <Art_Description />
      <Art_Chapter_1 header="Want To Start Writing Online? Don't Start A Blog" />
      <Art_Chapter_2 header="The New Way To Think About Being A Writer In The Digital Age" />
      <Art_Chapter_3 header="How The Online Writing Game Works: 7 Levels Of Success" />
    </div>
  );
};
