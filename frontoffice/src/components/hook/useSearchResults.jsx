import { useState, useEffect } from "react";
import API from '../../utility/axios.jsx';

const useSearchResults = (searchQuery, page = 1, pageSize = 10, sort = "", category = "") => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchQuery || !searchQuery.trim()) {
        setProducts([]);
        setTotalProducts(0);
        return;
      }

      setLoading(true);
      try {
        const response = await API.get("/frontoffice/product/search", {
          params: {
            searchedFor: searchQuery,
            page,
            pageSize,
            sort,
            category,
          },
        });
console.log(response.data,"response.data")
        setProducts(response.data.products || []);
        setTotalProducts(response.data.total || 0);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery, page, pageSize, sort, category]);

  return { products, totalProducts, loading, error };
};

export default useSearchResults;
