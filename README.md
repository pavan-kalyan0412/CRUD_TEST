# CRUD API

This is a simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and MongoDB.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/pavan-kalyan0412/CRUD-API.git
    ```

2. Navigate to the project directory:

    ```bash
    cd CRUD-API
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB connection string. Example:

    ```
    mongo_url=mongodb://localhost:27017/your_database_name
    ```

5. Start the server:

    ```bash
    npm start
    ```

6. The server will start running on http://localhost:3000 by default.

## API Endpoints

- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get a single product by ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update an existing product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

