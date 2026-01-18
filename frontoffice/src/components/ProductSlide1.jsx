import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const ProductSlide1 = () => {
  return (<>
  <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          Our Products Banner
        </h2>

        {/* BANNER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="relative group bg-slate-300 h-52 md:h-60 rounded-lg overflow-hidden border border-slate-400/40 hover:border-indigo-500 transition"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-500" />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/70 transition flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center transition">
                  <h3 className="text-lg font-semibold mb-2">
                    Product Collection
                  </h3>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-full font-medium hover:scale-105 transition">
                    View Products <FiArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default ProductSlide1