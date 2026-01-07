import React, { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${api}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (!data.success) {
        alert(data.message);
        return;
      }

      alert(data.message || "registeration successful");

      setFormData({
        userName: "",
        email: "",
        password: "",
      });
      
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleInput}
        placeholder="User Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInput}
        placeholder="Email.."
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInput}
        placeholder="Password.."
        required
      />
      <input
        type="submit"
        value={loading ? "Signing In..." : "Sign In"}
        // onSubmit={handleSubmit}
      />
    </form>
  );
};

export default Signin;
