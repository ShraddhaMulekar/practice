import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data fetch successful!");
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          placeholder="user name"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
        <input
          type="email"
          placeholder="ex@ex.co"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
