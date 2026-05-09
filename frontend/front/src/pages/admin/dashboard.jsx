import {
  FaHome,
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaCog,
  FaBell,
  FaSearch,
  FaSignOutAlt,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";

export default function AdminDashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <aside className="sidebar">

        {/* LOGO */}
        <div className="sidebar-logo">

          <h2>CivicSnap</h2>

          <p>Admin Panel</p>

        </div>

        {/* MENU */}
        <ul className="sidebar-menu">

          <li className="active">
            <FaHome />
            Dashboard
          </li>

          <li>
            <FaClipboardList />
            Complaints
          </li>

          <li>
            <FaUsers />
            Users
          </li>

          <li>
            <FaChartBar />
            Analytics
          </li>

          <li>
            <FaCog />
            Settings
          </li>

        </ul>

        {/* LOGOUT */}
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* TOPBAR */}
        <div className="topbar">

          <div>

            <h1>Admin Dashboard 👋</h1>

            <p>
              Manage reports, users and city issues
            </p>

          </div>

          <div className="top-actions">

            {/* SEARCH */}
            <div className="search-box">

              <FaSearch />

              <input
                type="text"
                placeholder="Search..."
              />

            </div>

            {/* NOTIFICATION */}
            <div className="notify-box">
              <FaBell />
            </div>

          </div>

        </div>

        {/* STATISTICS */}
        <div className="stats-grid">

          <div className="stat-card">

            <FaClipboardList className="stat-icon" />

            <h2>1,248</h2>

            <p>Total Complaints</p>

          </div>

          <div className="stat-card">

            <FaCheckCircle className="stat-icon green" />

            <h2>856</h2>

            <p>Resolved Reports</p>

          </div>

          <div className="stat-card">

            <FaExclamationTriangle className="stat-icon orange" />

            <h2>116</h2>

            <p>Pending Reports</p>

          </div>

          <div className="stat-card">

            <FaUsers className="stat-icon blue" />

            <h2>520</h2>

            <p>Active Users</p>

          </div>

        </div>

        {/* RECENT REPORTS */}
        <div className="recent-section">

          <div className="section-header">

            <h2>Recent Complaints</h2>

            <button>
              View All
            </button>

          </div>

          {/* TABLE */}
          <table className="reports-table">

            <thead>

              <tr>
                <th>Complaint</th>
                <th>Location</th>
                <th>Status</th>
                <th>Date</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Pothole on Main Road</td>
                <td>Hyderabad</td>
                <td>
                  <span className="pending">
                    Pending
                  </span>
                </td>
                <td>Today</td>
              </tr>

              <tr>
                <td>Broken Street Light</td>
                <td>Bangalore</td>
                <td>
                  <span className="progress">
                    In Progress
                  </span>
                </td>
                <td>Yesterday</td>
              </tr>

              <tr>
                <td>Garbage Overflow</td>
                <td>Chennai</td>
                <td>
                  <span className="resolved">
                    Resolved
                  </span>
                </td>
                <td>2 days ago</td>
              </tr>

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}