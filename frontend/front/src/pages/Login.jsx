import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

import "../styles/auth.css";
import bg from "../assets/auth-bg.jpeg";
import logo from "../assets/logo.png";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // LOGIN API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        form
      );

      console.log(res.data);

      // save token
      localStorage.setItem("token", res.data.token);

      // save user
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      // redirect
      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      setError(
        err.response?.data?.message ||
        "Login failed"
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
        <h2>CrimeSnap</h2>
      </div>

      {/* LEFT SIDE */}
      <div className="auth-left">

        <div className="quote-box">

          <h1>Welcome Back 👋</h1>

          <p>
            “Your voice has the power to improve streets,
            solve issues, and strengthen communities.
            CivicSnap helps citizens and authorities work
            together for a better tomorrow”
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">

        <div className="auth-box">

          <h2>Login</h2>

          {/* ERROR */}
          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>

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

            {/* BUTTON */}
            <button
              className="auth-btn"
              type="submit"
            >
              👤 Login
            </button>

          </form>

          {/* REGISTER LINK */}
          <div className="auth-link">

            New user?{" "}

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}