const mongoose = require('mongoose');

// Define what a Todo looks like in database
const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: [true, 'Please add a todo text'],
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});

module.exports = mongoose.model('Todo', todoSchema);