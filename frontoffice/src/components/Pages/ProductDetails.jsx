import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useProductDetails } from "../../utility/ProductDetailsContext";
import Navbar from "../SubComponent/Navbar";
import Footer from "../SubComponent/Footer";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { Loading, productDetails } = useProductDetails();

  const [qty, setQty] = useState(1);
  const [sending, setSending] = useState(false);

  /* ---------------- LOADING ---------------- */
  if (Loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <img src="/images/loading.gif" className="w-20" alt="loading" loading="lazy"/>
        <p className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          Loading...
        </p>
      </div>
    );
  }

  /* ---------------- PRODUCT ---------------- */
  const product = productDetails?.all_product?.find(
    (item) => item._id === id
  );

  if (!product) {
    return (
      <p className="text-center mt-10 text-lg font-semibold">
        Product not found
      </p>
    );
  }

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = async () => {
    const cart = JSON.parse(localStorage.getItem("my_cart")) || [];

    const existingIndex = cart.findIndex(
      (item) => item.productId === product._id
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += qty;
      cart[existingIndex].total =
        cart[existingIndex].quantity * cart[existingIndex].price;
    } else {
      cart.push({
        productId: product._id,
        productName: product.pname,
        price: product.pprice,
        quantity: qty,
        total: product.pprice * qty,
        pimage:product.pimage
      });
    }

    localStorage.setItem("my_cart", JSON.stringify(cart));

    /* ---------------- SEND TO BACKEND (FRONTEND ONLY) ---------------- */
    // try {
    //   setSending(true);

    //   await axios.post("http://localhost:5000/api/cart/add", {
    //     productId: product._id,
    //     quantity: qty,
    //   });

    //   // Backend not mandatory – this will silently fail if API not running
    // } catch (error) {
    //   console.warn("Backend not connected (safe to ignore)");
    // } finally {
    //   setSending(false);
    //   navigate("/cart"); // Redirect
    // }
    navigate("/cart");
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="grow bg-gray-100 dark:bg-gray-900 px-4 py-8 text-gray-900 dark:text-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          
          {/* Image */}
          <div className="h-80  rounded flex items-center justify-center">
            <div className="h-full">
              <img src={product.pimage} className="object-cover h-full" loading="lazy"/>
            </div>
            
          </div>

          {/* Details */}
          <div>
            <h1 className="text-2xl font-bold">{product.pname}</h1>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {product.pdescription}
            </p>

            <p className="text-xl font-semibold mt-4">
              ₹{product.pprice}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded"
              >
                -
              </button>

              <span>{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={addToCart}
              disabled={sending}
              className={`mt-6 px-6 py-3 rounded-lg text-white ${
                sending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {sending ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
