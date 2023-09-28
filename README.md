# Social-Network-Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NPM-Package:](https://img.shields.io/badge/NPM_Package-Express-lightblue.svg)](https://www.npmjs.com/package/express)
[![NPM-Package:](https://img.shields.io/badge/NPM_Package-Mongoose-yellow.svg)](https://www.npmjs.com/package/mongoose)
[![Environment:](https://img.shields.io/badge/Environment-Node.js-green.svg)](https://nodejs.org/)
[![Tool:](https://img.shields.io/badge/Tool-Insomnia-purple.svg)](https://insomnia.rest/)
[![Database:](https://img.shields.io/badge/Database-MongoDB-darkgreen.svg)](https://www.mongodb.com/)

## Description

This project is a backend API for a social media platform built using Node.js, Express, and MongoDB. It provides a foundation for users to interact, share thoughts, and react to each other's posts.

**Features**:

- User creation, retrieval, update, and deletion.
- User ability to add and remove friends.
- Thought posting with options to update and delete.
- Reaction system allowing users to engage with each other's thoughts.

Utilizing a NoSQL database allows for scalable and efficient handling of unstructured data. With routes tested in Insomnia, this API ensures robust data management for a potential front-end social media platform.

## Table of Contents

- [Usage](#usage-instructions)
  - [Prerequisites](#prerequisites)
  - [Setup & Installation](#setup--installation)
  - [Testing the API](#testing-the-api)
  - [Common Endpoints](#common-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)
- [Questions](#questions)

## Usage Instructions

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. If not, download and install it from [Node.js official website](https://nodejs.org/).

2. **MongoDB**: This project uses MongoDB as its database. Ensure you have MongoDB installed and running. If you're using MongoDB Atlas, make sure you have your connection string.

3. **Insomnia or Postman**: These tools allow you to test your API endpoints. Install either [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) for API testing.

### Setup & Installation

1. **Clone the Repository**:

   ```
   git clone git@github.com:Verouge/Social-Network-Backend.git
   cd Social-Network-Backend
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Start the Server**:

   ```
   npm start
   ```

   This will start the server on the specified port (default: 3000).

### Testing the API

1. **Open Insomnia/Postman**:
   Launch your API testing tool.

2. **Create a New Request**:
   - Set the method to the desired HTTP verb (GET, POST, PUT, DELETE).
   - Enter the endpoint URL (e.g., `http://localhost:3000/api/users` to fetch all users).
   - For POST and PUT requests, provide the required data in the request body.
   - Send the request and observe the response.

### Common Endpoints:

- **Create User**:
  POST to `http://localhost:3000/api/users` with JSON data:

  ```json
  {
    "username": "newuser",
    "email": "newuser@email.com"
  }
  ```

- **Fetch All Users**:
  GET `http://localhost:3000/api/users`

- **Add Friend**:
  POST to `http://localhost:3000/api/users/{USER_ID}/friends/{FRIEND_ID}`

- **Remove Friend**:
  DELETE `http://localhost:3000/api/users/{USER_ID}/friends/{FRIEND_ID}`

- **Create Reaction**:
  POST to `http://localhost:3000/api/thoughts/{THOUGHT_ID}/reactions` with reaction data in the request body.

![](/assets/demo.gif)

## Contributing

Please contact me to add your contributions

## License

This project is licensed under the MIT license.

```
Copyright <2023> <Brandon Zhang>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Credits

Brandon Zhang

## Acknowledgments

This project leverages a powerful combination of technologies and tools to deliver a comprehensive backend for a social media platform:

- **Mongoose**: A MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straightforward, schema-based solution to model application data and includes built-in typecasting, validation, and more. [Official website](https://mongoosejs.com/)

- **MongoDB**: The project's NoSQL database, MongoDB offers high performance, high availability, and easy scalability. It works on a document-based approach, making data manipulation and retrieval more fluid and efficient. [Official website](https://www.mongodb.com/)

- **Node.js**: The foundational backbone of the backend, Node.js allows the execution of JavaScript on the server-side, powering the application's business logic.

- **Express.js**: A lightweight and flexible Node.js web application framework, Express.js aids in setting up routes, middleware, and API endpoints efficiently. [Official website](https://expressjs.com/)

- **Insomnia**: Essential for API endpoint testing, Insomnia streamlines the process of sending requests, understanding responses, and ensuring that all routes are functioning correctly. [Official website](https://insomnia.rest/)

## Questions

If you have any questions, please feel free to contact me via email or on GitHub.

Email: branola1998628@gmail.com

GitHub: [verouge](https://github.com/verouge)
