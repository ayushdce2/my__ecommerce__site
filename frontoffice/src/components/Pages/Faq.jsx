import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-100 text-slate-800">

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            Find quick answers to common questions about ordering, delivery,
            payments, and returns.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        {/* FAQ Item 1 */}
        <div className="border border-slate-200 rounded-xl mb-4 bg-white">
          <button
            onClick={() => toggleFAQ(0)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-semibold text-slate-900">
              What services do you provide?
            </span>
            <span className="text-orange-500 text-xl cursor-pointer">
              {openIndex === 0 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 0 && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
              We offer complete import–export solutions including product sourcing, supplier verification, quality inspection, warehousing, logistics, and documentation support.
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="border border-slate-200 rounded-xl mb-4 bg-white">
          <button
            onClick={() => toggleFAQ(1)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-semibold text-slate-900">
              How can I place an order?
            </span>
            <span className="text-orange-500 text-xl">
              {openIndex === 1 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 1 && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
              You can choose your product and place an order through our platform or by contacting our team directly via phone or email.
            </div>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="border border-slate-200 rounded-xl mb-4 bg-white">
          <button
            onClick={() => toggleFAQ(2)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-semibold text-slate-900">
              How long does delivery take?
            </span>
            <span className="text-orange-500 text-xl">
              {openIndex === 2 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 2 && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
              Delivery time depends on the product and destination. Usually, it takes 5–7 days for goods to reach our warehouse and 2–3 days to load and ship after inspection.
            </div>
          )}
        </div>

        {/* FAQ Item 4 */}
        <div className="border border-slate-200 rounded-xl mb-4 bg-white">
          <button
            onClick={() => toggleFAQ(3)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-semibold text-slate-900">
              Do you offer quality inspection?
            </span>
            <span className="text-orange-500 text-xl">
              {openIndex === 3 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 3 && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
              Yes, our inspection department checks every product for quality, color, and specifications before shipment.
            </div>
          )}
        </div>

        {/* FAQ Item 5 */}
        <div className="border border-slate-200 rounded-xl bg-white mb-4">
          <button
            onClick={() => toggleFAQ(4)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-semibold text-slate-900">
              How can I make a payment?
            </span>
            <span className="text-orange-500 text-xl">
              {openIndex === 4 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 4 && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
              Once you confirm the product, delivery date, and freight charges, you can make the payment through our secure banking channels.
            </div>
          )}
        </div>

        <div className="border border-slate-200 rounded-xl bg-white mb-4">
          <button
            onClick={() => toggleFAQ(5)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-semibold text-slate-900">
              Can I track my shipment?
            </span>
            <span className="text-orange-500 text-xl">
              {openIndex === 5 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 5 && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
              Yes, after dispatch, we share a tracking number so you can monitor your shipment status anytime.
            </div>
          )}
        </div>

        <div className="border border-slate-200 rounded-xl bg-white mb-4">
          <button
            onClick={() => toggleFAQ(6)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-semibold text-slate-900">
              How do I contact customer support?
            </span>
            <span className="text-orange-500 text-xl">
              {openIndex === 6 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 6 && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
              You can reach our customer care team by phone or email. We’re available to assist you with any questions or issues.
            </div>
          )}
        </div>

        <div className="border border-slate-200 rounded-xl bg-white mb-4">
          <button
            onClick={() => toggleFAQ(7)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-semibold text-slate-900">
              Return & Exchange Agreement
            </span>
            <span className="text-orange-500 text-xl">
              {openIndex === 7 ? "−" : "+"}
            </span>
          </button>
          {openIndex === 7 && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
              We aim to ensure every customer is satisfied with their order.
If there is any issue with the product you receive, please review our return and exchange policy below:<br/>
<p>
    1.	Return Request:<br/>
Customers must inform us within 3 days of receiving the goods if there are any problems such as damage, wrong item, or quality issues.
</p>
<p>2.	Condition of Goods:<br/>
Returned products must be unused, unopened, and in their original packaging.
</p>

<p>3.	Inspection Process:<br/>
Once the returned goods are received, our inspection department will check the condition and verify the issue.

</p>
            </div>
          )}
        </div>

      </section>



    </div>
  );
}
