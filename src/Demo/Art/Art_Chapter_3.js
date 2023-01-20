import React from "react";
import arrow from "../../Assets/arrow-jump.svg";

/**
 * @author
 * @function Chapter
 **/

const Section = (props) => {
  return (
    <a
      href={props.href}
      className="text-black no-underline cursor-pointer flex flex-row items-center font-inter text-sm box-border w-full py-2 px-3 m-0 border-b border-gray-300 last:border-none first:rounded-t-xl last:rounded-b-xl hover:bg-gray-50 active:bg-gray-100"
    >
      <button className="clear-button-styles rounded-full p-0 border border-solid border-gray-300 mr-4">
        <img src={arrow} width={24} height={24} />
      </button>
      <p>{props.title}</p>
    </a>
  );
};

export const Art_Chapter_3 = (props) => {
  return (
    <div className="text-left mb-6">
      <h3 className="font-bold mb-2 text-xl">{props.header}</h3>
      <div className="flex flex-col w-full border border border-gray-300 rounded-xl">
        <Section href="" title="Level 1: Conscious vs Unconscious" />
        <Section href="" title="Level 2: Choose A Category" />
        <Section href="" title="Level 3: Define Your “Style”" />
        <Section
          href=""
          title="Level 4: Optimize Your Writing Style For Speed"
        />
        <Section href="" title="Level 5: Specificity Is The Secret" />
        <Section href="" title="Level 6: Engineering Credibility" />
        <Section href="" title="Level 7: Create Your Own Category" />
      </div>
    </div>
  );
};
