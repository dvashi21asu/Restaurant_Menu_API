# Restaurant_Menu_API
This repository contains a Node.js application for a restaurant menu API using GraphQL. The project demonstrates the ability to build a simple API to serve menu data, with an emphasis on code cleanliness and problem-solving skills. The API allows fetching menu items, including details such as name, description, and price.
This is a Node.js and GraphQL API designed to provide data for a restaurant menu application.

## Requirements

- Node.js
- npm

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/restaurant-menu-api.git
   cd restaurant-menu-api
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Running the Server

To start the server locally, run:
```sh
node server.js
```
The server will be running at `http://localhost:4000/graphql`.

## GraphQL Queries

You can use the following queries to retrieve menu items:

### Appetizers

```graphql
{
  appetizers {
    name
    description
    price
  }
}
```

### Entrees

```graphql
{
  entrees {
    name
    description
    price
  }
}
```

### Sandwiches

```graphql
{
  sandwiches {
    name
    description
    price
  }
}
```

### Soup and Salad Combos

```graphql
{
  soupSaladCombos {
    name
    description
    price
  }
}
```

### Fajitas

```graphql
{
  fajitas {
    name
    description
    price
  }
}
```

### Tacos

```graphql
{
  tacos {
    name
    description
    price
  }
}
```

### Enchiladas

```graphql
{
  enchiladas {
    name
    description
    price
  }
}
```

### Quiche

```graphql
{
  quiche {
    name
    description
    price
  }
}
```

### Green Salads

```graphql
{
  greenSalads {
    name
    description
    price
  }
}
```

## Running Tests

To run the automated tests, use:
```sh
npm test
```

## Notes

- This project is built using Node.js and GraphQL.
- Automated tests are implemented using Jest and Supertest.
- Feel free to customize the menu data in `resolvers.js`.

## What I Did and Why

- **Node.js and GraphQL**: Chosen for efficient data querying and flexibility in front-end integration.
- **Express**: Used to set up the server quickly and efficiently.
- **Jest and Supertest**: Selected for testing to ensure the API works correctly and reliably.
- **Modular Code Structure**: Followed to keep the code clean and maintainable.
- **README Documentation**: Provided to help users easily set up, run, and test the application locally.



