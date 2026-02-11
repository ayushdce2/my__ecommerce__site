import React from "react";

const FormHomepage = () => {
  return (
    <div className="bg-[#0b2239] rounded-xl p-5 mt-6 shadow-lg">
      <h3 className="text-white text-lg font-semibold mb-4">
        Quick Enquiry
      </h3>

      <form className="space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#092033] text-white placeholder-gray-400 
                       border border-white/10 rounded-lg px-4 py-2.5 
                       focus:outline-none focus:ring-2 focus:ring-orange-500 
                       focus:border-orange-500 transition duration-300"
          />
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-[#092033] text-white placeholder-gray-400 
                       border border-white/10 rounded-lg px-4 py-2.5 
                       focus:outline-none focus:ring-2 focus:ring-orange-500 
                       focus:border-orange-500 transition duration-300"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full bg-[#092033] text-white placeholder-gray-400 
                       border border-white/10 rounded-lg px-4 py-2.5 
                       focus:outline-none focus:ring-2 focus:ring-orange-500 
                       focus:border-orange-500 transition duration-300 resize-none"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#f75002] hover:bg-orange-600 
                     text-white font-semibold py-2.5 rounded-lg 
                     transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};



export default FormHomepage