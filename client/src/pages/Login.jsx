import React, { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setForms({
      ...forms,
      [e.target.name]: [e.target.value],
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let res = await fetch(`${api}/user/login`, {
        method: POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(forms),
      });
      let data = res.json();
      console.log(data);

      if (!data.success) {
        alert(data.message);
        return;
      }

      alert(data.message || "Login Successful");

      setForms({
        email: "",
        password: "",
      });

      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <input
        type="email"
        placeholder="Email id.."
        name="email"
        value={forms.email}
        onChange={inputHandler}
        required
      />
      <input
        type="password"
        placeholder="Password.."
        name="password"
        value={forms.password}
        onChange={inputHandler}
        required
      />
      <input type="submit" value={loading ? "log in..." : "login"} />
    </form>
  );
};

export default Login;
