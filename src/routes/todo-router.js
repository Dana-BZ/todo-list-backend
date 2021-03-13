const express = require('express');
const router = express.Router();

const {
    getTodos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
} = require('../bl/todos-bl');

// todos router

// GET /todos
router.get('/', async (req, res) => {
    const todos = await getTodos();
    res.json(todos);
});

// POST /todos
router.post('/', async (req, res) => {
    const { text } = req.body;
    const newTodo = await addTodo(text);
    res.json(newTodo);
});

// PUT /todos/:id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const updatedTodo = await setTodoCompleted(id, completed);
    res.json(updatedTodo);
});

// DELETE /todos/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedTodo = await deleteTodo(id);
    res.json(deletedTodo);
});

module.exports = router;
