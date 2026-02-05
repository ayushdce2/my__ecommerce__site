import React from "react";

export default function OrderGuide() {
  return (
    <div className="bg-slate-100 text-slate-800">

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Order <span className="text-orange-500">Guide</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            Simple steps to place your order, track delivery, and enjoy a
            smooth shopping experience with MyShop.
          </p>
        </div>
      </section>
{/* Steps – Vertical */}
<section className="max-w-5xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-12">
    How Ordering Works
  </h2>

  <div className="space-y-6">

    {[
      {
        step: "01",
        title: "You can choose your product and place an order on Wholesalio.",
        desc: "If you have any questions about a product, please call us or send us an email — our team is happy to help!"
      },
      {
        step: "02",
        title: "Stock Availability",
        desc: "Our purchase department will confirm stock availability, delivery date  with the manufacturer within 24 hours."
      },
      {
        step: "03",
        title: "Customer confirms the product",
        desc: "After the customer confirms the product, delivery date, and freight charges, payment should be made to proceed with the order."
      },
      {
        step: "04",
        title: "Payment is received",
        desc: "After the payment is received, our finance department will verify and confirm the transaction before processing the order."
      },
      {
        step: "05",
        title: "Product Inspection",
        desc: "The product will arrive at our warehouse within 5–7 days. Once it arrives, our inspection department will carefully check the quality, color, and other details.After inspection, we will share the report and product information with the customer. Upon the customer’s confirmation, we will prepare and load the shipment to the client’s destination within 2–3 days"
      },
      {
        step: "06",
        title: "Shipment Arrives ",
        desc: "Once the shipment arrives at the destination port in India, our logistics team will coordinate customs clearance and delivery arrangements."
      },
      {
        step: "07",
        title: "Goods Arrive ",
        desc: "Once the goods arrive at the destination port warehouse, our team will begin the unloading and inspection process before final delivery."
      }
    ].map((item, i) => (
      <div
        key={i}
        className="flex gap-5 bg-slate-900 text-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition"
      >
        {/* Step Number */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
            {item.step}
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold mb-1">
            {item.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    ))}

  </div>
</section>

 


    

    </div>
  );
}
