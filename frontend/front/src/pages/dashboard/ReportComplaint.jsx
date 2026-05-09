import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../styles/report.css";
import bg from "../../assets/auth-bg.jpeg";

export default function ReportComplaint() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    image: null
  });

  const [preview, setPreview] = useState("");

  // UI STATUS MESSAGE (NEW)
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // TEXT INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // IMAGE UPLOAD
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setForm({
        ...form,
        image: file
      });

      setPreview(URL.createObjectURL(file));
    }
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);
      setMessage("");

      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("⚠️ Please login first");
        setLoading(false);
        return;
      }

      if (!form.image) {
        setMessage("⚠️ Please upload evidence image");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("category", form.category);
      formData.append("location", form.location);
      formData.append("description", form.description);
      formData.append("evidence", form.image);

      await axios.post(
        "http://localhost:3000/api/complaints/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setLoading(false);

      // SUCCESS MESSAGE (NO ALERT)
      setMessage("✅ Complaint submitted successfully!");

      // redirect after short delay
      setTimeout(() => {
        navigate("/dashboard/my-complaints");
      }, 1200);

    } catch (err) {
      console.log(err);

      setLoading(false);
      setMessage("❌ Failed to submit complaint");
    }
  };

  return (
    <div
      className="report-container"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="report-card">

        <h2>📢 Report Complaint</h2>

        {/* STATUS MESSAGE */}
        {message && (
          <div className="status-message">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Complaint Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Crime</option>
            <option>Theft</option>
            <option>Harassment</option>
            <option>Road Issue</option>
            <option>Electricity</option>
            <option>Water Problem</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Describe the issue..."
            value={form.description}
            onChange={handleChange}
            required
          />

          <label className="upload-btn">
            📷 Upload Evidence
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              hidden
            />
          </label>

          {preview && (
            <img
              src={preview}
              alt="preview"
              style={{
                width: "100%",
                marginTop: "10px",
                borderRadius: "10px"
              }}
            />
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "🚀 Submit Complaint"}
          </button>

        </form>

      </div>

    </div>
  );
}