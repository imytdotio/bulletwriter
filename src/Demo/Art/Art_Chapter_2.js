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

export const Art_Chapter_2 = (props) => {
  return (
    <div className="text-left mb-6">
      <h3 className="font-bold mb-2 text-xl">{props.header}</h3>
      <div className="flex flex-col w-full border border border-gray-300 rounded-xl">
        <Section
          href=""
          title="What to do other than building myself as a writer?"
        />
        <Section href="" title="Turn your writing into data mining machine." />
        <Section href="" title="This is your “Writing Data Flywheel.”" />
        <Section
          href=""
          title="I believe it is so important to Practice In Public"
        />
        <Section
          href=""
          title="Practicing In Public is what separates aspiring writers from professional writers."
        />
      </div>
    </div>
  );
};
