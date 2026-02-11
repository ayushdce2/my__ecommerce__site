import React from "react";
import { Link } from "react-router-dom";

const AskQuotation = () => {
  return (
    <Link to="/contact">
      <div
        className="mt-6 relative overflow-hidden rounded-xl 
                   bg-gradient-to-r from-[#0b2239] to-[#092033] 
                   border border-orange-500/40 
                   hover:border-orange-500 
                   p-6 cursor-pointer transition-all duration-300 
                   group"
      >
        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-2">
          <h3 className="text-white text-lg md:text-xl font-semibold">
            Need Bulk Pricing?
          </h3>

          <p className="text-gray-400 text-sm md:text-base">
            Get the best deals for wholesale orders.
          </p>

          <span
            className="mt-2 inline-block bg-[#f75002] 
                       group-hover:bg-orange-600 
                       text-white px-5 py-2 rounded-lg 
                       font-medium transition duration-300"
          >
            Ask Quotation
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AskQuotation;

