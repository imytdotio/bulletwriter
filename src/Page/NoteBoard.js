import React from "react";

/**
 * @author
 * @function NoteBoard
 **/

const NoteBlock = (props) => {
  return (
    <div className={`px-4 py-2 pt-4 rounded-xl text-left mb-4 ${props.bg}`}>
      <h3 className="font-bold mb-2">{props.title}</h3>
      {props.children}
    </div>
  );
};

export const NoteBoard = (props) => {
  return (
    <div className="flex md:flex-row flex-col w-fit mx-auto">
      <div className=" p-4 md:w-72 w-full flex-col">
        <NoteBlock title="Lorem Ipsum" bg="bg-green-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </NoteBlock>
        <NoteBlock title="Lorem Ipsum" bg="bg-blue-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </NoteBlock>
        <NoteBlock title="Lorem Ipsum" bg="bg-green-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </NoteBlock>
      </div>
      <div className="  p-4 md:w-72 w-full flex-col">
        <NoteBlock title="Lorem Ipsum" bg="bg-orange-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </NoteBlock>
        <NoteBlock title="Lorem Ipsum" bg="bg-red-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </NoteBlock>
      </div>
      <div className=" p-4 md:w-72 w-full flex-col">
        <NoteBlock title="Lorem Ipsum" bg="bg-purple-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </NoteBlock>{" "}
        <NoteBlock title="Lorem Ipsum" bg="bg-green-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </NoteBlock>
        <NoteBlock title="Lorem Ipsum" bg="bg-blue-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </NoteBlock>
      </div>
    </div>
  );
};
