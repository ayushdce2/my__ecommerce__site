
import useManageUsers from "../hook/useManageUsers"

const ManageUsers=()=> {
  const {search,sort, users, page, totalPages, loading,setSort, setSearch,setPage, changeUserStatus}=useManageUsers();
  if(loading){
    return <p className="text-3xl text-gray-800 dark:text-gray-300">Loading</p>
  }

  return (
    <>
    <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs'>Manage Users</p>
    </div>
    
    <div className="p-6 dark:bg-slate-900 dark:text-slate-100 text-gray-600 bg-white  rounded-xl  ">
      

      {/* Controls */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search name or email"
          className="px-4 py-2 bg-blue-400  dark:bg-slate-800 border border-slate-700 rounded dark:text-slate-100 text-gray-600"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          className="px-4 py-2 bg-blue-400  dark:bg-slate-800 border border-slate-700 rounded dark:text-slate-100 text-gray-600"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="desc">Newest</option>
          <option value="asc">Oldest</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded border border-slate-700">
        <table className="w-full text-sm">
          <thead className="bg-blue-300  dark:bg-slate-800">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Joined</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="border-t border-slate-700 hover:bg-slate-800">
                <td className="p-3">{u.name}</td>
                <td className="p-3 text-slate-400">{u.email}</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded bg-blue-600/20 text-blue-400">
                    {u.userRole}
                  </span>
                </td>
                <td className="p-3 text-slate-400">{u.userstatus}</td>
                <td className="p-3">
                  {new Date(u.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3">
                    <select value={u.userstatus} onChange={(e)=>{changeUserStatus(e,u._id)}}>
                        <option className="text-green-600">Active</option>
                        <option className="text-red-600">Disable</option>
                    </select>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-6 text-slate-400">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-slate-400">
          Page {page} of {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 bg-slate-800 border border-slate-700 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 bg-slate-800 border border-slate-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </>
  );
}


export default ManageUsers