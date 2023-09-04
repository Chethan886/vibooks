import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from React Router

function Lform() {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the login data to your server
      const response = await Axios.post("http://localhost:3000/api/login", formData);

      if (response.status === 200) {
        setMsg("Login successful");
        // Redirect to the home page upon successful login
        navigate("/");
      } else {
        setMsg("Login failed");
      }
    } catch (error) {
      console.error(error);
      setMsg("Login failed");
    }
  };

  return (
    <div className="soutbox">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-items">
            <input
              className="inputfor"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="form-items">
            <input
              className="inputfor"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <button className="formbut" type="submit">
            Log in
          </button>
        </form>

        <div className="msg">{msg}</div>
        
        {/* Create Account button */}
        <Link to="/signup" className="create-account-link">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Lform;

