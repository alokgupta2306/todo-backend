const express = require('express');
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleComplete,
  searchTodos
} = require('../controllers/todoController');

// IMPORTANT: Search route MUST be BEFORE the :id routes
// Otherwise /search will be treated as an ID
router.get('/todos/search', searchTodos);      // Search - MUST BE FIRST!

// Other routes
router.get('/todos', getTodos);                // Get all todos
router.post('/todos', createTodo);             // Create new todo
router.put('/todos/:id', updateTodo);          // Update todo
router.delete('/todos/:id', deleteTodo);       // Delete todo
router.patch('/todos/:id/toggle', toggleComplete); // Toggle complete

module.exports = router;