const Todo = require('../models/Todo');

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    
    if (!todo) {
      return res.status(400).json({ success: false, message: 'Please provide todo text' });
    }

    const newTodo = await Todo.create({ todo });
    res.status(201).json({ success: true, data: newTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todo } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { todo },
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }

    res.status(200).json({ success: true, data: updatedTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }

    res.status(200).json({ success: true, message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Toggle complete status
exports.toggleComplete = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }

    todo.completed = !todo.completed;
    await todo.save();

    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Search todos - NEW FUNCTION
exports.searchTodos = async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ success: false, message: 'Please provide search query' });
    }

    const todos = await Todo.find({
      todo: { $regex: query, $options: 'i' } // Case-insensitive search
    }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};