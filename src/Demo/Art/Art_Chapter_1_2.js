import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Page
 **/

const P = (props) => {
  return <p className="mb-2">{props.children}</p>;
};

export const Art_Ch1_P2 = (props) => {
  return (
    <div className="my-8 px-8">
      <div className="w-full max-w-prose mx-auto text-left text-lg">
        <h1 className="text-2xl font-bold mb-4">
          The definition of a website.
        </h1>
        <P>
          For the vast majority of people, the primary purpose of having a
          website is to quickly communicate who you are, what you do, and what
          you have done in the past.
        </P>
        <P>In short, it's a business card.</P>
        <P>
          A perfect example would be the personal website of an author and
          speaker. Let’s say someone says, “Hey, you absolutely have to check
          out Nicolas Cole’s work. He’s incredible.” If you have no idea who I
          am, the first thing you’re going to do is Google my name. Of all the
          links that appear on the first page, you are most likely going to
          click on my website first (since someone’s personal website is usually
          the link that ranks the highest). Once you’re on my website, you are
          going to go through a series of judgments in your mind: “What does
          Cole do? Do I see any symbols of credibility? Do I recognize any of
          his work, or anyone he has worked with? Does this look like someone
          worth knowing about?”
        </P>
        <P>
          Once these judgments have been made, and if you’re still curious to
          learn more, you’re going to then navigate deeper in order to find some
          of my writing. If I have a blog on my website, you might start
          there—and if I don’t have a blog, that doesn’t mean you’re just going
          to stop looking. Instead, you’re going to go back to your Google
          search and start clicking on other links in order to find what you’re
          looking for: my Quora profile, my Medium, LinkedIn, or Instagram
          profiles, my Amazon Author page, etc. In fact, even if I do have a
          blog, you’re probably still going to go through this research
          process—because what you’re really interested in is seeing my writing
          in the context of how other people feel about my writing too.
        </P>
        <P>
          Which is why, unless you are an internet entrepreneur looking to build
          a media business (monetize through ads) or focus 100% of your efforts
          on selling a product (monetize through e-commerce), I wholeheartedly
          believe starting a blog is a waste of time.
        </P>
        <P>
          And to be perfectly honest, even if you are selling a prod- uct (as I
          eventually did), there are far more effective ways to get exposure,
          build a brand, and bring traffic to your personal website than
          “blogging.”
        </P>
        <hr className="mt-12 mb-4" />
        <div className="flex px-4">
          <Link to="/books/the-art-and-business-of-online-writing/1/1">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              ← Prev. Chapter
            </button>
          </Link>
          <p className="flex-1"></p>
          <Link to="/books/the-art-and-business-of-online-writing/1/3">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              Next Chapter →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
