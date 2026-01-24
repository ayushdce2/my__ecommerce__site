import { useEffect, useState } from "react";
import API from "../../utility/axios";
import { uploadToCloudinary } from "../../utility/cloudinary";
import { useAppTheme } from "../../utility/ThemeContext";

const ViewBanner = () => {
    const { apiloading, setApiLoading } = useAppTheme();
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Edit Modal
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [oldImgPublicId, setOldImgPublicId] = useState(null);

  const [editBannerForm, setEditBannerForm] = useState({
    title: "",
    status: "active",
    pimage: "",
    imgPublicId: "",
  });

  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  /* ================= FETCH ================= */
  const fetchBanners = async () => {
      setApiLoading(true)
    try {
      setLoading(true);
      const { data } = await API.get("/employee/banner/view", {
        params: { search, status, page, limit: 6 },
        headers,
      });
      setBanners(data.banners || []);
      setTotalPages(data.totalPages || 1);
      
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
        setApiLoading(false)
    }
  };

  useEffect(() => {
    fetchBanners();
  }, [search, status, page]);

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this banner?")) return;
     
    try {
         setApiLoading(true)
      setLoading(true);
      await API.delete(`/employee/banner/delete/${id}`, { headers });
      fetchBanners();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
        setApiLoading(false)
    }
  };

  /* ================= OPEN EDIT ================= */
  const openEdit = (banner) => {
    setEditId(banner._id);
    setOldImgPublicId(banner.imgPublicId);

    setEditBannerForm({
      title: banner.title || "",
      status: banner.status || "active",
      pimage: banner.pimage || "",
      imgPublicId: banner.imgPublicId || "",
    });

    setShowModal(true);
  };

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBannerForm((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= IMAGE CHANGE (Cloudinary) ================= */
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setLoading(true);
        setApiLoading(true)

      // Upload using YOUR utility
      const cloud = await uploadToCloudinary(file);

      setEditBannerForm((prev) => ({
        ...prev,
        pimage: cloud.secure_url,
        imgPublicId: cloud.public_id,
      }));
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
        setApiLoading(false)
    }
  };

  /* ================= UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
        setApiLoading(true)

      await API.put(
        `/employee/banner/update/${editId}`,
        {
          title: editBannerForm.title,
          status: editBannerForm.status,
          pimage: editBannerForm.pimage,
          imgPublicId: editBannerForm.imgPublicId,
          oldImgPublicId, // backend deletes old image
        },
        { headers }
      );

      setShowModal(false);
      fetchBanners();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
        setApiLoading(false)
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        View Banners
      </h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          placeholder="Search by title..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="w-full md:w-1/3 px-3 py-2 rounded border dark:bg-gray-800 dark:text-white"
        />

        <select
          value={status}
          onChange={(e) => {
            setPage(1);
            setStatus(e.target.value);
          }}
          className="w-full md:w-1/4 px-3 py-2 rounded border dark:bg-gray-800 dark:text-white"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-200 dark:bg-gray-800">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-center">Image</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr
                  key={banner._id}
                  className="border-b dark:border-gray-700 dark:text-gray-200"
                >
                  <td className="p-3">{banner.title}</td>

                  <td className="p-3 text-center">
                    <img
                      src={banner.pimage}
                      className="w-10 h-10 rounded object-cover mx-auto"
                    />
                  </td>

                  <td className="p-3 text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        banner.status === "active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {banner.status}
                    </span>
                  </td>

                  <td className="p-3 text-center space-x-2">
                    <button
                      onClick={() => openEdit(banner)}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(banner._id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* EDIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              Edit Banner
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
<label className="text-gray-300">Title</label>
              <input
                name="title"
                value={editBannerForm.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded dark:bg-gray-800"
              />
<label className="text-gray-300">Status</label>
              <select
                name="status"
                value={editBannerForm.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded dark:bg-gray-800"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              {/* IMAGE EDIT */}
              <label className="text-gray-300">Image</label>
              <label className="cursor-pointer flex gap-3">
                <img
                  src={editBannerForm.pimage}
                  className="h-24 w-24 rounded object-cover border"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="cursor-pointer border text-gray-400"
                  hidden
                  onChange={handleImageChange}
                />
                <img
                  src="/images/uploadimage.jpg"
                  className="h-24 w-24 rounded object-cover border"
                />
              </label>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBanner;
