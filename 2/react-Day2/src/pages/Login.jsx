import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      localStorage.setItem("token", "jwt-data");
      alert("Logged in successful!");
      console.log({ formData });
      setFormData({
        email: "",
        password: "",
      });
      navigate("/dashboard");
    } else {
      alert("Email & password required!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email.."
        name="email"
        onChange={handleInput}
        value={formData.email}
      />
      <input
        type="password"
        placeholder="password.."
        name="password"
        onChange={handleInput}
        value={formData.password}
      />
      <input type="submit" placeholder="Log in" />
    </form>
  );
};

export default Login;
