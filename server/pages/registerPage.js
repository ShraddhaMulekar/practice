import bcrypt from "bcrypt"
import UserModel from "../models/user_model.js"

const registerPage = async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.json({ success: false, message: "All feilds are required!" });
  }

  try {
    const matchEmail = await UserModel.findOne({ email });

    if (matchEmail) {
      return res.json({
        success: false,
        message: "You are already registered. Please log in now!",
        matchEmail,
      });
    }

    bcrypt.hash(password, Number(process.env.SALTROUNDS), async (err, hash) => {
      if (err) {
        return res.json({ success: false, message: "password invalid!" });
      } else {
        const matchPass = await UserModel({
          userName,
          email,
          password: hash,
        });
        await matchPass.save();
        return res.json({ success: true, message: "Registration successful!", matchPass });
      }
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, Error: error });
  }
}
export default registerPage