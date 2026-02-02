import { useSearchParams, useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import useSearchResults from "../hook/useSearchResults";
import Navbar from "../SubComponent/Navbar";
import Footer from "../SubComponent/Footer";

function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";

  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [sort, setSort] = useState(""); // "price_asc" or "price_desc"
  const [category, setCategory] = useState("");

  const { products, totalProducts, loading, error } = useSearchResults(
    query,
    page,
    pageSize,
    sort,
    category
  );

  const totalPages = Math.ceil(totalProducts / pageSize);

  if (loading) return <p className="text-center mt-20 text-gray-400">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
//   if (!products.length) return ;

  return (<>

    <Navbar/>
  
    <div className="  text-white px-6 py-12 overflow-auto">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex gap-4">
          <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="bg-[#071a2f] border border-[#0b223a] rounded px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          >
            <option value="">Sort by</option>
            <option value="price_asc">Price: Low → High</option>
            <option value="price_desc">Price: High → Low</option>
          </select>

          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="bg-[#071a2f] border border-[#0b223a] rounded px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="books">Books</option>
          </select>
        </div>

        <div className="text-sm text-gray-400">
          Total Products: <span className="text-orange-500 font-semibold">{totalProducts}</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left text-[#0B1F33]">
        Search results for{" "}
        <span className="text-orange-500">"{query}"</span>
      </h2>

      {/* Product Grid */}
      {
        !products.length ? <p className="text-center my-20 text-gray-400 text-3xl font-bold h-[22vh]">No products found</p> : (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item._id}`}
            className="cursor-pointer rounded-xl p-4 bg-gradient-to-b from-[#071a2f] to-[#041321] dark:from-[#0b223a] dark:to-[#020b17] hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 ease-out"
          >
            {/* Image placeholder */}
            <div
              className="h-40 sm:h-44 bg-[#0b223a] rounded-lg mb-4 group-hover:scale-[1.02] transition-transform duration-300"
              style={{
                backgroundImage: `url(${item.image || "/placeholder.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label={item.name}
            />

            {/* Info */}
            <h4 className="text-sm font-medium truncate text-gray-100 group-hover:text-orange-400 transition-colors duration-300">
              {item.name}
            </h4>

            <p className="text-xs text-gray-400 mt-0.5 capitalize">{item.category}</p>

            <p className="text-orange-500 font-semibold mt-1">Rs. {item.price}</p>
          </Link>
        ))}
      </div>
        )
      }
      

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 rounded bg-[#0b223a] border border-orange-500 text-orange-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-orange-500 hover:text-[#020b17] transition"
        >
          Prev
        </button>

        <span className="text-gray-400">
          Page <span className="text-orange-500 font-semibold">{page}</span> of{" "}
          <span className="text-orange-500 font-semibold">{totalPages}</span>
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 rounded bg-[#0b223a] border border-orange-500 text-orange-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-orange-500 hover:text-[#020b17] transition"
        >
          Next
        </button>
      </div>

   
    </div>
    <Footer/>

    </>
  );
}

export default SearchResultPage;
