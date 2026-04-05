import React from 'react';
import useAddBanner from '../hook/useAddBanner';

const AddBanner = () => {
    const {handleChange,handleSubmit}= useAddBanner();
  return (
    <>
    <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs'>Add Banner</p>
    </div>
<div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-4xl">
    
<div className='p-1'>
    
    <form
        onSubmit={handleSubmit}
        className=""
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner Title */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Banner Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Big Sale 50% Off"
              
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Limited time offer"
            />
          </div>

          {/* Redirect Link */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Redirect URL
            </label>
            <input
              type="url"
              name="link"
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/sale"
            />
          </div>

          {/* Banner Position */}
          {/* <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Banner Position
            </label>
            <select
              name="position"
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="homepage">Homepage</option>
              <option value="category">Category Page</option>
              <option value="product">Product Page</option>
            </select>
          </div> */}

          {/* Status */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Status
            </label>
            <select
              name="status"
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Banner Image */}
        <div className="mt-6">
          <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Banner Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="block w-full text-sm text-slate-600 dark:text-slate-300
              file:mr-4 file:rounded-lg file:border-0
              file:bg-blue-600 file:px-4 file:py-2
              file:text-white hover:file:bg-blue-700"
          />
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Recommended size: 1920×600px
          </p>
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
            Save Banner
          </button>
        </div>
      </form>
    </div>
</div>
    </>
  )
}

export default AddBanner