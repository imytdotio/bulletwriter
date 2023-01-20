import React from "react";
import { Link } from "react-router-dom";
/**
 * @author
 * @function Page
 **/

export const Art_Ch1_P1 = (props) => {
  return (
    <div className="my-8 px-8">
      <div className="w-full max-w-prose mx-auto text-left text-lg">
        <h1 className="text-2xl font-bold mb-4">The definition of a blog.</h1>
        <p className="mb-2">
          For the past 30 years, a blog was seen as a public diary. Sites like
          LiveJournal and Blogger were where people would publish and
          sequentially document their thoughts, rants, musings, and more.
        </p>
        <p className="mb-2">
          Today, starting a blog is a lot closer to starting a business.
        </p>
        <p className="mb-2">
          The entire purpose of starting a blog, and having people come to your
          own site, is for two reasons and two reasons only—and both are
          inspired by money. First, you either plan on monetizing your website
          via ads (which is why it's so crucial that people read your material
          on your site, <i>which you own</i>), or second, you plan on using your
          blog to attract a certain type of customer to your website in order to
          capture their email address and/or sell them a product, service, etc.
        </p>
        <p className="mb-2">
          Now, most people hear the above and think, “Well, of course my goal is
          to make money from my writing.” But making money from your writing is
          not the same thing as 1) starting a website monetized through ads
          (which is a media business) or 2) starting a website that sells a
          product or service (which could be anything from a physical prod- uct
          to an information product like an online course), which are all
          different variations of an e-commerce business.
        </p>
        <p className="mb-2">
          Either way, when you start a “blog,” you aren't really in the business
          of writing.
        </p>
        <p className="mb-2">
          You're in the business of ads, products, or services.
        </p>
        <hr className="mt-12 mb-4" />
        <div className="flex px-4">
          <p className="flex-1"></p>
          <Link to="/books/the-art-and-business-of-online-writing/1/2">
            <button className="bg-black py-2 px-4 text-white rounded-full">
              Next Chapter →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
