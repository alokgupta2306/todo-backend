# Todo List Backend API

##  Project Overview
A complete REST API for a Todo List application built with **Node.js**, **Express.js**, and **MongoDB**.

##  Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios (frontend)

##  Installation

### Prerequisites
- Node.js installed
- MongoDB connection string
- npm

### Setup Instructions

1. **Install dependencies**
```bash
npm install
```

2. **Create .env file**
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

3. **Start the server**
```bash
npm run dev    # Development mode
npm start      # Production mode
```

Server runs on: `http://localhost:5000`

## 🔌 API Endpoints

### 1. Get All Todos
```
GET /api/todos
```

### 2. Create New Todo
```
POST /api/todos
Body: { "todo": "Your todo text" }
```

### 3. Update Todo
```
PUT /api/todos/:id
Body: { "todo": "Updated text" }
```

### 4. Delete Todo
```
DELETE /api/todos/:id
```

### 5. Toggle Complete Status
```
PATCH /api/todos/:id/toggle
```

### 6. Search Todos
```
GET /api/todos/search?query=search_text
```

##  Project Structure
```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── todoController.js  # Business logic
├── models/
│   └── Todo.js            # Mongoose schema
├── routes/
│   └── todoRoutes.js      # API routes
├── .env                   # Environment variables
├── package.json           # Dependencies
└── server.js              # Entry point
```

##  Features Implemented
-  CRUD operations (Create, Read, Update, Delete)
-  Search functionality (case-insensitive)
-  Toggle todo completion status
-  Error handling and validation
-  MongoDB integration
-  CORS enabled

##  Assignment Requirements Met
-  Backend APIs implemented
-  MongoDB connected
-  Controller-Routes structure
-  All CRUD operations
-  Search functionality
-  Error handling
-  Validation
-  Documentation

## Author
Alok Gupta
