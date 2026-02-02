import { useState, useEffect } from "react";

const categories = [
  { name: "Shoes", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60" },
  { name: "Mobile", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=60" },
  { name: "Shirt", image: "" },
  { name: "Laptop", image: "" },
  { name: "Bike", image: "" },
  { name: "Car", image: "" },
];

const newArrivals = [
  { id: 1, name: "My Shoe1", category: "shoes", price: 1222 },
  { id: 2, name: "My Shoe11", category: "shoes", price: 1222 },
  { id: 3, name: "My Shoe111", category: "shoes", price: 1222 },
  { id: 4, name: "My Shoe1111", category: "shoes", price: 1222 },
];

const allProducts = [
  { id: 1, name: "My Shoe", category: "shoes", price: 1222 },
  { id: 2, name: "My Shoe1", category: "shoes", price: 1222 },
  { id: 3, name: "My Shoe11", category: "shoes", price: 1222 },
  { id: 4, name: "My Shoe111", category: "shoes", price: 1222 },
  { id: 5, name: "My Shoe1111", category: "shoes", price: 1222 },
  { id: 6, name: "My Shoe11111", category: "shoes", price: 1222 },
  { id: 7, name: "My Shoe111111", category: "shoes", price: 1222 },
];

export default function CleanShop() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-poppins selection:bg-orange-500 selection:text-white">

      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-between px-8 py-5 shadow-sm bg-white z-50 relative">
        <div className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="logo"
            className="w-9 h-9"
          />
          <span className="text-orange-500 font-extrabold text-2xl tracking-wide select-none">
            WHOLESALIO
          </span>
        </div>
        <ul className="hidden md:flex space-x-12 text-[#0B1F33] font-semibold text-lg">
          {["Home", "About", "Contact"].map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-orange-500 transition-colors duration-300"
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4 mt-3 md:mt-0 w-full md:w-auto">
          <input
            type="search"
            placeholder="Search products..."
            className="flex-grow md:flex-grow-0 border border-gray-300 rounded-full px-5 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <button
            aria-label="Shopping Cart"
            className="relative p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 4h13"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-orange-500 text-xs font-bold px-1.5 rounded-full select-none">
              0
            </span>
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <section
        className={`relative w-full h-72 sm:h-96 lg:h-[450px] mt-6 overflow-hidden rounded-2xl shadow-md mx-auto max-w-7xl
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          transition-all duration-700 ease-out bg-gradient-to-r from-[#E6F0FA] to-white`}
        aria-label="Hero banner with waterfall and flamingo"
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
          alt="Waterfall in lush forest"
          className="w-full h-full object-cover rounded-2xl brightness-90"
          loading="lazy"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Flamingo_standing_on_one_leg_edit2.jpg"
          alt="Flamingo standing in water"
          className="absolute bottom-6 right-6 w-28 sm:w-36 rounded-xl shadow-lg hover:scale-105 transition-transform duration-400"
          loading="lazy"
        />
      </section>

      {/* Feature Boxes */}
      <section
        className={`max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-[-60px] relative z-10
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          transition-all duration-700 delay-150 ease-out`}
        aria-label="Shop feature highlights"
      >
        {[
          { title: "Fast Delivery", text: "Get your products quickly and reliably." },
          { title: "Premium Quality", text: "Only top-quality items curated for you." },
          { title: "Secure Payment", text: "Safe and trusted payment methods." },
        ].map(({ title, text }) => (
          <div
            key={title}
            className="bg-[#FFF4E6] rounded-xl p-6 flex flex-col items-center text-center shadow-md cursor-default select-none hover:shadow-lg transition-shadow duration-300"
            tabIndex={-1}
          >
            <h3 className="font-semibold text-lg mb-2 text-[#0B1F33]">{title}</h3>
            <p className="text-gray-600 text-sm">{text}</p>
          </div>
        ))}
      </section>

      {/* Our Category */}
      <section
        className={`max-w-7xl mx-auto px-8 mt-20
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          transition-all duration-700 delay-300 ease-out`}
        aria-labelledby="category-heading"
      >
        <h2
          id="category-heading"
          className="text-center text-3xl font-bold mb-12 tracking-wide text-[#0B1F33]"
        >
          Our Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {categories.map(({ name, image }) => (
            <button
              key={name}
              type="button"
              onClick={() => setSelectedCategory(name)}
              className={`relative rounded-xl overflow-hidden cursor-pointer bg-white border border-gray-200 shadow-sm
                transition transform duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400
                ${
                  selectedCategory === name
                    ? "ring-2 ring-orange-400 scale-105 shadow-md"
                    : "hover:scale-105 hover:shadow-md"
                }
              `}
              aria-pressed={selectedCategory === name}
              aria-label={`Select category ${name}`}
            >
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-28 object-cover rounded-xl"
                  loading="lazy"
                  draggable={false}
                />
              ) : (
                <div className="h-28 flex items-center justify-center text-gray-500 font-semibold text-lg select-none">
                  {name}
                </div>
              )}
              <div className="absolute inset-0 bg-white bg-opacity-40 flex items-center justify-center pointer-events-none rounded-xl">
                <span className="text-[#0B1F33] text-lg font-semibold tracking-wide select-none">
                  {name}
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="rounded-full px-8 py-3 bg-orange-500 text-white font-semibold text-lg shadow-md hover:bg-orange-600 transition"
            type="button"
          >
            Explore More
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section
        className={`max-w-7xl mx-auto px-8 mt-24 flex flex-col md:flex-row gap-12 bg-[#F9FAFB] rounded-2xl py-12
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          transition-all duration-700 delay-450 ease-out`}
      >
        {/* Sidebar */}
        <aside
          className="w-full md:w-60 bg-white rounded-xl p-6 max-h-[540px] overflow-y-auto shadow-sm font-semibold text-[#0B1F33]"
          aria-label="All product categories"
          role="listbox"
        >
          <h3 className="font-bold text-xl mb-6 select-none">All Categories</h3>
          <ul className="space-y-3">
            {[
              "All Products",
              "Shoes",
              "Mobile",
              "Shirt",
              "Laptop",
              "Bike",
              "Car",
              "Train",
              "Bus",
              "Cycle",
              "Power Tools",
            ].map((cat) => (
              <li
                key={cat}
                tabIndex={0}
                role="option"
                aria-selected={selectedCategory === cat}
                className={`cursor-pointer rounded-md px-3 py-2 transition-colors duration-300
                  ${
                    selectedCategory === cat
                      ? "bg-orange-500 text-white font-bold shadow"
                      : "hover:bg-orange-100"
                  }
                `}
                onClick={() => setSelectedCategory(cat)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedCategory(cat);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
            <h3 className="text-3xl font-bold tracking-wide text-[#0B1F33] select-none">New Arrivals</h3>
            <button
              className="text-orange-500 font-semibold hover:underline transition select-none focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
              type="button"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
            {newArrivals.map(({ id, name, category, price }) => (
              <div
                key={id}
                tabIndex={0}
                role="button"
                aria-label={`${name} in category ${category}, price Rs. ${price}`}
                className="bg-white rounded-xl p-5 cursor-pointer border border-gray-200 shadow-sm hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <div className="h-32 rounded-lg bg-gray-200" />
                <h4 className="text-lg font-semibold mt-4 truncate text-[#0B1F33]">{name}</h4>
                <p className="text-sm text-gray-600 capitalize">{category}</p>
                <p className="text-orange-500 font-semibold mt-1">Rs. {price}</p>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold tracking-wide mb-8 text-[#0B1F33] select-none">All Products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {allProducts.map(({ id, name, category, price }) => (
              <div
                key={id}
                tabIndex={0}
                role="button"
                aria-label={`${name} in category ${category}, price Rs. ${price}`}
                className="bg-white rounded-xl p-5 cursor-pointer border border-gray-200 shadow-sm hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <div className="h-32 rounded-lg bg-gray-200" />
                <h4 className="text-lg font-semibold mt-4 truncate text-[#0B1F33]">{name}</h4>
                <p className="text-sm text-gray-600 capitalize">{category}</p>
                <p className="text-orange-500 font-semibold mt-1">Rs. {price}</p>
              </div>
            ))}
            <div
              tabIndex={0}
              role="button"
              className="bg-orange-500 rounded-xl flex items-center justify-center cursor-pointer text-white font-semibold text-lg shadow-md hover:bg-orange-600 transition-transform duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-400 select-none"
              aria-label="View all products"
            >
              View All
            </div>
          </div>
        </main>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 mt-24 text-gray-500 text-sm select-none font-light tracking-widest">
        © 2025 My Shop. All rights reserved.
      </footer>
    </div>
  );
}
