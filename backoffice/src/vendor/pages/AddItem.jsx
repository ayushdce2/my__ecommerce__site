import React from 'react';
import useAddItem from '../hook/useAddItem';
import useViewCategory from "../hook/useViewCategory";

const AddItem = () => {
    const {handleChange, handleSubmit,product, CategoryInfoPopup, SetCategoryInfoPopup} = useAddItem();
    const {allCategories,loading} = useViewCategory();
    if(loading){
      return "Categories are loading"
    }
    // console.log(product,"<===========allCategories")

  return (
    <>
    <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs'>Add Product</p>
        <p className=' px-2  font-normal italic tracking-wider text-sm text-shadow-2xs'>You can add upto 4 categories only</p>
    </div>
<div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-4xl">
    
<div className='p-1'>
     <form
        onSubmit={handleSubmit}
        className="  "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Product Name
            </label>
            <input
              type="text"
              name="pname"
              onChange={handleChange}
              value={product.pname}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nike Air Max"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Price (RMB)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              name="pprice"
              onChange={handleChange}
              value={product.pprice}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="199.99"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Category
            </label>
            <select
              name="categoryID"
              onChange={handleChange}
              value={product.categoryID}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              {
                allCategories && allCategories.map((data,index)=>{
                  return <>
                    <option value={data._id}>{data.categoryname}</option>
                  </>
                })
              }
            
            </select>
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Minimum Stock Quantity
            </label>
            <input
              type="number"
              name="pstock"
              onChange={handleChange}
              value={product.pstock}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="50"
            />
          </div>

          {/* <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Size
            </label>
            <input
              type="text"
              name="psize"
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="small, large, XL, XXL"
              required
            />
          </div>

          <div className=''>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Product Color
            </label>
            <div className='flex gap-4 mt-4'>
            <label className='flex items-center gap-1'>
              <input type='checkbox' name='pcolor1'/>
              <span className='inline-block w-4 h-4 bg-[red]'></span>
              <span className='text-sm text-slate-700 dark:text-slate-300'>Red</span>
            </label>
            <label className='flex items-center gap-1'>
              <input type='checkbox' name='pcolor2'/>
              <span className='inline-block w-4 h-4 bg-[green]'></span>
              <span className='text-sm text-slate-700 dark:text-slate-300'>Green</span>
            </label>
            <label className='flex items-center gap-1'>
              <input type='checkbox' name='pcolor3'/>
              <span className='inline-block w-4 h-4 bg-[blue]'></span>
              <span className='text-sm text-slate-700 dark:text-slate-300'>Blue</span>
            </label>
            </div>
            
          
          </div> */}
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Description
          </label>
          <textarea
            name="pdescription"
            onChange={handleChange}
            value={product.pdescription}
            rows="4"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="Product details..."
          />
        </div>
<div className='flex justify-between items-center'>

  {/* Image Upload */}
        <div className="mt-6 ">
          
          <input
            type="file"
            name="pimage"
            onChange={handleChange}
            // value={product.pimage}
            accept="image/*"
            className="block w-full text-sm text-slate-600 dark:text-slate-300
              file:mr-4 file:rounded-lg file:border-0
              file:bg-blue-600 file:px-4 file:py-2
              file:text-white hover:file:bg-blue-700"
          />
        </div>


  {/* latest */}
          {/* <div className='flex gap-2 items-center'>
            <label className="shrink-0 block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Latest 
          </label>
            <select
              name="platest"
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="" >Choose</option>
             
              <option>Yes</option>
              <option>No</option>
              
            </select>
          </div> */}

</div>
        

        {/* Actions */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            type="reset"
            className="rounded-lg border border-slate-300 dark:border-slate-600 px-6 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 cursor-pointer"
          >
            Save Product
          </button>
        </div>
      </form>
    
    </div>
</div>
{
  CategoryInfoPopup && (
    <>

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-70">
        
        {/* Modal Container */}
        <div className="bg-white w-[90%] max-w-4xl max-h-[90vh] rounded-xl shadow-lg overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="p-4 border-b font-bold text-lg text-center">
                Terms and Conditions
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto text-sm space-y-4">

                <p><strong>Terms and Conditions for www.wholesalio.in</strong></p>
                <p><strong>Effective Date:</strong> 1st March, 2026</p>

                <p>
                    These Terms and Conditions (“Terms”) govern the use of the website, platform, and services operated by wholesalio (“Company”, “we”, “our”, or “us”). By registering, accessing, or using this B2B wholesale marketplace, all buyers, vendors, suppliers, distributors, and other users agree to comply with these Terms.
                </p>

                <hr />

                <p><strong>1. Definitions</strong></p>
                <ul className="list-disc pl-10">
                    <li>Platform means the B2B wholesale website and related services.</li>
                    <li>Buyer means any individual, company, trader, or organization purchasing products through the Platform.</li>
                    <li>Vendor/Seller means any individual, company, manufacturer, supplier, importer, exporter, or distributor listing products or services on the Platform.</li>
                    <li>Admin means the owner of the Platform.</li>
                    <li>Order means a confirmed request placed by a Buyer for products listed by a Vendor</li>
                </ul>

                <p><strong>2. Eligibility</strong></p>
                <ul className="list-disc pl-10">
                    <li>Users must be at least 18 years old.</li>
                    <li>Buyers and Vendors must provide valid business details, GST number (if applicable), address, phone number, email address, and any other information requested by the Admin</li>
                    <li>The Admin reserves the right to approve, reject, suspend, or terminate any account without prior notice if false or misleading information is provided</li>
                </ul>

                <p><strong>3. Account Registration</strong></p>
                <ul className="list-disc pl-10">
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

                <p><strong>4. Vendor Responsibilities</strong></p>
                <p>Vendors agree that</p>
                <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>5. Buyer Responsibilities</strong></p>
                <p>Buyers agree that</p>
                <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>6. Orders and Acceptance</strong></p>
                <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>7. Pricing and Payment</strong></p>
               <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>8. Shipping and Delivery</strong></p>
               <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>9. Return & Refund</strong></p>
                <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>10. Commission and Platform Charges</strong></p>
                <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>11. Prohibited Activities</strong></p>
                <ul className="list-disc pl-10 space-y-2">
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

                <p><strong>12. Intellectual Property</strong></p>
                <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>13. Reviews and Ratings</strong></p>
                <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>14. Limitation of Liability</strong></p>
             <ul className="list-decimal pl-10 space-y-2">
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

                <p><strong>15. Indemnification</strong></p>
                <ul className="list-disc pl-10 space-y-2">
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

                <p><strong>16. Suspension and Termination</strong></p>
                <ul className="list-disc pl-10 space-y-2">
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

<p><strong>17. Privacy and Data Usage</strong></p>
<ul className="list-decimal pl-10 space-y-2">
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
<p><strong>18. Force Majeure</strong></p>
<ul className="list-disc pl-10 space-y-2">
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

<p><strong>19. Governing Law and Jurisdiction</strong></p>
<ul className="list-decimal pl-10 space-y-2">
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

<p><strong>20. Amendments</strong></p>
<ul className="list-disc pl-10 space-y-2">
    <li>
        The Admin reserves the right to modify these Terms at any time.
    </li>

    <li>
        Updated Terms shall become effective immediately upon publication on the Platform.
    </li>
</ul>

<p><strong>21. Contact Information</strong></p>
<ul className="list-disc pl-10 space-y-2">
    <li>
        For any questions, disputes, or legal notices, contact through our website.
    </li>
</ul>

            </div>

            {/* Footer Button */}
            <div className="p-4 border-t flex justify-center">
                <button
                    onClick={() => SetCategoryInfoPopup(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                >
                    I Agree
                </button>
            </div>

        </div>
    </div>

    </>
  )
}
 
    </>
  )
}

export default AddItem