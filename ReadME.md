# Product API Server

This is a simple API server that allows you to perform CRUD operations on products.

## Installation

# Clone the repository

git clone https://github.com/TamaniPhiri/Sequelize-Backend-Express-Postgresql.git

# Change into the project directory

cd /Sequelize-Backend-Express-Postgresql/

# Install dependencies

npm install

# Start the server

npm start

# Base URL: http://localhost:5000/

# Routes

    GET /products - Retrieves all products.
    GET /products/:id - Retrieves a specific product by ID.
    POST /products - Creates a new product.
    PUT /products/:id - Updates a product by ID.
    DELETE /products/:id - Deletes a product by ID.

# Usage

You can use tools like ThunderClient, Postman, or any API testing tool to interact with the endpoints.

# Get all products

Send a GET request to /products to retrieve all products.
Get product by ID

Send a GET request to /products/:id where :id is the ID of the product you want to retrieve.

# Create a new product

Send a POST request to /products with the following request body:

json

{
  "name": "Product Name",
  "description": "Product Description",
  "price": 19.99
}

# Update a product by ID

Send a PUT request to /products/:id where :id is the ID of the product you want to update. Include the updated product details in the request body, such as:

json

{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 29.99
}

# Delete a product by ID

Send a DELETE request to /products/:id where :id is the ID of the product you want to delete.