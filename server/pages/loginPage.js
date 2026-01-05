import jwt from "jsonwebtoken";
import UserModel from "../models/user_model.js";
import bcrypt from "bcrypt";

const loginPage = async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.json({ success: false, message: "All feilds are required!" });
  }

  try {
    const matchEmail = await UserModel.findOne({ email });

    if (!matchEmail) {
      return res.json({
        success: false,
        message: "you are not registered. Please registered first!",
      });
    }

    bcrypt.compare(password, matchEmail.password, async function (err, result) {
      if (err) {
        return res.json({
          success: false,
          message: "Something went wrong while comparing password",
        });
      }

      if (!result) {
        return res.json({ success: false, message: "Invalid Password!" });
      }

      const payload = {
        userId: matchEmail._id,
        userName: matchEmail.userName,
      };
      const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1d" });
      return res.json({
        success: true,
        message: "Login successful!",
        token,
      });
    });
  } catch (error) {
    console.log({ error });
    return res.json({ success: false, message: "Server error" });
  }
};

export default loginPage;
