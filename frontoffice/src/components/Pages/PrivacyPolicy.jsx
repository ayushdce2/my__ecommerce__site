import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-100 text-slate-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            At Wholesalio, we are committed to protecting your personal information and ensuring a safe online experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">

        {/* Section 1 */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900">
            Information We Collect
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may collect basic information such as your name, email address, phone number, and company details when you contact us, make an inquiry, or place an order.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900">
            How We Use Your Information
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We use your information to:<br/>
            •	Process orders and provide our services<br/>
•	Communicate with you about products, offers, or support<br/>
•	Improve our website and customer experience

          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900">
            Information Security
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We take all reasonable steps to keep your personal information secure and confidential.
Your data is not shared, sold, or rented to any third party without your permission.

          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900">
            Cookies
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our website may use cookies to improve functionality and personalize your experience. You can choose to disable cookies in your browser settings.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900">
            Third-Party Services
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may use trusted third-party providers (such as shipping or payment services) who only receive the necessary data to complete your order safely.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900">
            Your Rights
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            You have the right to access, update, or delete your personal information at any time by contacting us directly.
          </p>
        </div>

        {/* Section 7 */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900">
            Contact Us
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            If you have any questions about our Privacy Policy, please contact us
          </p>
        </div>

      </section>

 

    </div>
  );
}
