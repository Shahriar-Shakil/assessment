import db from "../models/index.js";

const UsersController = {
  CreateUserProfile: async (req, res) => {
    try {
      const { first_name, last_name, email, password, user_type_id } = req.body;

      if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newUser = await db.User.create({
        first_name,
        last_name,
        email,
        password,
        user_type_id,
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: `Error creating user: ${error.message}` });
    }
  },

  GetUsers: async (req, res) => {
    try {
      const users = await db.User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error fetching users" });
    }
  },

  GetUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await db.User.findByPk(id, {
        include: [
          {
            model: db.UserType,
            as: "userType", // Use the alias defined in the association
          },
        ],
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error fetching user" });
    }
  },

  UpdateUserById: async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;

    try {
      const user = await db.User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      user.first_name = first_name || user.first_name;
      user.last_name = last_name || user.last_name;
      user.email = email || user.email;
      user.password = password || user.password;

      await user.save();

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error updating user" });
    }
  },

  DeleteUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await db.User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await user.destroy();
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error deleting user" });
    }
  },
};

export default UsersController;
