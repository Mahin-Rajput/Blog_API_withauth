# Blog API with Authentication

A RESTful API for managing blog posts with user authentication. Built using **Node.js**, **Express**, **MongoDB**, and **JWT** for authentication.

---

## Features

- **User Authentication**: Secure user registration and login using JSON Web Tokens (JWT).
- **Blog Management**: Create, read, update, and delete blog posts.
- **Protected Routes**: Only authenticated users can create, update, or delete blog posts.
- **Pagination**: Fetch blog posts with pagination support.
- **Search Functionality**: Search blog posts by title or content.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM library for MongoDB.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt**: Library for hashing passwords.
- **Dotenv**: For managing environment variables.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mahin-Rajput/Blog_API_withauth.git
   cd Blog_API_withauth
##Install dependencies:

bash
Copy
npm install
Set up environment variables:
Create a .env file in the root directory and add the following:

env
Copy
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the server:

bash
Copy
npm start
The server will start at http://localhost:3000.

##API Endpoints

##Authentication
POST http://localhost:3000/signup Register a new user.

json
Copy
{
    "first_name": "jack", 
    "last_name":"hawkin", 
    "email":"hawkin@gmail.com", 
    "pw":"aaa", 
    "country":"USA"
}

##POSThttp://localhost:3000/api/users/login Login an existing user.

json
Copy
{
    "email":"hawkin@gmail.com", 
    "pw":"aaa"
}

##Blog Posts
GET http://localhost:3000/api/blog/allblogs Get all blog posts.

Query Parameters:

page: Page number (default: 1).

limit: Number of posts per page (default: 10).

search: Search query for title or content.

##GET /api/posts/:id: Get a single blog post by ID.


##POST http://localhost:3000/api/blog/createblog Create a new blog post (requires authentication).

json
Copy
{
    "title": "The Future of Space Exploration",
    "description": "A look at upcoming missions, advancements in space technology, and the possibility of human colonization beyond Earth.",
    "tag": "space",
    "author": "Olivia Reynolds",
    "timestamp": "2025-06-10T10:15:00Z",
    "state": "draft",
    "read_count": 150,
    "reading_time": "7 minutes",
    "body": "Space exploration is entering a new era with ambitious missions to the Moon, Mars, and beyond. Advancements in rocket technology, AI-driven robotics, and private space ventures are accelerating progress toward interplanetary travel. This article explores the latest developments in space exploration, the challenges of deep-space missions, and the potential for human settlement on other planets."
}

##PUT http://localhost:3000/api/blog/singleblog Update a blog post by ID (requires authentication).

json
Copy
{
    "title":"The Impact of Quantum Computing on Cybersecurityssss"
}
UPDATE http://localhost:3000/api/blog/updateblog Update a blog post by ID (requires authentication).

json
COPY
{
    "title": "The Future of Space Exploration",
    "description": "A look at upcoming missions, advancements in space technology, and the possibility of human colonization beyond Earth.",
    "tag": "space",
    "author": "Olivia Reynolds",
    "timestamp": "2025-06-10T10:15:00Z",
    "state": "draft",
    "read_count": 150,
    "reading_time": "7 minutes",
    "body": "Iamupdating thisnowaa."
}

##Contributing
Contributions are welcome! Follow these steps:

##Fork the repository.

Create a new branch: git checkout -b feature/YourFeatureName.

Commit your changes: git commit -m 'Add some feature'.

Push to the branch: git push origin feature/YourFeatureName.

##Open a pull request.

##License
This project is licensed under the MIT License. See the LICENSE file for details.

##Contact
For questions or suggestions, feel free to reach out:

Mahin Rajput

GitHub: Mahin-Rajput

Email: mahinvikasrajput@gmail.com
