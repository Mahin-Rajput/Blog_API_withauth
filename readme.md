# Blog API with Authentication

A RESTful API for managing blog posts with user authentication. This project is built using **Node.js**, **Express**, **MongoDB**, and **JWT** for authentication.

---

## Features

- **User Authentication**: Secure user registration and login using JSON Web Tokens (JWT).
- **Blog Management**: Create, read, update, and delete blog posts.
- **Protected Routes**: Only authenticated users can create, update, or delete blog posts.
- **Pagination**: Supports pagination for fetching blog posts.
- **Search Functionality**: Search blog posts by title or content.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT**: JSON Web Tokens for user authentication.
- **Bcrypt**: Library for hashing passwords.
- **Dotenv**: For managing environment variables.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mahin-Rajput/Blog_API_withauth.git
   cd Blog_API_withauth
Install dependencies:

bash
Copy
npm install
Set up environment variables:
Create a .env file in the root directory and add the following variables:

env
Copy
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the server:

bash
Copy
npm start
The server will start running on http://localhost:3000.

API Endpoints
Authentication
POST /api/auth/register: Register a new user.

json
Copy
{
  "username": "user123",
  "email": "user123@example.com",
  "password": "password123"
}
POST /api/auth/login: Login an existing user.

json
Copy
{
  "email": "user123@example.com",
  "password": "password123"
}
Blog Posts
GET /api/posts: Get all blog posts (supports pagination and search).

Query Parameters:

page: Page number (default: 1).

limit: Number of posts per page (default: 10).

search: Search query for title or content.

GET /api/posts/:id : Get a single blog post by ID.

POST /api/posts: Create a new blog post (requires authentication).

json
Copy
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post."
}
PUT /api/posts/:id : Update a blog post by ID (requires authentication).

json
Copy
{
  "title": "Updated Blog Post Title",
  "content": "Updated content of the blog post."
}
DELETE /api/posts/:id : Delete a blog post by ID (requires authentication).

Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeatureName).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeatureName).

Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to reach out:

Mahin Rajput

GitHub: Mahin-Rajput

Email: your.email@example.com

