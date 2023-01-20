import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Page
 **/

const P = (props) => {
  return <p className="mb-2">{props.children}</p>;
};

export const Art_Ch1_P4 = (props) => {
  return (
    <div className="my-8 px-8">
      <div className="w-full max-w-prose mx-auto text-left text-lg">
        <h1 className="text-2xl font-bold mb-4">
          And how do you get traffic to your blog?
        </h1>
        <P>
          A) Spend money on ads (direct people from other websites over to your
          website).
        </P>
        <P>
          B) Optimize your blog posts for Search Engine Optimization (SEO) so
          they’ll appear on the first page of Google when people search certain
          keywords and phrases.
        </P>
        <P>
          C) Build a social media following on another platform (Facebook,
          Twitter, Instagram, etc.) and direct people to your website via links.
        </P>
        <P>
          But here’s the thing: none of the above have anything to do with
          sharing your thoughts, stories, opinions, and insights at scale. Ads,
          SEO, and social media marketing are very different skills than the art
          of writing and the science of attracting organic attention.
        </P>{" "}
        <P>
          Writers don’t typically have an advertising budget (I certainly
          didn’t)—and the ones who do, want to spend it on something with a more
          concrete return on investment (like selling a product or service).
          Writers also don’t want to spend time trying to figure out how to
          “growth hack” a social media following on another platform just so
          they can funnel people to their blog. Most of all, writers don’t
          36Chapter 1 want to stuff their blog posts full of keywords in the
          name of ranking better on Google.
        </P>{" "}
        <P>
          What writers and industry leaders want is to share their knowledge in
          the right ways, on the right platforms, and have people hear what they
          have to say.
        </P>{" "}
        <P>What they want is to write.</P>
        <hr className="mt-12 mb-4" />
        <div className="flex px-4">
          <Link to="/books/the-art-and-business-of-online-writing/1/3">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              ← Prev. Chapter
            </button>
          </Link>
          <p className="flex-1"></p>
          <Link to="/books/the-art-and-business-of-online-writing/1/5">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              Next Chapter →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
