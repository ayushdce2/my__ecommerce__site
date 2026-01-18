import {
  FaUsers,
  FaUserTie,
  FaMoneyCheckAlt,
  FaCalendarAlt
} from "react-icons/fa";

/* Stat Card */
const StatCard = ({ title, value, icon, color }) => (
  <div className={`bg-gradient-to-r ${color} text-white p-5 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">{title}</p>
        <h2 className="text-3xl font-bold">{value}</h2>
      </div>
      <div className="text-4xl opacity-80">{icon}</div>
    </div>
  </div>
);

/* Activity Item */
const ActivityItem = ({ text }) => (
  <li className="p-2 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-700 hover:pl-4">
    ✔ {text}
  </li>
);

const Dashboard = () => {
  return (
    <>
    {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <StatCard title="Employees" value="120" icon={<FaUsers />} color="from-blue-500 to-indigo-500" />
                  <StatCard title="Departments" value="8" icon={<FaUserTie />} color="from-green-500 to-emerald-500" />
                  <StatCard title="On Leave" value="5" icon={<FaCalendarAlt />} color="from-yellow-500 to-orange-500" />
                  <StatCard title="Payroll Pending" value="3" icon={<FaMoneyCheckAlt />} color="from-red-500 to-pink-500" />
                </div>
    
                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                    Recent Activities
                  </h2>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <ActivityItem text="John Doe marked attendance" />
                    <ActivityItem text="Payroll processed for IT department" />
                    <ActivityItem text="New employee added – Sarah Smith" />
                    <ActivityItem text="Leave approved for Mark" />
                  </ul>
                </div>
   
    
    </>
  )
}

export default Dashboard