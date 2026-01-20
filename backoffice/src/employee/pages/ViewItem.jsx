import React, { useEffect, useState } from "react";
import API from '../../utility/axios.jsx';

const LIMIT = 5;

const initialForm = {
  pname: "",
  pprice: "",
  pstock: "",
  pcategory: "",
  pdescription:""
};
        const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }
const ViewItem = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [priceSort, setPriceSort] = useState("");
  const [stockSort, setStockSort] = useState("");

  // Edit modal state
  const [showEdit, setShowEdit] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(initialForm);

  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    fetchProducts();
  }, [page, search, category, priceSort, stockSort]);

  const fetchProducts = async () => {
    setLoading(true);

    let sortBy = "";
    let order = "";
    if (priceSort) {
      sortBy = "pprice";
      order = priceSort;
    } else if (stockSort) {
      sortBy = "pstock";
      order = stockSort;
    }

    const params = new URLSearchParams({
      page,
      limit: LIMIT,
      search,
      ...(category !== "All" && { category }),
      ...(sortBy && { sortBy, order }),
    });




const res = await API.get(
  `employee/product/view?${params}`,
  headers
);
const data = res.data;

   

    setProducts(data.data);
    setTotal(data.total);
    setLoading(false);
    console.log(products,"<==============products")
  };

  /* ---------------- EDIT ---------------- */
  const openEditModal = (product) => {
    setEditingId(product._id);
    setForm({
      pname: product.pname,
      pprice: product.pprice,
      pstock: product.pstock,
      pcategory: product.pcategory,
      pdescription:product.pdescription
    });
    setShowEdit(true);
  };

  const updateProduct = async () => {
  await  API.put(
  `employee/product/update/${editingId}`,form,
  headers
)
  
    //   body: JSON.stringify(form)
    

    setShowEdit(false);
    fetchProducts();
  }

  /* ---------------- DELETE ---------------- */
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;



      const productDeleteStatus = await  API.delete(
  `employee/product/delete/${id}`,
  headers
)
console.log(productDeleteStatus,"productDeleteStatus")

    fetchProducts();
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-semibold mb-4">View Products</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
        <input
          placeholder="Search by name"
          className="bg-slate-800 px-4 py-2 rounded"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          className="bg-slate-800 px-4 py-2 rounded"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          <option>All</option>
          <option>Shoes</option>
          <option>Clothing</option>
          <option>Electronics</option>
        </select>

        <select
          className="bg-slate-800 px-4 py-2 rounded"
          value={priceSort}
          onChange={(e) => {
            setPriceSort(e.target.value);
            setStockSort("");
            setPage(1);
          }}
        >
          <option value="">Sort Price</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>

        <select
          className="bg-slate-800 px-4 py-2 rounded"
          value={stockSort}
          onChange={(e) => {
            setStockSort(e.target.value);
            setPriceSort("");
            setPage(1);
          }}
        >
          <option value="">Sort Stock</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-slate-900 rounded-xl overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-600">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4">Desc</th>
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr
                  key={p._id}
                  className="border-b border-slate-700 hover:bg-slate-800"
                >
                  <td className="px-6 py-4">{p.pname}</td>
                  <td className="px-6 py-4 text-center">{p.pcategory}</td>
                  <td className="px-6 py-4 text-center">${p.pprice}</td>
                  <td className="px-6 py-4 text-center">{p.pstock}</td>
                  <td className="px-6 py-4 text-center">{p.pdescription}</td>
                  <td className="px-6 py-4 text-center">{p.pimage}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => openEditModal(p)}
                      className="bg-blue-600 px-3 py-1 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="bg-red-600 px-3 py-1 rounded text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded ${
              page === i + 1
                ? "bg-blue-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-slate-900 p-6 rounded-xl w-96">
            <h2 className="text-lg font-semibold mb-4">Edit Product</h2>

            {["pname", "pprice", "pstock", "pcategory","pdescription"].map((field) => (
              <>
              <label>{field}</label>
              <input
                key={field}
                placeholder={field}
                className="w-full bg-slate-800 px-3 py-2 rounded mb-3"
                value={form[field]}
                onChange={(e) =>
                  setForm({ ...form, [field]: e.target.value })
                }
              />
              </>
            ))}

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowEdit(false)}
                className="bg-slate-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={updateProduct}
                className="bg-blue-600 px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewItem;


