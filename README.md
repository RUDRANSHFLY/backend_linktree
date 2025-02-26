# Backend Linktree - Authentication API (Express.js + JWT)

This API provides authentication and authorization using JWT. Users can register, log in, and access protected routes.

## 📌 Base URL
```
http://localhost:5000/api/auth
```

## 📌 Endpoints

### 1️⃣ User Registration
**Endpoint:**
```
POST /api/auth/register
```
**Request Body:**
```json
{
  "username": "JohnDoe",
  "email": "johndoe@example.com",
  "password": "securepassword",
  "phonenumber": "1234567890",  // Optional
  "occupation": "Engineer"        // Optional
}
```
**Response Codes:**
- ✅ `201 Created`: User registered successfully
- ❌ `400 Bad Request`: Missing required fields
- ❌ `409 Conflict`: Email already exists

**Example Success Response:**
```json
{
  "message": "User registered successfully!"
}
```

---

### 2️⃣ User Login
**Endpoint:**
```
POST /api/auth/login
```
**Request Body:**
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
**Response Codes:**
- ✅ `200 OK`: Login successful
- ❌ `400 Bad Request`: Missing required fields
- ❌ `401 Unauthorized`: Invalid credentials

**Example Success Response:**
```json
{
  "token": "your_jwt_token_here"
}
```

---

### 3️⃣ User Info
**Endpoint:**
```
GET /api/auth/userinfo
```
**Headers:**
```json
{
  "Authorization": "Bearer your_jwt_token_here"
}
```
**Response Codes:**
- ✅ `200 OK`: Access granted
- ❌ `401 Unauthorized`: No token provided
- ❌ `403 Forbidden`: Invalid or expired token

**Example Success Response:**
```json
{
  "username": "JohnDoe",
  "email": "johndoe@example.com",
  "phonenumber": "1234567890",
  "occupation": "Engineer"
}
```

---

## 🔐 Authentication
- After login, include the **JWT token** in the `Authorization` header as `Bearer <token>` for accessing protected routes.
- Tokens expire in **1 hour**.

## 🚀 Running the API
1. Clone the repo and install dependencies:
```sh
npm install
```
2. Create a `.env` file and set:
```
PORT=5000
DATABASE_URL=your_database_url_here
ACCESS_TOKEN_SECRET=your_secret_key_here
```
3. Start the server:
```sh
npm start
```

Happy coding! 🎯

