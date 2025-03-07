# Backend Linktree - Authentication API (Express.js + JWT)

This API provides authentication and authorization using JWT. Users can register, log in, and access protected routes. It also includes a referral system.

## 📌 Base URL
```
http://localhost:5000/api/auth
```

## 📌 Endpoints

### 1⃣ User Registration (with Referral System)
**Endpoint:**
```
POST /api/auth/register
```
**Request Body:**
```json
{
  "userName": "johndoe",
  "email": "johndoe@example.com",
  "password": "securepassword",
  "phoneNumber": "1234567890",  // Optional
  "occupation": "Engineer",      // Optional
  "referralCode": "ABCD1234"     // Optional (from another user)
}
```
**Response Codes:**
- ✅ `201 Created`: User registered successfully
- ❌ `400 Bad Request`: Missing required fields
- ❌ `409 Conflict`: Email already exists
- ❌ `404 Not Found`: Invalid referral code

**Example Success Response:**
```json
{
  "message": "User registered successfully!",
  "referralCode": "XYZ9876",  // New user's unique referral code
  "referredBy": "johndoe"      // Username of the referrer (if any)
}
```

---

### 2⃣ User Login
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

### 3⃣ User Info
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
  "username": "johndoe",
  "email": "johndoe@example.com",
  "phoneNumber": "1234567890",
  "occupation": "Engineer",
  "referralCode": "XYZ9876",
  "referredBy": "janedoe"
}
```

---

### 4⃣ Get User Referrals
**Endpoint:**
```
GET /api/auth/referrals
```
**Headers:**
```json
{
  "Authorization": "Bearer your_jwt_token_here"
}
```
**Response Codes:**
- ✅ `200 OK`: Success
- ❌ `401 Unauthorized`: No token provided

**Example Success Response:**
```json
{
  "referrals": [
    {
      "username": "mike123",
      "email": "mike@example.com",
      "createdAt": "2025-02-27T12:00:00Z"
    },
    {
      "username": "sarah89",
      "email": "sarah@example.com",
      "createdAt": "2025-02-26T14:30:00Z"
    }
  ],
  "count": 2
}
```

---

### 5⃣ Get Referral Stats (Only Successful Referrals)
**Endpoint:**
```
GET /api/auth/referral-stats
```
**Headers:**
```json
{
  "Authorization": "Bearer your_jwt_token_here"
}
```
**Response Codes:**
- ✅ `200 OK`: Success
- ❌ `401 Unauthorized`: No token provided

**Example Success Response:**
```json
{
  "total_successful": 2
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

