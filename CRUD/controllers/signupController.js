import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";

export const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = await userModel.findOne({ email });
    if (newUser) {
      return res
        .status(400)
        .json({ message: "User already exists", newUser: newUser });
    }

    bcrypt.hash(password, Number(process.env.SALT_ROUNDS), async (err, hash) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error hashing password", error: err.message });
      }
      const user = new userModel({ name, email, password: hash });
      await user.save();
      return res
        .status(201)
        .json({ message: "User created successfully", user: user });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
