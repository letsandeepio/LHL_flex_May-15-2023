# CRUD With Express

## Links to Slides

https://docs.google.com/presentation/d/1AEk4UVsEeggDgSzO0vKO2caWPAtDqwr-4t7vw7-GKFY/edit?usp=sharing

# 3 tier web architecture

A 3-tier application architecture is a modular client-server architecture that consists of a presentation tier, an application tier and a data tier.

Presentation Tier (Client)
is a graphical user interface (GUI) that communicates with the other two tiers for e.g. browser on your computer
Application Tier (Server)
Handles the logic for the application for e.g. Flight Tickets Reservation System
Data Tier (Database)
The data tier stores the information and data related to the entire system for e.g. a user database

# RESTful API's

REST, or REpresentational State Transfer, is an architectural style for building APIs (Application Programming Interfaces). It is based on a set of principles that define how web standards, such as HTTP, should be used.

A RESTful API is an API that follows the REST architectural style and constraints. It is designed to be lightweight, easy to use, and easy to scale. RESTful APIs are often used to build web services that are lightweight, maintainable, and scalable.

Here are some of the key characteristics of a RESTful API:

- It uses HTTP methods (such as GET, POST, PUT, DELETE, etc.) to perform operations.
- It exposes a set of endpoints (URLs) that allow you to perform these operations.
- It uses HTTP status codes to indicate the success or failure of an operation.
- It uses HTTP headers to send additional information with an HTTP request or response.
- It can return data in a variety of formats, such as XML, JSON, HTML, etc.
- RESTful APIs are popular because they are simple and easy to use, and they can be used to build APIs for a wide range of applications and services.

# CRUD

In the context of RESTful APIs, CRUD operations correspond to HTTP methods as follows:

- Create: HTTP POST method is used to create a new resource.

- Read: HTTP GET method is used to retrieve a resource.

- Update: HTTP PUT method is used to update an existing resource.

- Delete: HTTP DELETE method is used to delete a resource.

For example, if you have a RESTful API for managing a to-do list, you might have the following endpoints:

`POST /tasks`: Create a new task
`GET /tasks`: Read a list of all tasks
`GET /tasks/{id}`: Read a single task by ID
`PUT /tasks/{id}`: Update a task by ID
`DELETE /tasks/{id}`: Delete a task by ID

These endpoints would allow you to create, read, update, and delete tasks using HTTP requests.
