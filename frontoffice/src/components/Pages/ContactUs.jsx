import React, { useState } from "react";
import API from "../../utility/axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState({ phone: "" });

  // ✅ Phone validation helper
  const validatePhone = (phone) => {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return "Valid 10-digit phone required";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // allow only digits in phone
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // live phone validation
    if (name === "phone") {
      setError({ phone: validatePhone(value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      setError({ phone: phoneError });
      setLoading(false);
      return;
    }

    try {
      const payload = {
        customer: formData,
      };

      await API.post("/frontoffice/contactform/submit", payload);

      setSuccess("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setError({ phone: "" });
    } catch (err) {
      console.error(err);
      setError({ phone: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1c2d] text-white">
      {/* Hero */}
      <div className="relative h-[260px] flex items-center justify-center bg-gradient-to-r from-[#0b1c2d] to-[#102a43]">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          <p className="text-gray-300">
            Have questions about products, orders, or partnerships?
            We’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 India</p>
            <p>📧 email@wholesa.io</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#102a43] p-6 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#0b1c2d] border border-gray-700 focus:border-orange-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#0b1c2d] border border-gray-700 focus:border-orange-500 focus:outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#0b1c2d] border border-gray-700 focus:border-orange-500 focus:outline-none"
            />

            {error.phone && (
              <p className="text-red-400 text-sm">{error.phone}</p>
            )}

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#0b1c2d] border border-gray-700 focus:border-orange-500 focus:outline-none"
            />

            {success && (
              <p className="text-green-400 text-sm">{success}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-2 rounded font-medium"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
