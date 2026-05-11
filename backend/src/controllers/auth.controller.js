const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    console.log("REGISTER DATA:", req.body);

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // create user WITHOUT HASHING
    const user = await User.create({
      name,
      email,
      password,
      role: role || "user",
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      user,
    });

  } catch (err) {
    console.log("REGISTER ERROR:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

// ================= LOGIN =================
exports.login = async (req, res) => {
  try {
    console.log("🔥 LOGIN API CALLED");

    const { email, password } = req.body;

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    // find user
    const user = await User.findOne({ email });

    console.log("USER:", user);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // NORMAL PASSWORD CHECK
    if (password !== user.password) {
      return res.status(401).json({
        success: false,
        message: "Wrong password",
      });
    }

    // create token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET || "secret123",
      {
        expiresIn: "7d",
      }
    );

    console.log("✅ LOGIN SUCCESS");

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

// ================= GET ME =================
exports.getMe = async (req, res) => {
  try {

    const user = await User.findById(
      req.user.id
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (err) {
    console.log("GET ME ERROR:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

console.log("✅ AUTH CONTROLLER LOADED");