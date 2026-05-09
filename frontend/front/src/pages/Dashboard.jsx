import { useState } from "react";

import {
  FaHome,
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";

import "../styles/dashboard.css";
import logo from "../assets/logo.png";

export default function Dashboard() {

  const [page, setPage] = useState("dashboard");

  return (
    <div className="dash-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">

        {/* BRAND */}
        <div className="brand">

          <img src={logo} alt="logo" />

          <div className="brand-text">
            <h2>CivicSnap</h2>
            <p>Admin Panel</p>
          </div>

        </div>

        {/* MENU */}
        <div className="menu">

          <button
            className={page === "dashboard" ? "active" : ""}
            onClick={() => setPage("dashboard")}
          >
            <FaHome />
            <span>Dashboard</span>
          </button>

          <button
            className={page === "reports" ? "active" : ""}
            onClick={() => setPage("reports")}
          >
            <FaClipboardList />
            <span>Complaints</span>
          </button>

          <button
            className={page === "users" ? "active" : ""}
            onClick={() => setPage("users")}
          >
            <FaUsers />
            <span>Users</span>
          </button>

          <button
            className={page === "analytics" ? "active" : ""}
            onClick={() => setPage("analytics")}
          >
            <FaChartBar />
            <span>Analytics</span>
          </button>

          <button
            className={page === "settings" ? "active" : ""}
            onClick={() => setPage("settings")}
          >
            <FaCog />
            <span>Settings</span>
          </button>

        </div>

        {/* ADMIN PROFILE */}
        <div className="admin-profile">

          <img
            src="https://i.pravatar.cc/100"
            alt="admin"
          />

          <div>
            <h4>Admin User</h4>
            <p>Super Administrator</p>
          </div>

        </div>

        {/* LOGOUT */}
        <button className="logout">

          <FaSignOutAlt />

          Logout

        </button>

      </aside>

      {/* MAIN CONTENT */}
      <main className="main">

        {/* DASHBOARD */}
        {page === "dashboard" && (

          <div>

            <div className="home-box">

              <h1>📊 Admin Dashboard</h1>

              <p>
                Monitor complaints and manage the city
              </p>

            </div>

            {/* STATS */}
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
            <div className="recent-box">

              <h2>Recent Complaints</h2>

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

          </div>

        )}

        {/* REPORTS */}
        {page === "reports" && (

          <div className="page-box">

            <h1>📢 Complaints Management</h1>

            <p>
              View and manage all complaints
            </p>

          </div>

        )}

        {/* USERS */}
        {page === "users" && (

          <div className="page-box">

            <h1>👥 Users Management</h1>

            <p>
              Manage all registered users
            </p>

          </div>

        )}

        {/* ANALYTICS */}
        {page === "analytics" && (

          <div className="page-box">

            <h1>📊 Analytics</h1>

            <p>
              Complaint and reports analytics
            </p>

          </div>

        )}

        {/* SETTINGS */}
        {page === "settings" && (

          <div className="page-box">

            <h1>⚙ Settings</h1>

            <p>
              Configure admin dashboard settings
            </p>

          </div>

        )}

      </main>

    </div>
  );
}