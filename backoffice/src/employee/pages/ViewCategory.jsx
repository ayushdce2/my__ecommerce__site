import React, { useEffect, useState } from "react";
import axios from "axios";
import API from '../../utility/axios';
import { uploadToCloudinary } from "../../utility/cloudinary";
import { useAppTheme } from "../../utility/ThemeContext";

const ViewCategory=()=> {
  const { apiloading, setApiLoading } = useAppTheme();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("catpriority");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({ name: "", status: "Active", priority: 0 });
    const [oldImgPublicId, setOldImgPublicId] = useState(null);

  const limit = 5;

  const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }

  const fetchCategories = async () => {
    setLoading(true);
      setApiLoading(true)
    try {
        const params = new URLSearchParams({
  search,
  status: statusFilter,
  sortBy,
  order,
  page,
  limit,
}).toString();
      const { data } = await API.get(`/employee/main/category/view?${params}`, headers);
    //   console.log(data,"<==========data")
      setCategories(data.categories);
      setTotal(data.total);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
        setApiLoading(false)
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [search, statusFilter, sortBy, order, page]);

  const deleteCategory = async (id) => {
    if (!window.confirm("Are you sure to delete this category?")) return;
      setApiLoading(true)
    try {
      await API.delete(`/employee/main/category/delete/${id}`,headers);
      fetchCategories();
        setApiLoading(false)
    } catch (err) {
      console.error(err);
        setApiLoading(false)
    }
  };

  const openEdit = (cat) => {
    // console.log(cat,"<==cat")
    setEditData(cat);
    setOldImgPublicId(cat.imgPublicId)
    setForm({ 
      name: cat.categoryname, 
      status: cat.status, 
      priority: cat.catpriority,
      desc:cat.description,
      imgPublicId:cat.imgPublicId,
      pimage:cat.pimage }); 
    
  };

  const closeEdit = () => {
    setEditData(null);
  };

    const uploadImageToCloud = async (file) => {
    const cloud = await uploadToCloudinary(file);
  
    return {
      pimage: cloud.secure_url,
      imgPublicId: cloud.public_id,
    };
  };

  const updateCategory = async () => {
      setApiLoading(true)
    // console.log(form,"<=============form")
    try {
      let imageUrl = form.pimage;
    let publicId = form.imgPublicId;

    // Upload only if a NEW image was selected
    if (form.pimage instanceof File) {
      const cloudData = await uploadImageToCloud(form.pimage);
      imageUrl = cloudData.pimage;
      publicId = cloudData.imgPublicId;
    }
    form.pimage= imageUrl;
    form.imgPublicId = publicId;
    form.oldImgPublicId=oldImgPublicId;

    // console.log(form,"<========form")
      await API.put(`/employee/main/category/update/${editData._id}`, form,headers);
      
      closeEdit();
      fetchCategories();
        setApiLoading(false)
    } catch (err) {
      console.error(err);
        setApiLoading(false)
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 dark">
      <div className="max-w-5xl mx-auto bg-slate-800 rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">View Categories</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <input
            type="text"
            placeholder="Search categories..."
            className="px-3 py-2 rounded bg-slate-700 placeholder-slate-400 text-white flex-grow min-w-[200px]"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />

          <select
            className="px-3 py-2 rounded bg-slate-700 text-white"
            value={statusFilter}
            onChange={(e) => {
              setPage(1);
              setStatusFilter(e.target.value);
            }}
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select
            className="px-3 py-2 rounded bg-slate-700 text-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="catpriority">Sort by Priority</option>
          </select>

          <select
            className="px-3 py-2 rounded bg-slate-700 text-white"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : categories.length === 0 ? (
          <p className="text-center py-10 text-slate-400">No data found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-600 rounded-lg">
              <thead className="bg-slate-700">
                <tr>
                  <th className="border border-slate-600 px-4 py-2 text-left">Name</th>
                  <th className="border border-slate-600 px-4 py-2 text-left">Status</th>
                  <th className="border border-slate-600 px-4 py-2 text-left">Description</th>
                  <th className="border border-slate-600 px-4 py-2 text-left">Priority</th>
                  <th className="border border-slate-600 px-4 py-2 text-left">Image</th>
                  <th className="border border-slate-600 px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* {console.log(categories,"<========categories")} */}
                {categories.map((cat) => (
                  <tr key={cat._id} className="odd:bg-slate-800 even:bg-slate-700">
                    <td className="border border-slate-600 px-4 py-2">{cat.categoryname}</td>
                    <td className="border border-slate-600 px-4 py-2">{cat.status}</td>
                    <td className="border border-slate-600 px-4 py-2">{cat.description}</td>
                    
                    <td className="border border-slate-600 px-4 py-2">{cat.catpriority}</td>
                    <td className="border border-slate-600 px-4 py-2"><img src={cat.pimage} className="w-5 h-5 mx-auto" /></td>
                    <td className="border border-slate-600 px-4 py-2 space-x-2">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                        onClick={() => openEdit(cat)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                        onClick={() => deleteCategory(cat._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                page === i + 1 ? "bg-blue-600" : "bg-slate-700 hover:bg-slate-600"
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-slate-800 p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
            <label className="block mb-2">
              Name
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 rounded bg-slate-700 text-white"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
<div className="flex gap-2 mb-2">
            <label className="">
              Status
              <select
                className="w-full mt-1 px-3 py-2 rounded bg-slate-700 text-white"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </label>

            <label className="basis-2/4">
              Priority
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 rounded bg-slate-700 text-white"
                value={form.priority}
                onChange={(e) =>
                  setForm({ ...form, priority: parseInt(e.target.value) || 0 })
                }
              />
            </label>
            </div>
            <label className="block mb-2">
              Description
              <textarea 
                // type="number"
                className="w-full mt-1 px-3 py-2 rounded bg-slate-700 text-white"
                value={form.desc}
                onChange={(e) =>
                  setForm({ ...form, desc: e.target.value })
                }
              ></textarea >
            </label>
             {/* IMAGE EDIT */}
              <label className="text-gray-300">Image</label>
              <label className="cursor-pointer flex gap-3 mb-4">
                <img
                  src={form.pimage instanceof File
    ? URL.createObjectURL(form.pimage)
    : form.pimage}
                  className="h-24 w-24 rounded object-cover border"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="cursor-pointer border text-gray-400"
                  hidden
                  onChange={(e) =>
                  setForm({ ...form, pimage: e.target.files[0] })
                }
                />
                <img
                  src="/images/uploadimage.jpg"
                  className="h-24 w-24 rounded object-cover border"
                />
              </label>

            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
                onClick={closeEdit}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                onClick={updateCategory}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewCategory;