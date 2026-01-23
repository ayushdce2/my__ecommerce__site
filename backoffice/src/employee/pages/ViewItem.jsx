import React, { useEffect, useState } from "react";
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';
import useViewCategory from "../hook/useViewCategory.js"

const LIMIT = 5;

const initialForm = {
  pname: "",
  pprice: "",
  pstock: "",
  categoryID: "",
  pdescription:"",
  platest:"",
  pcategory:""
};
        const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }
const ViewItem = () => {
  const {allCategories} = useViewCategory();

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
      categoryID: product.category,
      pdescription:product.pdescription,
      platest:product.platest,
      pcategory:product.pcategory
    });
    setShowEdit(true);
  };

  const updateProduct = async () => {
    try{
  const updateProdStatus = await  API.put(
  `employee/product/update/${editingId}`,form,
  headers
);

// console.log(updateProdStatus,"updateProdStatus")
  
    //   body: JSON.stringify(form)
    

    setShowEdit(false);
    fetchProducts();
    }catch(error){
      console.log(error,"error")
      error.status==400 && handleError(error.response.data.error.details[0].message)
      error.status==409 && handleError(error.response.data.message);
      error.status==500 && handleError(error.response.data.error.codeName);
    }
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
          {
            allCategories && allCategories.map((data,index)=>{
              return <>
              <option>{data.categoryname}</option>
                
              </>
            })
          }
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
              <th className="px-6 py-4">Latest</th>
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {console.log(products,"products")}
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            ) : (products.length !=0 ? (
              products?.map((p) => (
                <tr
                  key={p._id}
                  className="border-b border-slate-700 hover:bg-slate-800"
                >
                  <td className="px-6 py-4">{p.pname}</td>
                  <td className="px-6 py-4 text-center">{p.pcategory}</td>
                  <td className="px-6 py-4 text-center">Rs. {p.pprice}</td>
                  <td className="px-6 py-4 text-center">{p.pstock}</td>
                  <td className="px-6 py-4 text-center">{p.pdescription}</td>
                  <td className="px-6 py-4 text-center">{p.platest}</td>
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
            ):<tr><td colSpan={7} className="p-5 text-center"><p className="text-3xl text-gray-200">No Data Found</p></td></tr>)}
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

            {/* {["pname", "pprice", "pstock","pdescription","platest"].map((data,index) => ( */}
              {/* <> */}
              <div>
              <label>Product Name</label>
              <input
                // key={field}
                placeholder="Product Name"
                className="w-full bg-slate-800 px-3 py-2 rounded mb-3"
                value={form.pname}
                onChange={(e) =>
                  setForm({ ...form, "pname": e.target.value })
                }
              />
              </div>
         
              <div>
              <label>Price</label>
              <input
                // key={field}
                placeholder="Price"
                className="w-full bg-slate-800 px-3 py-2 rounded mb-3"
                value={form.pprice}
                onChange={(e) =>
                  setForm({ ...form, "pprice": e.target.value })
                }
              />
              </div>
              <div>
              <label>Stock</label>
              <input
                // key={field}
                placeholder="Stock"
                className="w-full bg-slate-800 px-3 py-2 rounded mb-3"
                value={form.pstock}
                onChange={(e) =>
                  setForm({ ...form, "pstock": e.target.value })
                }
              />
              </div>
              <div>
              <label>Description</label>
              <input
                // key={field}
                placeholder="Description"
                className="w-full bg-slate-800 px-3 py-2 rounded mb-3"
                value={form.pdescription}
                onChange={(e) =>
                  setForm({ ...form, "pdescription": e.target.value })
                }
              />
              </div>
              <div>
              <label>Latest</label>
              {console.log(form.platest,"<===============form.platest")}
            <select value={form.platest} className="w-full bg-slate-800 px-3 py-2 rounded mb-3" onChange={(e) =>
                  setForm({ ...form, "platest": e.target.value })
                }>
                <option value="Yes">Yes</option>
                <option value="NO">No</option>
              </select>
              </div>
            <input
                // key={field}
                type="hidden"
                placeholder="category ID"
                className="w-full bg-slate-800 px-3 py-2 rounded mb-3"
                value={form.categoryID}
                onChange={(e) =>
                  setForm({ ...form, "categoryID": e.target.value })
                }
              />
              <div className="flex flex-col mb-4">
                <label>Category</label>
              <select
          className="bg-slate-800 px-4 py-2 rounded"
          value={form.pcategory}
          onChange={(e) => {
            setForm({ ...form, "pcategory": e.target.value });

          }}
        >
          <option>Choose</option>
          {
            allCategories && allCategories.map((data,index)=>{
              return <>
              <option>{data.categoryname}</option>
                
              </>
            })
          }
        </select>
        </div>
              
              {/* </> */}
            {/* // ))} */}

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


