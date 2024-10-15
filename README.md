## File Structure Overview
- DB (Database Connection):
This folder contains the MongoDB connection logic, typically with a file to manage the database connection using Mongoose. The file ensures a successful connection to the MongoDB instance, which is critical for storing and retrieving data in the application. This is the backbone that allows the API to interact with the webtoon and user data.

- Controller (API Functions):
The controller folder houses the core business logic of the API. Each controller corresponds to specific actions like adding, fetching, or deleting webtoons. It’s responsible for processing incoming requests, interacting with the database (via Mongoose), and sending back appropriate responses to the client (e.g., successful creation of a webtoon or error messages).

- JWT (Authentication):
This folder includes files that manage the JWT (JSON Web Token) authentication process. It contains functions to generate tokens upon user login or signup. The generated token is used to securely identify users across multiple requests, ensuring only authenticated users can access or modify protected routes. It also includes token-related operations like signing and verifying tokens.

- Middlewares (JWT & Rate Limiting):
The middleware folder contains middleware functions for managing JWT authentication and rate limiting. The JWT middleware ensures that only users with valid tokens can access certain routes, protecting sensitive actions like posting or deleting webtoons. Rate limiting middleware restricts the number of requests a user can make within a certain period, protecting the API from abuse or malicious attacks (e.g., brute force attempts).

- Routes (API Endpoints):
The routes folder defines the different API routes/endpoints that users can interact with. It maps specific HTTP methods (GET, POST, DELETE) to the corresponding controllers. Routes for webtoon management (adding, fetching, and deleting) are protected with JWT middleware, ensuring only authenticated users can perform certain actions.

- Models (Database Schemas):
Models define the structure of the data in MongoDB. This folder contains Mongoose schemas for both webtoons and users. The webtoon schema defines what data fields (e.g., title, description, characters) are stored for each webtoon, while the user schema manages user information like usernames and hashed passwords. These models ensure data integrity and validation before it is saved to the database.

- server.js:
Sets up an Express server with MongoDB, JWT authentication, and webtoon API routes.

 ## Install the dependencies:
    ```
    npm install
    run server.js 
    ```

## API PATH
- AUTH API -
http://localhost:5000/api/auth/ api name 
- WEBTOON API-
http://localhost:5000/api/webtoon/ api name 



