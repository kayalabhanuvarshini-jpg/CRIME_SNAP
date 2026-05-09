import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";
import "../../styles/auth.css";
import bg from "../../assets/auth-bg.jpeg";
import logo from "../../assets/logo.png";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple admin authentication
    if (form.email && form.password) {

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="auth-container">

      {/* BACKGROUND */}
      <div
        className="auth-bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* LOGO */}
      <div className="page-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* LEFT SIDE */}
      <div className="auth-left">

        <div className="quote-box">

          <h1>Admin Control Panel 🛠</h1>

          <p>
            Securely manage complaints, users,
            reports, and city activities through
            the CivicSnap administration panel.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">

        <div className="auth-box">

          <h2>
            <FaUserShield /> Admin Login
          </h2>

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="input-group">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Admin Email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="input-group">

              <FaLock className="input-icon" />

              <input
                type="password"
                name="password"
                placeholder="Admin Password"
                value={form.password}
                onChange={handleChange}
                required
              />

            </div>

            {/* BUTTON */}
            <button
              className="auth-btn"
              type="submit"
            >
              🛠 Login as Admin
            </button>

          </form>

          {/* BACK LINK */}
          <div className="auth-link">

            <Link to="/">
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}