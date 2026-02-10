import { useEffect, useState } from "react";
import API from '../../utility/axios';

const PAGE_SIZE = 5;

const AllLeads=()=> {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [productFilter, setProductFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    fetchLeads();
  }, [page, productFilter, sortOrder]);

    const headers = {
        // headers: {
            "Authorization": localStorage.getItem("token"),
        // }
    }

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const res = await API.get("/admin/customer/leads", {
        params: {
          page,
          limit: PAGE_SIZE,
          product: productFilter,
          sort: sortOrder,
        },
        headers,
      });
console.log(res.data,"<================res.data")
      setLeads(res.data.leads);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error("Failed to fetch leads", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] text-white p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Customer Leads</h1>
        <p className="text-gray-400 text-sm">
          Manage customer inquiries and product leads
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by product name"
          value={productFilter}
          onChange={(e) => {
            setPage(1);
            setProductFilter(e.target.value);
          }}
          className="bg-[#020617] border border-gray-700 rounded px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-[#020617] border border-gray-700 rounded px-4 py-2 w-full md:w-40"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-800">
        <table className="w-full text-sm">
          <thead className="bg-[#020617] text-gray-400">
            <tr>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Contact</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Qty</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-400">
                  Loading...
                </td>
              </tr>
            ) : leads?.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-400">
                  No leads found
                </td>
              </tr>
            ) : (
              leads?.map((lead) => (
                <tr
                  key={lead._id}
                  className="border-t border-gray-800 hover:bg-[#020617]/70 transition"
                >
                  <td className="px-4 py-3">
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-gray-400 text-xs">
                      {lead.email}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div>{lead.phone}</div>
                  </td>

                  <td className="px-4 py-3 text-gray-300">
                    {lead.address}
                  </td>

                  <td className="px-4 py-3">
                    <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">
                      {lead.productName}
                    </span>
                  </td>

                  <td className="px-4 py-3">{lead.quantity}</td>

                  <td className="px-4 py-3">
                    RMB {lead.price}
                  </td>

                  <td className="px-4 py-3 text-gray-400">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-800 rounded disabled:opacity-40"
        >
          Prev
        </button>

        <span className="text-sm text-gray-400">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-800 rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllLeads