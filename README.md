# Basic CRUD App

This is a basic CRUD application built with Express.js, Sequelize, and MySQL. It includes two tables: `User` and `UserType`. The app performs basic Create, Read, Update, and Delete operations.

## Demo

You can view a live demo of the app here:  
[Live Demo](https://www.loom.com/share/e1d76a0c22ab4967b38aa81da574a44c?sid=eb80e3c2-c569-4c3c-ab78-23f60c2b2155)

## Features

- CRUD operations for `User` and `UserType`.
- Sequelize ORM for interacting with the MySQL database.
- Express.js backend for handling API requests.

## Installation

Follow these steps to get the application up and running on your local machine:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the MySQL database:

   - Create a MySQL database and update your database configuration in the `config/config.json` file.

4. Seed the `UserType` table:
   Run the following command to seed the user types:
   ```bash
   npx sequelize-cli db:seed --seed 20241230071311-demo-user-types.cjs
   ```

## Usage

- Start the server:
  ```bash
  npm start
  ```

The server will run on `http://localhost:3000`.

## Technologies Used

- **Express.js**: Web framework for Node.js.
- **Sequelize**: ORM for Node.js to interact with MySQL.
- **MySQL**: Relational database management system.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
