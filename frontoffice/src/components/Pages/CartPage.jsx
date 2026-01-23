import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../SubComponent/Navbar";
import Footer from "../SubComponent/Footer";
import { useNavigate } from "react-router-dom";
import API from '../../utility/axios';


const CartPage = () => {
    const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  /* ---------------- USER FORM ---------------- */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  /* ---------------- LOAD CART ---------------- */
  useEffect(() => {
    if(JSON.parse(localStorage.getItem("my_cart")) != null && JSON.parse(localStorage.getItem("my_cart")).length > 0){
    const cart = JSON.parse(localStorage.getItem("my_cart"));
    setCartItems(cart);
    }
  }, []);

  /* ---------------- SYNC CART ---------------- */
  useEffect(() => {
    localStorage.setItem("my_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /* ---------------- QTY HANDLERS ---------------- */
  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    updated[index].total =
      updated[index].quantity * updated[index].price;
    setCartItems(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      updated[index].total =
        updated[index].quantity * updated[index].price;
      setCartItems(updated);
    }
  };

  const removeItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  /* ---------------- TOTAL ---------------- */
  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.total,
    0
  );

  /* ---------------- FORM HANDLING ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email required";
    if (!form.phone.match(/^[6-9]\d{9}$/))
      newErrors.phone = "Valid 10-digit phone required";
    if (form.address.length < 10)
      newErrors.address = "Address must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


   

  /* ---------------- SUBMIT ORDER ---------------- */
  const submitOrder = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      const AllClientData = {
        customer: form,
        items: cartItems,
        totalAmount: grandTotal,
      }
     const response = await API.post("/frontoffice/leadform/submit" ,AllClientData);
                const data = response.data;
                // handleSuccess(data.message);
                
              
              

   
                console.log(response,"response");
                // await refetch();
                // console.log(finalRefetch,"finalRefetch",refetch)
                console.log(data.status,"data.status")

      localStorage.removeItem("my_cart");
      setCartItems([]);
      setShowCheckoutModal(false);
      setShowSuccessModal(true);
      setForm({ name: "", email: "", phone: "", address: "" });
    } catch (error) {
      console.log(error, "error", error.status);
                // error.status=="500" && handleError(error.response.data.error.codeName)
                // error.status=="400" && handleError(error.response.data.message);
                // error.status=="403" && handleError(error.response.data.error.details[0].message);
                // error.status=="422" && handleError(error.response.data.message);
                // error.status=="409" && handleError(error.response.data.message);
                // error.status=="400" && handleError(error.response.data.error.details[0].message);
      localStorage.removeItem("my_cart");
      setCartItems([]);
      setShowCheckoutModal(false);
      setShowSuccessModal(true);
    } finally {
      setSubmitting(false);
      setTimeout(()=>{
 navigate("/"); // Redirect
      },1000)
     
    }
  };

  

  /* ---------------- UI ---------------- */
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="grow bg-gray-100 px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <table className="w-full border-collapse mb-6" >
                <thead>
                  <tr className="border-b-2">
                    <th className="p-2 text-left">Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index} className="border-b text-center" >
                      <td className="font-bold capitalize text-left">{item.productName}</td>
                      <td>₹{item.price}</td>
                      <td>
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => decreaseQty(index)}
                            className="px-2 bg-gray-300"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => increaseQty(index)}
                            className="px-2 bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>₹{item.total}</td>
                      <td>
                        <button
                          onClick={() => removeItem(index)}
                          className="px-3 py-1 my-1 bg-red-500 text-white rounded"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  Grand Total: ₹{grandTotal}
                </h2>

                <button
                  onClick={() => setShowCheckoutModal(true)}
                  className="px-6 py-3 bg-green-600 text-white rounded"
                >
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ---------------- CHECKOUT MODAL ---------------- */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-[#f6f3f4c4] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Customer Details</h2>

            <form onSubmit={submitOrder} className="space-y-4">
              {["name", "email", "phone", "address"].map((field) => (
                <div key={field}>
                  <input
                    type="text"
                    name={field}
                    placeholder={field.toUpperCase()}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCheckoutModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  {submitting ? "Submitting..." : "Confirm Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------- SUCCESS MODAL ---------------- */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-sm p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Order Successful!
            </h2>

            <p className="mb-6">
              Thank you for your order. We will contact you soon.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2 bg-green-600 text-white rounded"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CartPage;
