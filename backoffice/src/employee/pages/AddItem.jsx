import React from 'react';
import useAddItem from '../hook/useAddItem';

const AddItem = () => {
    const {handleChange, handleSubmit} = useAddItem();
  return (
    <>
    <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs'>Add Item</p>
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
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nike Air Max"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Price ($)
            </label>
            <input
              type="number"
              name="pprice"
              onChange={handleChange}
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
              name="pcategory"
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option>Shoes</option>
              <option>Clothing</option>
              <option>Electronics</option>
            </select>
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Stock Quantity
            </label>
            <input
              type="number"
              name="pstock"
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="50"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Description
          </label>
          <textarea
            name="pdescription"
            onChange={handleChange}
            rows="4"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="Product details..."
          />
        </div>

        {/* Image Upload */}
        <div className="mt-6">
          <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Product Image
          </label>
          <input
            type="file"
            // name="pimage"
            onChange={handleChange}
            className="block w-full text-sm text-slate-600 dark:text-slate-300
              file:mr-4 file:rounded-lg file:border-0
              file:bg-blue-600 file:px-4 file:py-2
              file:text-white hover:file:bg-blue-700"
          />
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
            className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Save Product
          </button>
        </div>
      </form>
    
    </div>
</div>

 
    </>
  )
}

export default AddItem