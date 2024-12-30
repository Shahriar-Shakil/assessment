import db from "../models/index.js";

const UserService = {
  createUserProfile: async (userData) => {
    try {
      const { first_name, last_name, email, password } = userData;

      if (!first_name || !last_name || !email || !password) {
        throw new Error("All fields are required");
      }
      const newUser = await db.User.create({
        first_name,
        last_name,
        email,
        password,
      });

      return newUser;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  },
};

export default UserService;
