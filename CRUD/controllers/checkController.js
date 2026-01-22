import userModel from "../models/user.model.js";

export const checkController = async (req, res) => {
  try {
    const users = await userModel.find();

    console.log(users);

    res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
};
