import React, { useEffect, useState } from "react";
import axios from "axios";
import API from '../../utility/axios';

const ViewCategory=()=> {
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

  const limit = 5;

  const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }

  const fetchCategories = async () => {
    setLoading(true);
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
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [search, statusFilter, sortBy, order, page]);

  const deleteCategory = async (id) => {
    if (!window.confirm("Are you sure to delete this category?")) return;
    try {
      await API.delete(`/employee/main/category/delete/${id}`,headers);
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (cat) => {
    setEditData(cat);
    setForm({ name: cat.categoryname, status: cat.status, priority: cat.catpriority,desc:cat.description });
    
  };

  const closeEdit = () => {
    setEditData(null);
  };

  const updateCategory = async () => {
    console.log(form,"<=============form")
    try {
      await API.put(`/employee/main/category/update/${editData._id}`, form,headers);
      
      closeEdit();
      fetchCategories();
    } catch (err) {
      console.error(err);
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
                  <th className="border border-slate-600 px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat._id} className="odd:bg-slate-800 even:bg-slate-700">
                    <td className="border border-slate-600 px-4 py-2">{cat.categoryname}</td>
                    <td className="border border-slate-600 px-4 py-2">{cat.status}</td>
                    <td className="border border-slate-600 px-4 py-2">{cat.description}</td>
                    
                    <td className="border border-slate-600 px-4 py-2">{cat.catpriority}</td>
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

            <label className="block mb-2">
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

            <label className="block mb-4">
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
            <label className="block mb-4">
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