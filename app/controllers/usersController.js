import UserService from "../services/userService.js";

export const CreateUserProfile = async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await UserService.createUserProfile(userData);
    return res.status(201).json({
      message: "User profile created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user profile:", error);
    return res.status(500).json({
      message: error.message || "There was an error creating the user profile",
    });
  }
};
