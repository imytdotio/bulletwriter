import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Page
 **/

const P = (props) => {
  return <p className="mb-2">{props.children}</p>;
};

export const Art_Ch1_P6 = (props) => {
  return (
    <div className="my-8 px-8">
      <div className="w-full max-w-prose mx-auto text-left text-lg">
        <h1 className="text-2xl font-bold mb-4">
          “But Cole, you were selling eBooks on your website. Why didn’t you
          start blogging to drive sales?”
        </h1>
        <P>Great question.</P>
        <P>
          In 2015, after I wrote my first massively viral article on Quora and
          self-published my first two eBooks, I now had a product to sell.
        </P>
        <P>
          The reason I chose not to pivot from Quora and start writing on my
          personal website was because I wasn’t passionate about building an
          encyclopedia site for fitness readers. My near-term goal might have
          been to drive eBook sales for my “Skinny to Shredded” series, but my
          long- term goal wasn’t to build a revenue-generating website selling
          fitness eBooks, fitness programs, and online fitness courses. If that
          had been my goal, then like the Kindle- preneur example, I would have
          launched something like www.skinnytoshredded.com, writing
          hyper-focused con- tent about fitness, and specifically targeting
          keywords and phrases potential customers were searching on Google.
        </P>
        <P>
          Again, the difference here comes down to what you want to get out of
          your writing. Do you want to build a company and brand, making money
          selling ads, products, and/or services? Then a website and “blog”
          makes sense. But if you enjoy writing and want to build a personal
          brand, posi- tion yourself as an authentic voice in your industry, and
          share your thoughts, stories, opinions, and insights at scale, then do
          not start a blog.
        </P>
        <P>The Online Writing approach was made for you.</P>

        <hr className="mt-12 mb-4" />
        <div className="flex px-4">
          <Link to="/books/the-art-and-business-of-online-writing/1/5">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              ← Prev. Chapter
            </button>
          </Link>
          <p className="flex-1"></p>
          <Link to="/books/22-laws-of-digital-writing/1/4">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              Next Chapter →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
