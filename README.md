🚀 Full-Stack User Management System with JWT Authentication

A secure full-stack web application built using React and Spring Boot that allows users to register, log in, and access protected resources using JWT-based authentication.

This project demonstrates real-world backend security practices, clean layered architecture, and frontend-backend integration through REST APIs.

📌 Features

✅ User Registration & Login

🔐 JWT Token-based Authentication & Authorization

🔒 Secure Password Encryption using BCrypt

🧱 Layered Backend Architecture (Controller, Service, Repository)

🌐 Protected REST APIs with Spring Security

⚙️ CORS Configuration for Cross-Origin Communication

🎨 React Frontend with Dynamic UI & API Integration

🛠 Tech Stack
Frontend

React

JavaScript

Fetch API

Backend

Java

Spring Boot

Spring Security

JPA / Hibernate

Authentication & Security

JWT (JSON Web Tokens)

BCrypt Password Encoder

Database

H2 (development)

MySQL (production-ready)

📂 Project Structure
Backend
backend/
 ├── controller
 ├── service
 ├── repository
 ├── model
 ├── dto
 ├── config
 └── util

Frontend
frontend/
 ├── components
 ├── services
 ├── App.jsx
 └── index.js

🚀 Getting Started
Prerequisites

Java 17+

Node.js (LTS)

Maven

Git

🔧 Backend Setup
cd backend
mvn spring-boot:run


Backend runs on:

http://localhost:8080

🎨 Frontend Setup
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000

🔐 Authentication Flow

User registers with email & password

Password is encrypted using BCrypt

User logs in and receives JWT token

Token is stored in localStorage

Token is sent with each protected API request

Spring Security validates token before granting access

📡 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login and receive JWT
Users (Protected)
Method	Endpoint	Description
GET	/api/users	Get all users
POST	/api/users	Create user
DELETE	/api/users/{id}	Delete user

📈 Future Enhancements

Role-based authorization (ADMIN / USER)

JWT refresh tokens

Pagination & search

React Router protected routes

Deployment to cloud (AWS / Render)

🧠 What This Project Demonstrates

Secure authentication with JWT

Clean backend architecture

RESTful API design

Frontend-backend integration

Industry-standard security practices

👨‍💻 Author

Rohithkumar

⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!
