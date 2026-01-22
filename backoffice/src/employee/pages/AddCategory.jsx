import React, { useState } from "react";
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';

const AddCategory = () => {
  // Form state
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [catPriority, setCatPriority] = useState("");

        // Reset form
  const resetForm = () => {
    setCategoryName("");
    setDescription("");
    setStatus("Active");
    setImageFile(null);
    setImagePreview(null);
    setErrors({});
    setCatPriority("")
  };

  // Handle image file change & preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setImagePreview(null);
    }
  };

  // Validate form
//   const validate = () => {
//     const newErrors = {};
//     if (!categoryName.trim()) newErrors.categoryName = "Category Name is required";
//     if (!imageFile) newErrors.imageFile = "Category image is required";
//     return newErrors;
//   };



  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // const formErrors = validate();
    // if (Object.keys(formErrors).length > 0) {
    //   setErrors(formErrors);
    //   return;
    // }
    setErrors({});

    // Prepare form data for API or other logic
    const formData = {
      categoryName,
      description,
      status,
      imageFile,
      catPriority
    };

    console.log("Submitting category:", formData);
    
addCategorytoDB(formData)
    
    
  };
  const addCategorytoDB =async(formData)=>{





            const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }

console.log(formData,"actual category")
            try {
                const response = await API.post("employee/product/category/add" ,formData, headers);
                const data = response.data;
                
                handleSuccess(data.message);
                
              
              

   
                console.log(response,"response");
                // await refetch();
                // console.log(finalRefetch,"finalRefetch",refetch)
                console.log(data.status,"data.status");
                // resetForm();
       
            } catch (error) {
                console.log(error, "error", error.status);
                // error.status=="500" && handleError(error.response.data.error.codeName)
                error.status=="400" && handleError(error.response.data.message);
                error.status=="403" && handleError(error.response.data.error.details[0].message);
                error.status=="422" && handleError(error.response.data.message);
                error.status=="409" && handleError(error.response.data.message);
                error.status=="400" && handleError(error.response.data.error.details[0].message);
                
            }
}
  return (
    <>
    <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs'>Add Category</p>
    </div>
    
   
      

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-4xl">
        

        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          {/* Category Name */}
          <div>
            <label
              htmlFor="categoryName"
              className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Category Name
            </label>
            <input
              id="categoryName"
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="e.g. Shoes"
              className={`w-full rounded-md border px-3 py-2
                ${
                  errors.categoryName
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-700"
                }
                bg-white dark:bg-[#0b1220]
                text-slate-800 dark:text-slate-100
                placeholder-slate-400 dark:placeholder-slate-500
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
            />
            {errors.categoryName && (
              <p className="mt-1 text-xs text-red-500">{errors.categoryName}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short description about this category..."
              className="w-full rounded-md border border-slate-300 dark:border-slate-700
                bg-white dark:bg-[#0b1220]
                px-3 py-2 text-slate-800 dark:text-slate-100
                placeholder-slate-400 dark:placeholder-slate-500
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Image */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Category Image
            </label>

            <div className="flex items-center gap-3">
              <label className="inline-flex cursor-pointer items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              <span className="text-sm text-slate-600 dark:text-slate-400">
                {imageFile ? imageFile.name : "No file chosen"}
              </span>
            </div>

            {errors.imageFile && (
              <p className="mt-1 text-xs text-red-500">{errors.imageFile}</p>
            )}

            {/* Image preview */}
            {imagePreview && (
              <div className="mt-3">
                <img
                  src={imagePreview}
                  alt="Category Preview"
                  className="max-h-40 rounded-md border border-slate-300 dark:border-slate-700"
                />
              </div>
            )}
          </div>
<div className="flex justify-around">
          {/* Status */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="status"
              className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700
                bg-white dark:bg-[#0b1220]
                px-3 py-2 text-slate-800 dark:text-slate-100
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="status"
              className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Priority
            </label>
            <input
              id=""
              type="text"
              value={catPriority}
              onChange={(e) => setCatPriority(e.target.value)}
              placeholder="e.g. 1"
              className={`w-full rounded-md border px-3 py-2
                ${
                  errors.catPriority
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-700"
                }
                bg-white dark:bg-[#0b1220]
                text-slate-800 dark:text-slate-100
                placeholder-slate-400 dark:placeholder-slate-500
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
            />

          </div>
</div>
          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={resetForm}
              className="rounded-md border border-slate-300 dark:border-slate-600
                px-5 py-2 text-slate-700 dark:text-slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md bg-blue-600 px-5 py-2
                text-white font-medium
                hover:bg-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save Category
            </button>
          </div>
        </form>
      </div>
 
    </>
  );
};

export default AddCategory;
