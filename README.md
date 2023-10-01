# Upskilling Backend Microservices - Star Wars API

<a href="https://swapi.dev/" target="_blank"><img src="https://res.cloudinary.com/dviltxetl/image/upload/v1696174926/sw-logo_jww8li.jpg" alt="star-wars-logo" /></a>

This project has been created to implement a basic microservices platform.

Following the microservices architecture, it provides the functionality to create, find, update or delete information about characters, planets and films from the Star Wars saga.

It is developed based on Express framework, implements a MongoDB as persistent information platform and Mongoose as ORM to send and retrieve the information from/to the database.

This project is conformed by 5 standalone application interconnected via HTTP Requests:

- Gateway as the entry point.
- Three CRUD services that manages the data manipulation, only accesibles from the gateway:
  - Characters
  - Films
  - Planets
- Database as the service that manages the connection, sending and retrieve data from/to the database.

This project is containerized by using Docker Compose. To run this project you must fork the repo, and locally run docker-compose up.
