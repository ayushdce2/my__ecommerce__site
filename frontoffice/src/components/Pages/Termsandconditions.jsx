import React from "react";

const Termsandconditions = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0b1e3c] to-[#1c2e5a] text-white py-12 sm:py-16 px-4 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Terms <span className="text-orange-400">Conditions</span>
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto">
          Please read these terms carefully before using our platform. By accessing or using our services, you agree to be bound by these terms.
        </p>
      </div>

      {/* Content */}
      <div className="w-[92%] sm:w-[90%] max-w-5xl mx-auto py-6 sm:py-10 space-y-4 sm:space-y-6">

        <Section title="Terms and Conditions for www.wholesalio.in">
          <p><strong>Effective Date:</strong> 1st March, 2026</p>
          <p>
            These Terms and Conditions (“Terms”) govern the use of the website,
            platform, and services operated by wholesalio (“Company”, “we”, “our”, or “us”).
            By registering, accessing, or using this B2B wholesale marketplace,
            all users agree to comply with these Terms.
          </p>
        </Section>

        <Section title="1. Definitions">
          <ul className="list-disc pl-5 space-y-1">
            <li>Platform means the B2B wholesale website and services.</li>
            <li>Buyer means any entity purchasing products.</li>
            <li>Vendor/Seller means any entity listing products.</li>
            <li>Admin means the owner of the Platform.</li>
            <li>Order means a confirmed request by a Buyer.</li>
          </ul>
        </Section>

        <Section title="2. Eligibility">
          <ul className="list-disc pl-5 space-y-1">
            <li>Users must be at least 18 years old.</li>
            <li>Buyers and Vendors must provide valid business details, GST number (if applicable), address, phone number, email address, and any other information requested by the Admin</li>
            <li>The Admin reserves the right to approve, reject, suspend, or terminate any account without prior notice if false or misleading information is provided
</li>
          </ul>
        </Section>

        <Section title="3. Account Registration">
          <ul className="list-disc pl-5 space-y-1">
            <li>Every user is responsible for maintaining the confidentiality of login credentials</li>
                    <li>Users are fully responsible for all activities conducted through their accounts.</li>
                    <li>The Admin may suspend or deactivate any account involved in.
                      <ul className='list-disc pl-5'>
                        <li>Fraudulent activities</li>
                        <li>Fake orders</li>
                        <li>Misrepresentation of products</li>
                        <li>Non-payment</li>
                        <li>Violation of these Terms</li>
                      </ul>
                    </li>
          </ul>
        </Section>

        <Section title="4. Vendor Responsibilities">
          <ul className="list-decimal pl-5 space-y-2">
            <li>
        All product information, descriptions, prices, specifications, certifications,
        images, and stock availability must be accurate and updated.
    </li>

    <li>
        Products listed must comply with all applicable laws and regulations.
    </li>

    <li>
        Vendors shall not list prohibited, counterfeit, illegal, dangerous, or restricted products.
    </li>

    <li>
        Vendors are responsible for:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Product quality</li>
            <li>Packaging</li>
            <li>Timely dispatch</li>
            <li>Warranty and after-sales support</li>
            <li>Compliance with import/export regulations</li>
        </ul>
    </li>

    <li>
        Vendors must fulfill confirmed orders within the promised time.
    </li>

    <li>
        Vendors may not directly contact Buyers outside the Platform to avoid platform fees unless approved by Admin.
    </li>

    <li>
        Vendors are solely liable for any claim, loss, legal action, tax liability, or penalty arising from their products or conduct.
    </li>
          </ul>
        </Section>

        <Section title="5. Buyer Responsibilities">
          <ul className="list-decimal pl-5 space-y-2">
            <li>
        All purchase information and shipping details provided are accurate.
    </li>

    <li>
        Buyers shall verify product details, pricing, minimum order quantity,
        shipping charges, taxes, and delivery timelines before placing an order.
    </li>

    <li>
        Buyers are responsible for making payment within the prescribed time.
    </li>

    <li>
        Buyers shall not misuse the Platform by:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Placing fake or fraudulent orders</li>
            <li>Harassing web operator</li>
            <li>Posting false reviews</li>
            <li>Attempting unauthorized access</li>
        </ul>
    </li>

    <li>
        Buyers are responsible for complying with any import, licensing, or
        local regulatory requirements applicable to the purchased goods.
    </li>
          </ul>
        </Section>

        <Section title="6. Orders and Acceptance">
          <ul className="list-decimal pl-5 space-y-2">
            <li>
        All orders placed by Buyers are subject to acceptance by admin and the Vendor.
    </li>

    <li>
        An order is considered confirmed only after:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>The Vendor accepts the order, and verified by admin.</li>
            <li>Payment is received or approved.</li>
        </ul>
    </li>

    <li>
        The Admin reserves the right to cancel or refuse any order if:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Product is unavailable</li>
            <li>Incorrect price is displayed</li>
            <li>Fraud is suspected</li>
            <li>Payment fails</li>
            <li>Legal or regulatory issues arise</li>
        </ul>
    </li>
          </ul>
        </Section>

        <Section title="7. Pricing and Payment">
          <ul className="list-decimal pl-5 space-y-2">
           <li>
        All prices displayed are subject to change without notice.
    </li>

    <li>
        Prices may be shown exclusive or inclusive of GST, taxes, shipping,
        customs duty, or other charges depending on the product listing.
    </li>

    <li>
        Buyers are responsible for all applicable taxes, customs duties,
        freight, and additional charges.
    </li>

    <li>
        The Platform may charge Vendors:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Listing fees</li>
            <li>Subscription fees</li>
            <li>Commission on orders</li>
            <li>Promotional fees</li>
        </ul>
    </li>

    <li>
        Admin reserves the right to revise any fees at any time with prior notice.
    </li>

    <li>
        Payments made through the Platform shall be processed through authorized
        payment gateways and related bank account.
    </li>

    <li>
        The Admin is not responsible for payment gateway failures, bank delays,
        or transaction errors beyond its control.
    </li>
          </ul>
        </Section>

        <Section title="8. Shipping and Delivery">
          <ul className="list-decimal pl-5 space-y-2">
           <li>
        Delivery timelines are estimates only and may vary.
    </li>

    <li>
        Vendors are responsible for dispatching goods within the committed period.
    </li>

    <li>
        Risk of loss or damage transfers to the Buyer upon delivery to the Buyer
        or logistics provider.
    </li>

    <li>
        The Platform is not liable for delays caused by:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Courier companies</li>
            <li>Customs clearance</li>
            <li>Natural disasters</li>
            <li>Government restrictions</li>
            <li>Transportation issues</li>
        </ul>
    </li>
          </ul>
        </Section>

        <Section title="9. Return & Refund">
          <ul className="list-decimal pl-5 space-y-2">
            <li>
        Return and refund eligibility depends on the Vendor’s individual policy unless otherwise stated.
    </li>

    <li>
        Buyers must report damaged, defective, or incorrect goods within 48 hours of delivery.
    </li>

    <li>
        Refunds, if approved by admin after confirming from vendor, shall be processed within 15 business days.
    </li>

    <li>
        Orders cannot be cancelled after dispatch unless approved by the Vendor.
    </li>

    <li>
        Admin may mediate disputes between Buyers and Vendors but is not obligated to provide compensation.
    </li>
          </ul>
        </Section>

        <Section title="10. Commission and Platform Charges">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        The Admin may deduct platform commission and other applicable charges before releasing payment to Vendors.
    </li>

    <li>
        Vendors agree that the Admin may hold payments temporarily in case of:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Buyer complaints</li>
            <li>Pending verification</li>
            <li>Suspected fraud</li>
            <li>Policy violation</li>
        </ul>
    </li>
          </ul>
        </Section>
        <Section title="11. Prohibited Activities">
          <ul className="list-disc pl-5 space-y-1">
            <li>Upload false or misleading information</li>
    <li>Sell counterfeit or prohibited products</li>
    <li>Copy or misuse content from the Platform</li>
    <li>Interfere with website security or operations</li>
    <li>Send spam or malicious code</li>
    <li>Use the Platform for unlawful purposes</li>
    <li>Circumvent payment systems or commissions</li>
          </ul>
          <p className="mt-3">
    The Admin reserves the right to remove content, suspend accounts, or take legal action.
</p>
        </Section>

        <Section title="12. Intellectual Property">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        All logos, text, website design, trademarks, graphics, software, and content belong to the Admin or respective owners.
    </li>

    <li>
        Users may not copy, reproduce, distribute, or use any content without written permission.
    </li>

    <li>
        Vendors grant the Platform permission to use their product images, descriptions,
        company name, and trademarks for marketing and promotional purposes.
    </li>
            </ul>
        </Section>

        <Section title="13. Reviews and Ratings">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        Buyers may leave reviews and ratings based on actual transactions.
    </li>

    <li>
        Reviews must be honest and not contain abusive, defamatory, or misleading content.
    </li>

    <li>
        The Admin may remove any review that violates these Terms.
    </li>
            </ul>
        </Section>

        <Section title="14. Limitation of Liability">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        The Platform acts only as an intermediary between Buyers and Vendors.
    </li>

    <li>
        The Admin will be responsible only for:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Product quality</li>
            <li>Timely delivery</li>
            <li>Vendor product sourcing</li>
            <li>Vendor marketing within India through different platforms (online or offline)</li>
        </ul>
    </li>

    <li>
        To the maximum extent permitted by law, the Admin shall not be liable for:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Direct or indirect loss</li>
            <li>Business interruption</li>
            <li>Loss of profits</li>
            <li>Damages arising from transactions between Buyers and Vendors</li>
        </ul>
    </li>

    <li>
        The maximum liability of the Admin, if any, shall not exceed the amount of service fees paid to the Platform for the relevant transaction.
    </li>
            </ul>
        </Section>

        <Section title="15. Indemnification">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        Users agree to indemnify and hold harmless the Admin, employees, directors, agents, and affiliates from any claim, demand, loss, liability, or expense arising out of:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Violation of these Terms</li>
            <li>Product defects</li>
            <li>Misrepresentation</li>
            <li>Legal non-compliance</li>
            <li>Third-party claims</li>
        </ul>
    </li>
            </ul>
        </Section>

        <Section title="16. Suspension and Termination">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        The Admin may suspend or terminate any account immediately if:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>These Terms are violated</li>
            <li>Fraud or illegal activity is suspected</li>
            <li>Required documents are not provided</li>
            <li>Repeated complaints are received</li>
        </ul>
    </li>

    <li>
        Upon termination, the Admin may remove listings, withhold pending payments, and block future access.
    </li>
            </ul>
        </Section>

        <Section title="17. Privacy and Data Usage">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        By using the Platform, users consent to collection and use of business and personal data for operational purposes.
    </li>

    <li>
        The Platform may share data with payment gateways, logistics providers, and legal authorities when necessary.
    </li>

    <li>
        Users must maintain confidentiality of any business information received through the Platform.
    </li>
            </ul>
        </Section>

        <Section title="18. Force Majeure">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        The Admin shall not be liable for failure or delay caused by events beyond reasonable control, including:
        <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Natural disasters</li>
            <li>War</li>
            <li>Pandemic</li>
            <li>Strikes</li>
            <li>Government actions</li>
            <li>Internet failure</li>
            <li>Supply chain disruption</li>
        </ul>
    </li>
            </ul>
        </Section>

        <Section title="19. Governing Law and Jurisdiction">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        These Terms shall be governed by the laws of India.
    </li>

    <li>
        Any dispute shall first be attempted to be resolved amicably.
    </li>

    <li>
        If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts at [Gautam Budh Nagar, Uttar Pradesh].
    </li>
            </ul>
        </Section>

        <Section title="20. Amendments">
          <ul className="list-disc pl-5 space-y-1">
           <li>
        The Admin reserves the right to modify these Terms at any time.
    </li>

    <li>
        Updated Terms shall become effective immediately upon publication on the Platform.
    </li>
            </ul>
        </Section>

        <Section title="21. Contact Information">
          <ul className="list-disc pl-5 space-y-1">
            <li>
        For any questions, disputes, or legal notices, contact through our website.
    </li>
            </ul>
        </Section>

      </div>
    </div>
  );
};

/* Section Card */
const Section = ({ title, children }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-gray-800">
        {title}
      </h2>
      <div className="text-xs sm:text-sm text-gray-600 space-y-2 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Termsandconditions;