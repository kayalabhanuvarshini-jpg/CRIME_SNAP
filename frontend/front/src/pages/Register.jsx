import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

import "../styles/auth.css";
import bg from "../assets/auth-bg.jpeg";
import logo from "../assets/logo.png";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // PASSWORD MATCH
  const passwordsMatch =
    form.confirmPassword.length > 0 &&
    form.password === form.confirmPassword;

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setMessage("");
      setLoading(true);

      if (!passwordsMatch) {
        setMessage("❌ Passwords do not match");
        setLoading(false);
        return;
      }

      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          name: form.name,
          email: form.email,
          password: form.password
        }
      );

      console.log(res.data);

      setLoading(false);
      setMessage("✅ Registered successfully!");

      // redirect after delay
      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (error) {

      console.log(error);

      setLoading(false);

      setMessage(
        error.response?.data?.message ||
        "❌ Registration failed"
      );
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

      {/* LEFT */}
      <div className="auth-left">

        <div className="quote-box">

          <h1>Join CivicSnap</h1>

          <h1>Be the change your city needs</h1>

          <p>
            <i>
              "Create your account and help build better communities"
            </i>
          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div className="auth-right">

        <div className="auth-box">

          <h2>🤝 Become a Member</h2>

          {/* MESSAGE BOX (NO ALERTS) */}
          {message && (
            <div className="status-message">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* MATCH MESSAGE */}
            {form.confirmPassword.length > 0 && (
              <p
                style={{
                  fontSize: "12px",
                  marginBottom: "10px",
                  color: passwordsMatch ? "lightgreen" : "#ff4d4d"
                }}
              >
                {passwordsMatch
                  ? "Passwords match ✔"
                  : "Passwords do not match ❌"}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="auth-btn"
              disabled={!passwordsMatch || loading}
            >
              {loading ? "Creating account..." : "Register"}
            </button>

          </form>

          {/* LOGIN LINK */}
          <div className="auth-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </div>

        </div>

      </div>

    </div>
  );
}