import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/login")}>Log in</button>
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/logout")}>Log out</button>
    </nav>
  );
};

export default Navbar;
