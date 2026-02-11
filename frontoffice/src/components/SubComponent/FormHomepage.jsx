import React, { useState } from "react";
import API from "../../utility/axios";

const FormHomepage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    address:"via Homepage"
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Phone validation (10 digits)
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate phone
    if (!validatePhone(formData.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      setLoading(true);

      const payload = { customer: formData };

      // API call
      await API.post("/frontoffice/contactform/submit", payload);

      // Success
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", phone: "", message: "" });
      setError(""); // clear error

    } catch (err) {
      // Handle API errors safely
      if (err.response && err.response.data) {
        const apiError =
          err.response.data.phone ||
          err.response.data.message ||
          JSON.stringify(err.response.data) ||
          "Something went wrong.";
        setError(apiError);
      } else {
        setError(err.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0b2239] rounded-xl p-5 mt-6 shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-white text-lg font-semibold mb-4">Quick Enquiry</h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full bg-[#092033] text-white placeholder-gray-400 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f75002] transition duration-300"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full bg-[#092033] text-white placeholder-gray-400 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f75002] transition duration-300"
        />

        {/* Message */}
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full bg-[#092033] text-white placeholder-gray-400 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f75002] transition duration-300 resize-none"
        />

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 text-sm rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-500/10 border border-green-500 text-green-400 text-sm rounded-lg px-3 py-2">
            {success}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#f75002] hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg transition duration-300 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormHomepage;
