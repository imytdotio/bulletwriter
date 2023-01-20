import React from "react";

/**
 * @author
 * @function Page
 **/

const P = (props) => {
  return <p className="mb-2">{props.children}</p>;
};

export const Page = (props) => {
  return (
    <div className="my-8 px-8">
      <div className="w-full max-w-prose mx-auto text-left text-lg">
        <h1 className="text-2xl font-bold mb-4">{props.title}</h1>
        <P></P>
        <hr className="mt-12 mb-4" />
        <div className="flex px-4">
          <Link to="">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              ← Prev. Chapter
            </button>
          </Link>
          <p className="flex-1"></p>
          <Link to="">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              Next Chapter →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
