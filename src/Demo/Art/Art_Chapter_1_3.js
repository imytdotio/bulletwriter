import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Page
 **/

const P = (props) => {
  return <p className="mb-2">{props.children}</p>;
};

export const Art_Ch1_P3 = (props) => {
  return (
    <div className="my-8 px-8">
      <div className="w-full max-w-prose mx-auto text-left text-lg">
        <h1 className="text-2xl font-bold mb-4">
          The definition of Online Writing.
        </h1>
        <P>
          The way I define Online Writing is based on one variable and one
          variable only:
        </P>
        <P>
          Sharing thoughts, stories, opinions, and insights on a platform that
          already has an active audience.
        </P>
        <P>
          If you’re writing funny restaurant reviews on Yelp where there are
          millions and millions of users, I would put that in the bucket of
          Online Writing. If you are an opinion col- umnist at a digital
          publication that gets tens of millions of page views each month, I’d
          call that Online Writing. If you regularly share industry insights in
          the form of quick status updates on LinkedIn, Twitter, or Facebook,
          that’s Online Writing. I would even argue that if you are contributing
          a guest post to someone else’s website or blog, where they already
          have an engaged audience, that’s Online Writing.
        </P>
        <P>
          If you are writing on your own platform hoping an audience will come
          to you, that’s Blogging.
        </P>
        <P>
          And if you are bringing your voice to 35Chapter 1 a platform where an
          audience already exists, that’s Online Writing.
        </P>
        <P>
          The reason I am so wholeheartedly against blogging as a writing
          strategy is because starting a blog means starting a new website, and
          starting a new website means starting with zero traffic.
        </P>
        <P>What they want is to write.</P>
        <hr className="mt-12 mb-4" />
        <div className="flex px-4">
          <Link to="/books/the-art-and-business-of-online-writing/1/2">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              ← Prev. Chapter
            </button>
          </Link>
          <p className="flex-1"></p>
          <Link to="/books/the-art-and-business-of-online-writing/1/4">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              Next Chapter →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
