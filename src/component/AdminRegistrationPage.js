import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from './ExpanseImage.jpeg';

const AdminRegistrationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    salary: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      userName: formData.userName,
      phone: formData.phone,
      email: formData.email,
      salary: parseInt(formData.salary),
      password: formData.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:9898/api/admin/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage(response.data); // Display success message from backend
      setError("");
    } catch (error) {
      setMessage("");
      setError(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  // Styles from the reference page
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
      fontFamily: "'Poppins', sans-serif",
      padding: "0 20px",
      backgroundSize: "cover",  // Ensures the gradient is scaled properly
      boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.1)", // Subtle inner shadow for depth
    },
    card: {
      width: "100%",
      maxWidth: "450px",
      padding: "40px",
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      backdropFilter: "blur(10px)", // Subtle blur effect on the card
      backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background for the card
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "20px",
      fontWeight: "600",
      color: "#333",
    },
    label: {
      textAlign: "left",
      display: "block",
      marginBottom: "8px",
      fontWeight: "500",
      fontSize: "1rem",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "1rem",
      fontFamily: "'Poppins', sans-serif",
      transition: "0.3s ease",
    },
    inputFocus: {
      borderColor: "#4CAF50",
      boxShadow: "0 0 8px rgba(72, 155, 75, 0.7)",
    },
    button: {
      width: "100%",
      padding: "14px",
      fontSize: "1rem",
      fontWeight: "600",
      color: "#fff",
      background: "linear-gradient(45deg, #28a745, #218838)",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      margin: "10px 0",
    },
    buttonSecondary: {
      background: "linear-gradient(45deg, #007bff, #0056b3)",
    },
    buttonHover: {
      filter: "brightness(1.1)",
    },
    message: {
      margin: "10px 0",
      fontSize: "1rem",
      color: "green",
      fontWeight: "500",
    },
    error: {
      margin: "10px 0",
      fontSize: "1rem",
      color: "red",
      fontWeight: "500",
    },
    linkButton: {
      marginTop: "10px",
      color: "#0056b3",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Admin Register</h2>
        {message && <p style={styles.message}>{message}</p>}
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName" style={styles.label}>
              Name:
            </label>
            <input
              style={styles.input}
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
              onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              onBlur={(e) => e.target.style = { ...styles.input }}
            />
          </div>
          <div>
            <label htmlFor="phone" style={styles.label}>
              Phone:
            </label>
            <input
              style={styles.input}
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
              onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              onBlur={(e) => e.target.style = { ...styles.input }}
            />
          </div>
          <div>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              onBlur={(e) => e.target.style = { ...styles.input }}
            />
          </div>
          <div>
            <label htmlFor="salary" style={styles.label}>
              Salary:
            </label>
            <input
              style={styles.input}
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              required
              placeholder="Enter your salary"
              onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              onBlur={(e) => e.target.style = { ...styles.input }}
            />
          </div>
          <div>
            <label htmlFor="password" style={styles.label}>
              Password:
            </label>
            <input
              style={styles.input}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              onBlur={(e) => e.target.style = { ...styles.input }}
            />
          </div>
          <button
            style={styles.button}
            type="submit"
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => (e.target.style.filter = "")}
          >
            Register
          </button>
        </form>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={() => navigate("/admin/login")}
          onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseOut={(e) => (e.target.style.filter = "")}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default AdminRegistrationPage;