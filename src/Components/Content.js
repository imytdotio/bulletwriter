import React from "react";
import { Chapter } from "./Chapter";
import { Description } from "./Description";

/**
 * @author
 * @function Content
 **/

export const Content = (props) => {
  return (
    <div className="">
      <Description />
      <Chapter header="1. Quickstart" />
    </div>
  );
};
